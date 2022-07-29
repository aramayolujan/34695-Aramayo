import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="nombreMarca">
                <h4 className='nombreMarcaH4'>Angela</h4>
            </div>
            <div className='contenedorCategorias'>
                <button className='botonCategorias' href='#'>Esmaltes</button>
                <button className='botonCategorias' href='#'>Construcción</button>
                <button className='botonCategorias' href='#'>Decoración</button>
                <button className='botonCategorias' href='#'>Herramientas</button>
            </div>   
            <div>
                <CartWidget />
            </div> 
                
        </nav>
    )
}

export default Navbar;