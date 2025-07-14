
import { useState } from "react";
import Message from "./components/Message";

function App() {

  const [person, setPerson] = useState({
    firstName: '',
    lastName: ''
  })

  return (
  <div>
   <Message />
   <Message />
   <Message />
  </div>
)
}

export default App;