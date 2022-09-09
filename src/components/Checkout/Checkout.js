import './Checkout.css'
import {useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { db } from "../../service/firebase"
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
import { useNavigate } from "react-router-dom"
const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const {cart, getQuantity, total, limpiarCarrito} = useContext(CartContext)
    const [buyCode, setBuyCode] = useState('')
    const [noData, setNoData] = useState('')
    const navigate = useNavigate()

    const totalCantidad = getQuantity();
    const compraTotal = total()

    const crearOrden = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        isNaN(e.target.campusPhone.value) && setNoData('numero de telefono incorrecto')
        setTimeout(() => setNoData(''), 2500)
        if( e.target.campusFirstName.value !== '' && e.target.campusPhone.value !== '' &&  e.target.campusLastName.value !== '' && e.target.campusAdress.value  !== '' && e.target.campusCity.value !== '' && e.target.campusState.value !== '' && e.target.campusEmail.value !== '' ){
        try {
            const objOrden = {
                // Datos del comprador
                buyer: {
                    firstName: e.target.campusFirstName.value,
                    Lastname: e.target.campusLastName.value,
                    adress: e.target.campusAdress.value,
                    phone: e.target.campusPhone.value,
                    city: e.target.campusCity.value,
                    state: e.target.campusState.value,
                    email: e.target.campusEmail.value,
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
                setBuyCode(ordenAgregada.id)
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

        }finally {
            setIsLoading(false)
        }
    }else{
        setNoData('faltan rellenar campos')
        setTimeout(() => setNoData(''), 3000)
    }
        
    }

    if(isLoading) {
        return <h1>Se está generando tu orden....</h1>
    }
    if(orderCreated){
        return <div>
            <h1>La orden fue creada correctamente </h1>
            <h2>el codigo de tu orden es: {buyCode}</h2>
            <h3>Será redirigido a la pagina de inicio</h3>
        </div>
    }

   
        /* <button className="linkFinalizar" onClick={crearOrden}>Generar orden</button> */
    return (
        <>
            <h1>Finalizar compra</h1>
            <form onSubmit={crearOrden } class="formularioContacto">
            <section>
                <div className="formularioContenido">
                        <label>Nombre: </label>
                        <input className="contenidoFormulario" type='text' name="campusFirstName" placeholder="Nombre" />
                    </div>
                    <div className="formularioContenido">
                        <label>Apellido: </label>
                        <input className="contenidoFormulario" type='text' name="campusLastName" placeholder="Apellido" />
                    </div>
                    <div className="formularioContenido">
                        <label>Direccion: </label>
                        <input className="contenidoFormulario" type='text' name="campusAdress" placeholder="Direccion" />
                    </div>   
                    <div className="formularioContenido">
                        <label>Ciudad: </label>
                        <input className="contenidoFormulario" type='text' name="campusCity" placeholder="Ciudad" />
                    </div>   
                    <div className="formularioContenido">
                        <label>Telefono: </label>
                        <input className="contenidoFormulario" type='text' name="campusPhone" placeholder="Telefono" />
                    </div>    
                    <div className="formularioContenido">
                        <label>Provincia: </label>
                        <input className="contenidoFormulario" type='text' name="campusState" placeholder="Provincia" />   
                    </div>   
                    <div className="formularioContenido">
                        <label>E-Mail: </label>
                        <input className="contenidoFormulario" type='email' name="campusEmail" placeholder="E-Mail" />
                    </div>   
                    <div className="formularioContenido">
                        <button className="linkFinalizar">Generar Orden</button>
                    </div>    
                </section>
            </form>
            <p className='noData'>{noData}</p>
        </>
    )
}

export default Checkout;