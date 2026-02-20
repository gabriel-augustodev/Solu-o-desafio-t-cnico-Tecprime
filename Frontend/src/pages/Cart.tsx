import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/useCart'

function Cart() {
    const navigate = useNavigate()
    const {
        cart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        total
    } = useCart()// Obtém os dados e funções do contexto do carrinho

    return (
        <div style={{ maxWidth: 900, margin: '40px auto' }}>
            <h1>🛒 Carrinho</h1>

            {cart.length === 0 ? (// Verifica se o carrinho está vazio
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    {cart.map((item) => (// Mapeia os itens do carrinho
                        <div
                            key={item.id}
                            style={{
                                display: 'flex',
                                gap: 20,
                                alignItems: 'center',
                                borderBottom: '1px solid #eee',
                                padding: '20px 0'
                            }}
                        >
                            {/* IMAGEM */}
                            <img
                                src={item.imagem}
                                alt={item.nome}
                                style={{
                                    width: 100,
                                    height: 100,
                                    objectFit: 'cover',
                                    borderRadius: 8
                                }}
                            />

                            {/* INFO */}
                            <div style={{ flex: 1 }}>
                                <h3>{item.nome}</h3>
                                <p>R$ {item.preco.toFixed(2)}</p>

                                {/* CONTROLE DE QUANTIDADE */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        style={btnStyle}
                                    >
                                        −
                                    </button>

                                    <span>{item.quantidade}</span>

                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        style={btnStyle}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* SUBTOTAL */}
                            <div style={{ textAlign: 'right' }}>
                                <p>
                                    Subtotal: R${' '}
                                    {(item.preco * item.quantidade).toFixed(2)}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{// Estilo do botão de remoção
                                        background: '#dc2626',
                                        color: 'white',
                                        border: 'none',
                                        padding: '6px 10px',
                                        borderRadius: 6,
                                        cursor: 'pointer'
                                    }}
                                >
                                    Remover
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* RESUMO */}
                    <div
                        style={{
                            marginTop: 30,
                            padding: 20,
                            background: '#f9fafb',
                            borderRadius: 10
                        }}
                    >
                        <h2>Total: R$ {total.toFixed(2)}</h2>

                        <button
                            onClick={() => navigate('/checkout')}
                            disabled={cart.length === 0}
                            style={{
                                width: '100%',
                                padding: 14,
                                marginTop: 15,
                                background: '#2563eb',
                                color: 'white',
                                border: 'none',
                                borderRadius: 8,
                                cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                                opacity: cart.length === 0 ? 0.6 : 1
                            }}
                        >
                            Finalizar Compra
                        </button>

                        <button
                            onClick={clearCart}
                            style={{
                                width: '100%',
                                padding: 14,
                                marginTop: 10,
                                background: '#6b7280',
                                color: 'white',
                                border: 'none',
                                borderRadius: 8,
                                cursor: 'pointer'
                            }}
                        >
                            Limpar Carrinho
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

const btnStyle = {
    background: '#e5e7eb',
    border: 'none',
    padding: '6px 12px',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 16
}

export default Cart // Exporta o componente Cart para uso em outras partes do aplicativo