import { Router } from 'express'
import { ProductController } from '../controllers/product.controller'
import { OrderController } from '../controllers/order.controller'

const router = Router()//Criação das rotas

const productController = new ProductController()
const orderController = new OrderController()

// Endpoint obrigatório
router.get('/products', productController.list)

// Pedido
router.post('/orders', orderController.create)
router.get('/orders/:id', orderController.findById)

export default router