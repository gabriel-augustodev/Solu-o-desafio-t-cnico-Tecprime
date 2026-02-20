import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from './pages/Products'
import Cart from './pages/Cart'
import { Checkout } from './pages/Checkout'
import Success from './pages/Success'
import { CartProvider } from './context/CartProvider'

function App() {
  return (
    <CartProvider> {/* Envolve a aplicação com o provedor do carrinho para disponibilizar o contexto em toda a aplicação */}
      <BrowserRouter> {/* Configura o roteamento da aplicação */}
        <Routes> {/* Define as rotas da aplicação */}
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success/:id" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App // Exporta o componente App como padrão