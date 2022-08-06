import './ItemListContainer.css'
import { getProductsNails, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products , setProducts]= useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFuntion = categoryId ? getProductsByCategory : getProductsNails

        asyncFuntion(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    },[categoryId]
    )

    return(
        <>
            <h1 className='proximamente' >{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;