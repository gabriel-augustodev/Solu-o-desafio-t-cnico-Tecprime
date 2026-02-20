import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Success
 * Página simples que confirma ao usuário que o pedido foi realizado com sucesso.
 * - Exibe um ícone e mensagens de confirmação.
 * - Se o `orderId` estiver presente em `location.state`, mostra o número do pedido.
 * - Oferece um botão que redireciona o usuário de volta para a loja (rota `/`).
 */

function Success() {
    // Hook do react-router para navegar programaticamente entre rotas
    const navigate = useNavigate()

    // Hook do react-router para acessar informações da localização atual
    // Utilizamos `location.state` para recuperar dados passados pela navegação (ex: orderId)
    const location = useLocation()

    // Se a rota anterior setou um estado com `orderId`, nós o usamos aqui.
    // O operador de encadeamento opcional protege caso `state` seja undefined.
    const orderId = location.state?.orderId

    return (
        // Container que ocupa toda a altura da tela e centraliza o conteúdo
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f3f4f6'
            }}
        >
            {/* Caixa branca central com sombra que contém a mensagem de sucesso */}
            <div
                style={{
                    background: 'white',
                    padding: 40,
                    borderRadius: 12,
                    width: '100%',
                    maxWidth: 500,
                    textAlign: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
                }}
            >
                {/* Ícone de confirmação grande */}
                <div
                    style={{
                        fontSize: 60,
                        marginBottom: 20
                    }}
                >
                    ✅
                </div>

                {/* Título principal */}
                <h1 style={{ marginBottom: 10 }}>
                    Pedido realizado com sucesso!
                </h1>

                {/* Texto auxiliar explicando que o pagamento foi confirmado */}
                <p style={{ color: '#6b7280', marginBottom: 20 }}>
                    Seu pagamento foi confirmado.
                </p>

                {/*
                  Se `orderId` existe, exibimos um cartão com o número do pedido.
                  Isso ajuda o usuário a identificar ou anotar o número para suporte.
                */}
                {orderId && (
                    <div
                        style={{
                            background: '#f9fafb',
                            padding: 15,
                            borderRadius: 8,
                            marginBottom: 25,
                            fontSize: 14
                        }}
                    >
                        <strong>Número do pedido:</strong>
                        <br />
                        {orderId}
                    </div>
                )}

                {/*
                  Botão que leva o usuário de volta para a página principal da loja.
                  Usamos `navigate('/')` para navegar para a rota raiz.
                */}
                <button
                    onClick={() => navigate('/')}
                    style={{
                        width: '100%',
                        padding: 14,
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: 8,
                        fontSize: 16,
                        cursor: 'pointer'
                    }}
                >
                    Voltar para a loja
                </button>
            </div>
        </div>
    )
}

export default Success