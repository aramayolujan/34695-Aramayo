import './Item.css'


const Item = ({products}) => {
    return (
        <div>
            <h3>{products.name}</h3>
            <img className="imgProducto" src={products.img}/>
            <p>{products.description}</p>
            <p>${products.price}.-</p>
            <button>Ver Detalle</button>
            <p>stock: {products.stock}</p>
        </div>
    )
}

export default Item;