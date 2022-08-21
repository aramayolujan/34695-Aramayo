import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import { db } from '../../service/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
       getDoc(doc(db,'products',productId)).then(response =>{
        const data = response.data()
        const productsAdecuado = { id: response.id, ...data}
        setProduct(productsAdecuado)
       }).catch(error => {
        console.log(error)
       }).finally(() => {
        setLoading(false)
       })
    }, [productId ]
    )

    if(loading){
        return <h1>Cargando producto..</h1>
    }

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
