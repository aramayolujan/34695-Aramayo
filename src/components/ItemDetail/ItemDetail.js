import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import ItemCount from '../ItemCounter/ItemCount';
import './ItemDetail.css'
import CartContext from '../../context/CartContext';



const ItemDetail = ({ id, name, stock, img, price, description}) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        console.log('agregue al carrito')
        console.log(quantity)
        const productToAdd = {
            id,name,price, quantity
        }
        addItem(productToAdd)
    }


    return (
        <div className='cardDetalle'>
            <h3 className='colorProductoDetalle'>{name}</h3>
            <img className="imgProductoDetalle" src={img}/>
            <p className='colorProductoDetalle'>{description}</p>
            <p className='colorProductoDetalle'> ${price}.-</p>
            <p className='colorProductoDetalle'>stock: {stock}</p>
            <div>
            {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </div>
        </div>
    )

    

}


export default ItemDetail;
