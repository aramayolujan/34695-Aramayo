import './ItemDetail.css'

const ItemDetail = ({ name, stock, img, price, description}) => {
    return (
        <div className='cardDetalle'>
            <h3 className='colorProductoDetalle'>{name}</h3>
            <img className="imgProductoDetalle" src={img}/>
            <p className='colorProductoDetalle'>{description}</p>
            <p className='colorProductoDetalle'> ${price}.-</p>
            <p className='colorProductoDetalle'>stock: {stock}</p>
        </div>
    )
}

export default ItemDetail
