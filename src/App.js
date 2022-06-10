import React, { useContext, useState, useEffect } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import CartContext from './store/cart-context'
import Cart from './components/Cart/Cart'

const App = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const ctx = useContext(CartContext)


  useEffect(() => {
    const mealItems = async () => {
        setIsLoading(true)
        const response = await fetch("https://practice-project-c0261-default-rtdb.firebaseio.com/meals.json")
        const data = await response.json()
        let meals = []
        for (const i in data) {
            meals.push({id: i, title: data[i].title, desc: data[i].desc, price: data[i].price})
        }
        setMeals(meals)
        setIsLoading(false)
    }
    mealItems()
  }, [])

  return (
    <React.Fragment>
      {ctx.viewCart && <Cart meals={meals} />}
      <Header />
      <Body isLoading={isLoading} meals={meals} />
      <Footer />
    </React.Fragment>
  )
}
export default App