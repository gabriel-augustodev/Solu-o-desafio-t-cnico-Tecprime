import { useContext } from 'react'
import { CartContext } from './cartContext'

/**
 * useCart
 * Hook customizado que encapsula o consumo do `CartContext`.
 *
 * - Simplifica o acesso ao estado e às ações do carrinho (ex: `cart`, `addToCart`).
 * - Uso: `const { cart, addToCart } = useCart()`
 *
 * Retorna o valor provido por `CartContext` (definido em `cartContext.ts`).
 */
export function useCart() {
    return useContext(CartContext)
}