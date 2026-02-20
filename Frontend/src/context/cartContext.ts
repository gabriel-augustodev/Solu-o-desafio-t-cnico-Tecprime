import { createContext } from 'react'

/**
 * Representa um produto disponível na loja.
 */
export interface Product {
    id: number
    nome: string
    descricao: string
    preco: number
    estoque: number
    imagem: string
}

/**
 * Item do carrinho estende `Product` adicionando `quantidade`.
 * Usa esse tipo para representar itens que efetivamente estão no carrinho
 */
export interface CartItem extends Product {
    quantidade: number
}

/**
 * Estrutura e ações expostas pelo contexto do carrinho (`CartContext`).
 */
export interface CartContextData {
    cart: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    total: number
}

/**
 * Contexto React responsável por compartilhar o estado do carrinho entre componentes.
 */
export const CartContext = createContext<CartContextData>(
    {} as CartContextData
)