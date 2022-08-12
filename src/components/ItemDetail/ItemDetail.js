import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({ name, stock, img, price, description}) => {
    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
    }
    return (
        <div className='cardDetalle'>
            <h3 className='colorProductoDetalle'>{name}</h3>
            <img className="imgProductoDetalle" src={img}/>
            <p className='colorProductoDetalle'>{description}</p>
            <p className='colorProductoDetalle'> ${price}.-</p>
            <p className='colorProductoDetalle'>stock: {stock}</p>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    )

    

}


export default ItemDetail;
