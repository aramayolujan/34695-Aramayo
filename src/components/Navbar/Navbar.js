import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <nav className="Navbar">
            <Link to='/' className="nombreMarca">
                <h4 className='nombreMarcaH4'>Angela</h4>
            </Link>
            <div className='contenedorCategorias'>
                <Link to='/category/esmaltes' className='botonCategorias' >Esmaltes</Link>
                <Link to='/category/construccion'className='botonCategorias' >Construcción</Link>
                <Link to='/category/decoracion'className='botonCategorias' >Decoración</Link>
                <Link to='/category/herramientas'className='botonCategorias' >Herramientas</Link>
            </div>   
            <div>
                <CartWidget />
            </div> 
                
        </nav>
    )
}

export default Navbar;