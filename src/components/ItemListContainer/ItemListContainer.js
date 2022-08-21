import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  { getDocs,collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = ({greeting}) => {
    const [products , setProducts]= useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = !categoryId ? collection(db, 'products') :
        query(collection(db, 'products'),where('category', '==', categoryId) )

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdecuado = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdecuado)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
        
    },[categoryId]
    )

    if(loading){
        return <h1>Cargando productos...</h1>
    }

    return(
        <>
            <h1 className='proximamente' >{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;