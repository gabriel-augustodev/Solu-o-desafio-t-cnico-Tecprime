import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/api'

import type { Product } from "../types/Product"
import { ProductCard } from '../components/ProductCard'
import { useCart } from '../context/useCart'

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([]) // Estado para armazenar a lista de produtos
    const { addToCart, cart } = useCart() // Obtém as funções e o estado do carrinho

    useEffect(() => { // Função assíncrona para buscar produtos da API
        async function fetchProducts() {
            const response = await api.get('/products')
            setProducts(response.data)
        }

        fetchProducts()// Chama a função para buscar produtos
    }, []) // O array vazio indica que o efeito deve ser executado apenas uma vez, após a montagem do componente

    return (
        <div style={{ padding: 20 }}>
            {/* Header */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 30
                }}
            >
                <h1>Produtos</h1>

                <Link
                    to="/cart"
                    style={{
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        background: '#111',
                        color: '#fff',
                        padding: '10px 15px',
                        borderRadius: 8
                    }}
                >
                    🛒 Carrinho ({cart.length})
                </Link>
            </div>

            {/* Lista de Produtos */}
            <div
                style={{
                    display: 'flex',
                    gap: 20,
                    flexWrap: 'wrap'
                }}
            >
                {products.map((product) => (// Mapeia a lista de produtos
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    )
}