import {useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { db } from "../../service/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
import { useNavigate } from "react-router-dom"
const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const {cart, getQuantity, total, limpiarCarrito} = useContext(CartContext)
    const navigate = useNavigate()

    const totalCantidad = getQuantity();
    const compraTotal = total()

    const crearOrden = async () => {
        setIsLoading(true)
        try {
            const objOrden = {
                buyer: {
                    firstName:'Maria',
                    lastName: 'Aramayo',
                    phone:'12345678',
                    address:'mi direccion es 123'
                },
                items: cart,
                totalCantidad,
                compraTotal,
                date: new Date()
            }
            const ids = cart.map(prod => prod.id)
            const refProductos = collection(db, 'products')
            const prodsAgregadosFireStore = await getDocs(query(refProductos,where(documentId(),'in', ids)))
            const {docs} = prodsAgregadosFireStore
            const sinStock = []
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
               const dataDoc = doc.data()
               const stockDb = dataDoc.stock
    
                const prodAgregadoAlCarrito = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prodAgregadoAlCarrito?.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                }else{
                    sinStock.push({id: doc.id, ...dataDoc})
                }
            })
            
            if(sinStock.length === 0) {
                await batch.commit()
                const refOrden = collection(db, 'ordenes')
                const ordenAgregada = await addDoc(refOrden, objOrden)
                console.log(`El id de su orden es: ${ordenAgregada.id}`)
                limpiarCarrito()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                },2000)
            }else {
                console.log('Hay productos sin stock')
            }
        }catch (error){
            console.log(error)
        } finally {
            setIsLoading(false)
        }
        
    }

    if(isLoading) {
        return <h1>Se está generando tu orden....</h1>
    }
    if(orderCreated){
        return <div>
            <h1>La orden fue creada correctamente </h1>
            <h3>Será redirigido a la pagina de inicio</h3>
        </div>
    }

    return (
        <>
        <h1>Checkout</h1>
        <button className="linkFinalizar" onClick={crearOrden}>Generar orden</button>
        </>
    )
}

export default Checkout;