import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {getQuantity} = useContext(CartContext)
    const quantity = getQuantity()

    return (
        <Link to='/cart' className='contenedorCarrito'>
            <img className='carrito'  src='https://i.ibb.co/Yf2480f/carrito.png' alt='CartWidget'  />
            {quantity}
        </Link>
    )
}

export default CartWidget