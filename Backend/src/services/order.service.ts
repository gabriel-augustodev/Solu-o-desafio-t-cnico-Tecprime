import { prisma } from '../config/prisma'
import axios from 'axios'

export class OrderService {
    async createOrder(data: any) {
        // Buscar produtos da API externa
        const response = await axios.get('https://dummyjson.com/products')
        const products = response.data.products

        let total = 0

        const orderItems = data.items.map((item: any) => {
            const product = products.find((p: any) => p.id === item.productId)

            if (!product) {
                throw new Error(`Produto ${item.productId} não encontrado`)
            }

            const priceInBRL = product.price * 5.2

            total += priceInBRL * item.quantity

            return {
                productId: product.id,
                productName: product.title,
                price: priceInBRL,
                quantity: item.quantity
            }
        })

        // Transação garante consistência
        const order = await prisma.$transaction(async (tx) => {
            const createdOrder = await tx.order.create({
                data: {
                    customerName: data.customerName,
                    email: data.email,
                    address: data.address,
                    paymentMethod: data.paymentMethod,
                    totalAmount: total
                }
            })

            await tx.orderItem.createMany({
                data: orderItems.map((item: any) => ({
                    ...item,
                    orderId: createdOrder.id
                }))
            })

            return createdOrder
        })

        return order
    }

    async getOrderById(id: string) {
        return prisma.order.findUnique({
            where: { id },
            include: { items: true }
        })
    }
}