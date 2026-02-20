import { Request, Response } from 'express'
import { ProductService } from '../services/product.service'

export class ProductController { //Criação do controller para lidar com as requisições dos produtos
    async list(req: Request, res: Response) {//Listar os produtos
        const service = new ProductService()

        const products = await service.getProducts()

        return res.json(products)
    }
}