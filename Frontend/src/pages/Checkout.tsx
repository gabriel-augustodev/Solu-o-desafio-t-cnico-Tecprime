import React, { useState } from 'react'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

interface CheckoutForm {// Define a interface para o formulário de checkout
    nome: string
    email: string
    endereco: string
    pagamento: 'Pix' | 'Cartao' | 'Boleto'
}

export function Checkout() {
    const { cart, total, clearCart } = useCart() // Obtém o carrinho, total e função para limpar o carrinho
    const navigate = useNavigate() // Inicializa a navegação

    /** 
     *  Estado para gerenciar os dados do formulário
    */
    const [form, setForm] = useState<CheckoutForm>({
        nome: '',
        email: '',
        endereco: '',
        pagamento: 'Pix'
    })


    /** 
     *  Função para lidar com o envio do formulário
    */
    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault()// Previne o comportamento padrão de recarregar a página ao enviar o formulário

        // Verifica se o carrinho está vazio
        if (!cart.length) {
            alert('Carrinho vazio')
            return
        }

        try {
            // Estrutura do pedido a ser enviado
            const order = {
                customerName: form.nome,
                email: form.email,
                address: form.endereco,
                paymentMethod: form.pagamento,
                items: cart.map(item => ({
                    productId: item.id,
                    quantity: item.quantidade
                }))
            }

            // Envia o pedido para a API
            const response = await api.post('/orders', order)

            clearCart()// Limpa o carrinho após sucesso

            // Navega para a página de sucesso com o ID do pedido
            navigate(`/success/${response.data.orderId}`)
        } catch (error) {
            // Trata o erro em caso de falha ao criar o pedido
            console.error('Erro ao criar pedido', error)
            alert('Erro ao finalizar pedido')// Alerta o usuário sobre o erro
        }
    }

    return (
        <div>
            <h1>Checkout</h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Nome"
                    value={form.nome}
                    onChange={e =>
                        setForm({ ...form, nome: e.target.value })
                    }
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e =>
                        setForm({ ...form, email: e.target.value })
                    }
                    required
                />

                <input
                    placeholder="Endereço"
                    value={form.endereco}
                    onChange={e =>
                        setForm({ ...form, endereco: e.target.value })
                    }
                    required
                />

                <select
                    value={form.pagamento}
                    onChange={e =>
                        setForm({
                            ...form,
                            pagamento: e.target.value as CheckoutForm['pagamento']
                        })
                    }
                >
                    <option value="Pix">Pix</option>
                    <option value="Cartao">Cartão</option>
                    <option value="Boleto">Boleto</option>
                </select>

                <h3>Total: R$ {total.toFixed(2)}</h3>// Exibe o total da compra formatado

                <button type="submit">// Botão para confirmar o pedido
                    Confirmar Pedido
                </button>
            </form>
        </div>
    )
}