import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='contenedorCarrito'>
                <img className='carrito'  src='images/carrito.png' alt='CartWidget'  />
                <h5 className='numeroCarrito'>2</h5>
        </div>
    )
}

export default CartWidget