import { Request, Response } from 'express'
import { OrderService } from '../services/order.service'
import { orderSchema } from '../validators/order.validator'

export class OrderController { //Criação do controller para lidar com as requisições dos pedidos
    async create(req: Request, res: Response) { //Criar um novo pedido
        const parsed = orderSchema.safeParse(req.body)

        if (!parsed.success) {
            return res.status(400).json(parsed.error)
        }

        const service = new OrderService()

        const order = await service.createOrder(parsed.data)

        return res.status(201).json({
            orderId: order.id,
            total: Number(order.totalAmount)
        })
    }

    async findById( //Buscar pedido por ID
        req: Request<{ id: string }>,
        res: Response
    ) {
        const service = new OrderService()

        const order = await service.getOrderById(req.params.id)

        if (!order) {
            return res.status(404).json({ message: 'Pedido não encontrado' })
        }

        return res.json(order)
    }
}