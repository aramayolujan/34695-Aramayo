import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import {createContext} from 'react'
import { CartContextProvider } from './context/CartContext';
import CartDetail from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


export const CartContext = createContext() 

function App() {
 

  return (
    <div className="App">
    <CartContextProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/cart' element={<CartDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS TIENDA ANGELA BRESCIANO'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='LISTADO FILTRADO'/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/*' element={<h1>404 not foud</h1>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>   
    </div>
  );
}

export default App;
