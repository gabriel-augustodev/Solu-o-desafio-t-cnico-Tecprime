import { z } from 'zod'

// Schema de validação do pedido
export const orderSchema = z.object({
    customerName: z.string().min(3),
    email: z.string().email(),
    address: z.string().min(5),
    paymentMethod: z.enum(['Pix', 'Cartao', 'Boleto']),
    items: z.array(
        z.object({
            productId: z.number(),
            quantity: z.number().min(1)
        })
    )
})