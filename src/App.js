import React, { useContext } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import CartContext from './store/cart-context'
import Cart from './components/Cart/Cart'

const App = () => {
  const ctx = useContext(CartContext)

  return (
    <React.Fragment>
      {ctx.viewCart && <Cart />}
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  )
}
export default App