import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import {produce} from 'immer';


function App() {
  const [cartItems,setCartItems] = useState(['Product1','Product2']);

  const handleClick = () => {
    
  }
  return (
    <>
    <div>
      <Navbar cartItemsCount={cartItems.length} />
    <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    </div>
    </>
  );
}

export default App;
