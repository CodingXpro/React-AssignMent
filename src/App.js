import {useEffect, useReducer} from 'react'
import axios from 'axios'
import './App.css';
import Products from './component/Product';
import Cart from './component/Cart';
import { cartReducer } from './reducers/cartReducer';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async()=>{
    const {data} = await axios.get("https://dummyjson.com/products")

    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (

    <div style={{display:'flex'}}>
           
       
      <Products state={state} dispatch={dispatch} className="down1"/>
      <Cart state={state} dispatch={dispatch} className="down2"/>
    </div>
  );
}

export default App;