import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import ItemCount from '../ItemCounter/ItemCount';
import './ItemDetail.css'
import CartContext from '../../context/CartContext';



const ItemDetail = ({ id, name, stock, img, price, description}) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        console.log('agregue al carrito')
        console.log(quantity)
        const productToAdd = {
            id,name,price, quantity, img
        }
        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className='cardDetalle'>
            <div className='detalle'>
                <h3 className='colorProductoDetalle'>{name}</h3>
                <img className="imgProductoDetalle" src={img}/>
            </div>
            <div className='detalle'>
                <p className='colorProductoDetalle'>{description}</p>
                <p className='colorProductoDetalle'> ${price}.-</p>
                <p className='colorProductoDetalle'>stock: {stock}</p>
                <div className='colorProductoDetalle'>
                    {
                        quantityToAdd === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
                        ) : (
                            <Link to='/cart' className='linkFinalizar'>Finalizar compra</Link>
                        )
                    }
                </div>
            </div>
        </div>
    )

    

}


export default ItemDetail;
