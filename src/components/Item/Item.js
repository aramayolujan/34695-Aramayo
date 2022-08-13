import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({products}) => {

    return (
        <div className='card'>
            <h3 className='colorProducto '>{products.name}</h3>
            <img className="imgProducto" src={products.img}/>
            <p className='colorProducto '>{products.description}</p>
            <p className='colorProducto '> ${products.price}.-</p>
            <Link to={`/detail/${products.id}`} className='btnVerDetalle'>Ver Detalle</Link>
            <p className='colorProducto '>stock: {products.stock}</p>
        </div>
    )
}

export default Item;