import './ItemCount.css'
import { useState, useEffect} from 'react'

const ItemCount = ({stock = 0, initial = 1 , onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    useEffect(() => {
        setQuantity(initial)
    }, [initial])
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
 
    return(
        <div className='contador'>          
             <div  className='contenedorContador'>
                 <button  onClick={decrement} className='btnDecrement'>-</button>
                 <h4  className='nroCantidad'>{quantity}</h4>
                 <button  onClick={increment} className='btnIncrement'>+</button>
             </div>
             <div className='addToCard'>
                 <button onClick={() => onAdd(quantity)} className='btnAddToCard'>Agregar al carrito</button>
             </div>
        </div>
    )
 
 }
 export default ItemCount
