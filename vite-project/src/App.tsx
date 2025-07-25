import { useState } from "react";
import Game from "./components/Game";
import {produce} from 'immer';


function App() {
  const [pizza,setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Yammy']})
  }
  return (
    <>
     <button onClick={handleClick}>click me</button>
    </>
  );
}

export default App;
