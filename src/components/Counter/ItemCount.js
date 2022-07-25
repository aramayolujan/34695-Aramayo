import { useState } from "react"
import './ItemCount.css'


const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock) {
            setCount(count +1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count -1)
        }
    }
    return (
        <div className="contenedorContador">
            <div>
                <div className="contador">
                    <button onClick={decrement}>-</button>
                    <h5>{count}</h5>
                    <button onClick={increment}>+</button>
                </div>
                <div>
                    <button onClick={() => onAdd(count)}>agregar al carrito</button>
                </div>
            </div>
           
            
            
        </div>
    )
    }
export default Counter;


