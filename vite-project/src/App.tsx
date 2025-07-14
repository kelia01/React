
import { useState } from "react";
import Message from "./components/Message";

function App() {

  const [customer, setCustomer] = useState({
    name: 'John',
    adress: {
      city: 'San Francisco',
      zipCode: 94111,
    }
  });

  const handleClick = () => {
    setCustomer({...customer,
      adress:{...customer.adress, zipCode: 94112}});
  }
  return (
  <div>
    
   <button onClick={handleClick}>click me</button>
  </div>
)
}

export default App;