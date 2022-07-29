import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({products}) => {
    return(
        <div className="contenedorProductos">
                {products.map(prod => <Item key={prod.id} products={prod}/>)}
        </div>
    )
}

export default ItemList;