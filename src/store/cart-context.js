import React, { useState, useEffect } from 'react'

const CartContext = React.createContext({
    cart: [],
    onAddToCart: (id,qty) => {},
    onRemoveFromCart: (id) => {},
    viewOrder: false
})

export const CartContextProvider = props => {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [viewCart, setViewCart] = useState(false)
    const [viewOrder, setViewOrder] = useState(false)

    useEffect(() => {
        setCartCount(cart.reduce((total,item) => { return total + item.quantity},0))
    }, [cart])

    const containsId = (arr,id) => {
        return arr.some(item => item.id === id)
    }

    const onCloseCart = () => {
        setViewCart(false)
    }
    const onViewCart = () => {
        setViewCart(true)
    }

    const onAddToCart = (id,qty) => {
        setCart(prevState => {
            let newState = [...prevState].map(i => ({id: i.id, quantity: i.quantity}))
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
                let itemCopy = {...item}
                if (itemCopy.id === id) {
                    itemCopy.quantity -= 1
                    return itemCopy
                } else {
                    return itemCopy
                }
            })
            newState = newState.filter(item => {
                return item.quantity > 0
            })

            return newState
        })
    }
    const viewOrderHandler = () => {
        setViewCart(false)
        setViewOrder(true)
    }
    const closeOrderHandler = () => {
        setViewOrder(false)
    }

    return (
        <CartContext.Provider value={{cart:cart,viewCart:viewCart,cartCount:cartCount,onAddToCart:onAddToCart,onRemoveFromCart:onRemoveFromCart,onViewCart:onViewCart,onCloseCart:onCloseCart,viewOrder,onViewOrder:viewOrderHandler,onCloseOrder:closeOrderHandler}} >{props.children}</CartContext.Provider>
    )
}

export default CartContext