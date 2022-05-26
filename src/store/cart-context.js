import React, { useState, useEffect } from 'react'

const CartContext = React.createContext({
    cart: [],
    onAddToCart: (id,qty) => {},
    onRemoveFromCart: (id) => {}
})

export const CartContextProvider = props => {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        setCartCount(cart.reduce((total,item) => { return total + item.quantity},0))
    }, [cart])

    const containsId = (arr,id) => {
        return arr.some(item => item.id === id)
    }

    const onAddToCart = (id,qty) => {
        setCart(prevState => {
            let newState = [...prevState]
            if (!newState.length || !containsId(newState,id)) {
                newState.push({id:id, quantity:qty})
            } else {
                for (let item of newState) {
                    if (item.id === id) {
                        item.quantity += qty
                        break
                    }
                }
            }
            return newState
        })
    }
    const onRemoveFromCart = (id) => {
        setCart(prevState => {
            let newState = [...prevState].map(item => {
                if (item.id === id) {
                    item.quantity -= 1
                    return item
                } else {
                    return item
                }
            })
            newState = newState.filter(item => {
                return item.quantity > 0
            })

            return newState
        })
    }

    return (
        <CartContext.Provider value={{cart:cart,cartCount:cartCount,onAddToCart:onAddToCart,onRemoveFromCart:onRemoveFromCart}} >{props.children}</CartContext.Provider>
    )
}

export default CartContext