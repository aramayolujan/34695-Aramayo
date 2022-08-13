import { useState, createContext } from "react"

const CartContext = createContext() 

export const CartContextProvider =({children}) => {
    const [cart,setCart] =useState([])
  console.log(cart)
  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd])
  }

  const getQuantity = () =>{
    let acumulador = 0 

    cart.forEach(prod => {
      acumulador += prod.quantity
    })

    return acumulador
  }

  return (
    <CartContext.Provider value={{cart, addItem, getQuantity}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext