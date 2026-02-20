import { useState } from 'react'
import type { ReactNode } from 'react'
import { CartContext } from './cartContext'
import type { CartItem, Product } from './cartContext'

/**
 * Props do `CartProvider` — recebe `children` para envolver a aplicação
 * com o contexto do carrinho.
 */
interface Props {
    children: ReactNode
}

/**
 * CartProvider
 * Componente provedor que encapsula a lógica do carrinho de compras e expõe
 * ações e estado via `CartContext` para que componentes filhos possam consumir.
 *
 * Estado local:
 * - `cart`: array de `CartItem` (produto + `quantidade`).
 */
export function CartProvider({ children }: Props) {
    // Estado do carrinho
    const [cart, setCart] = useState<CartItem[]>([])

    /**
     * Adiciona um produto ao carrinho.
     * - Se o produto já existe, incrementa `quantidade` em 1.
     * - Caso contrário, adiciona o produto com `quantidade: 1`.
     */
    function addToCart(product: Product) {
        setCart(prevCart => {
            const productExists = prevCart.find(item => item.id === product.id)

            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                )
            }

            return [...prevCart, { ...product, quantidade: 1 }]
        })
    }

    /**
     * Incrementa a quantidade de um item no carrinho identificando por `id`.
     */
    function increaseQuantity(id: number) {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )
        )
    }

    /**
     * Decrementa a quantidade do item; se atingir 0, remove o item do carrinho.
     */
    function decreaseQuantity(id: number) {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter(item => item.quantidade > 0)
        )
    }

    /**
     * Remove completamente o item com o `id` informado do carrinho.
     */
    function removeFromCart(id: number) {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    /**
     * Esvazia o carrinho.
     */
    function clearCart() {
        setCart([])
    }

    // Calcula o total atual do carrinho (preço * quantidade)
    const total = cart.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
    )

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseQuantity,
                decreaseQuantity,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}