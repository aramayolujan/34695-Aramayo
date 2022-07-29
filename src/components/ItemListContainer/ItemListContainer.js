import './ItemListContainer.css'
import { getProductsNails } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'


const ItemListContainer = ({greeting}) => {
    const [products , setProducts]= useState([])

    useEffect(() => {
        getProductsNails().then(products =>{
            setProducts(products)
        })
    },[]
    )

    return(
        <>
            <h1 className='proximamente' >{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;