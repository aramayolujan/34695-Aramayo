import './cart.css'
import CartContext from '../../context/CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom'


const CartDetail = () =>{
    const {cart, limpiarCarrito, eliminarItem, getQuantity, total} = useContext(CartContext)

    let prodInCart = getQuantity()
    let compraTotal = total()
    console.log(prodInCart)
    
    return(
        <div className='cart'>
              <div className='prodSolo'>
              <div>Cantidad</div>
              <div className='descripcionCarrito'>Descripcion</div>
              <div className='precioCarrito'>P.Unit.</div>
              <div className='precioCarrito'>Subtotal</div>
              <div ></div>
        </div>
            {prodInCart === 0 && <div className='carritoLimpio'>No hay productos en el carrito</div>}
          {cart.map(prod => <div key={prod.id} className='prodSolo'>
            <div>{prod.quantity}</div>
            <div className='descripcionCarrito'> {prod.name}</div>
            <div className='precioCarrito'>${prod.price} </div>
            <div className='precioCarrto'>${prod.price * prod.quantity}</div>
            <button onClick={() => eliminarItem(prod.id)} className='linkFinalizar'>remover</button>
            </div>)}
            <div className='footerCarrito'>
            {prodInCart > 0 ? <button onClick={() => limpiarCarrito()} className='linkFinalizar'>Vaciar Carrito</button> : 
            <Link to="/" className='linkFinalizar'>Volver al Inicio</Link>}
            <Link to='/checkout' className='linkFinalizar'>Checkout</Link>

            <div className='footerCarritoDescripcion'> Cantidad de Productos: {prodInCart} </div>
            <div className='footerCarritoDescripcion'> Total de Compra: ${compraTotal} </div>
            </div>
        </div>
      )
    

   
}

export default CartDetail