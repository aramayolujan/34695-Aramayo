import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {getQuantity, total } = useContext(CartContext)
    const quantity = getQuantity();
    const totalFinal = total();

    return(
        quantity > 0 && (
        <Link to='/cart' className='carritoNavbar'>
            <img className='carrito'  src='https://i.ibb.co/Yf2480f/carrito.png' alt='CartWidget'  />
            <p  className='nroNavbar'>{ quantity }</p>
        </Link>
       )
    )
}



export default CartWidget