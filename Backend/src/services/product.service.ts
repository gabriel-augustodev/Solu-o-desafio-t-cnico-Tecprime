import axios from 'axios'

export class ProductService {
    async getProducts() {
        const response = await axios.get('https://dummyjson.com/products')

        // Normalização dos dados
        return response.data.products.map((p: any) => ({
            id: p.id,
            nome: p.title,
            descricao: p.description,
            preco: Number(p.price) * 5.2, // conversão fictícia para R$
            estoque: p.stock,
            imagem: p.thumbnail
        }))
    }
}