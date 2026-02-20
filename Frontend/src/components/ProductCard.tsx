import type { Product } from "../types/Product"

/**
 * Props do `ProductCard`.
 * - `product`: objeto com os dados do produto (nome, descrição, preço, imagem, id...)
 * - `onAddToCart`: callback disparado quando o usuário clica em "Adicionar ao carrinho".
 *   Recebe o próprio `product` como argumento para que o contexto/estado do carrinho
 *   possa inserir ou incrementar a quantidade do item.
 */
interface Props {
    product: Product
    onAddToCart: (product: Product) => void
}

/**
 * ProductCard
 * Componente funcional que renderiza as informações básicas de um produto e um botão
 * para adicioná-lo ao carrinho.
 */
export const ProductCard = ({ product, onAddToCart }: Props) => {
    return (
        // Caixa do cartão do produto com borda e espaçamento
        <div style={{ border: '1px solid #ccc', padding: 16, width: 250 }}>
            {/* Imagem do produto.  */}
            <img src={product.imagem} width={200} />

            {/* Nome do produto */}
            <h3>{product.nome}</h3>

            {/* Descrição curta do produto */}
            <p>{product.descricao}</p>

            {/* Preço formatado com duas casas decimais */}
            <strong>R$ {product.preco.toFixed(2)}</strong>

            {/*
              Botão que adiciona o produto ao carrinho.
              - Chamamos `onAddToCart(product)` para delegar a ação ao componente pai
              ou ao contexto responsável por gerenciar o carrinho.
            */}
            <button onClick={() => onAddToCart(product)}>
                Adicionar ao carrinho
            </button>
        </div>
    )
}