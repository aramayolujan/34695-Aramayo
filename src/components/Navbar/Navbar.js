import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="nombreMarca">
                <h4 className='nombreMarcaH4'>Meliné</h4>
            </div>
            <div className='contenedorCategorias'>
                <button className='botonCategorias' href='#'>Manicuria</button>
                <button className='botonCategorias' href='#'>Pedicuria</button>
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