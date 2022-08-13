import { useState, createContext } from "react"

const CartContext = createContext() 

export const CartContextProvider =({children}) => {
    const [cart,setCart] =useState([])
    console.log(cart)
    const addItem = (productToAdd) => {
    if(!existeCart(productToAdd.id)){
        setCart([...cart, productToAdd])
    }else {
        const cartUpdated = cart.map(prod => {
            if(prod.id === productToAdd.id) {
                const productUpdated = {
                    ...prod,
                    quantity: productToAdd.quantity
                }
                return productUpdated
            } else {
                return prod
            }
        })

        setCart(cartUpdated)
    }
  }

  const limpiarCarrito = () => {
    setCart([])
  }

  const eliminarItem = (id) => {
    const nuevoCarritoSinProd = cart.filter(prod => prod.id !== id)
    setCart(nuevoCarritoSinProd)
    }

  const existeCart = (id) => {
    return cart.some(prod => prod.id === id)
}

  const getQuantity = () =>{
    let acumulador = 0 

    cart.forEach(prod => {
      acumulador += prod.quantity
    })

    return acumulador
  }

  const getProductQuantity = (id) => {
    const product = cart.find(prod => prod.id === id)
    return product?.quantity
  }

  return (
    <CartContext.Provider value={{cart, addItem, getQuantity, existeCart,eliminarItem, limpiarCarrito, getProductQuantity }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext