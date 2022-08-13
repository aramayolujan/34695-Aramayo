import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div className="btnAddToCard">
            <input type='number' onChange={handleChange} value={count}/>
            <button className="btnAddToCard" onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
         
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div className="contenedorContador">
            <div>
                <div className="contador">
                    <button className="btnDecrement" onClick={decrement}>-</button>
                    <p className="nroCount">{count}</p>
                    <button className="btnIncrement" onClick={increment}>+</button>
                </div>
                <div className="btnAddToCard">
                    <button className="btnAddToCard" onClick={() => onConfirm(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}



    const ItemCount = ({ id, name, img, category, description, price, stock }) => {
        const [inputType, setInputType] = useState('button')
        const [quantityToAdd, setQuantityToAdd] = useState(0)
    
        const handleOnAdd = (quantity) => {
            console.log('agregue al carrito')
            console.log(quantity)
            setQuantityToAdd(quantity)
        }
    
        const Count = inputType === 'button' ? ButtonCount : InputCount
        return (
            <div className='contenedorFinalizar'>
            {
                quantityToAdd === 0 ? (
                    <Count onConfirm={handleOnAdd} stock={stock} />
                ) : (
                    <Link className="linkFinalizar" to='/cart'>Finalizar compra</Link>
                )
            }
            </div>
        )
    }
export default ItemCount
