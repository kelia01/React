
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";


function App() {
  const [alertVisible, SetAlertVisible] = useState(false)
  //Group related structures in the same state
  const [person, setPerson] = useState({
    firstName: '',
    lastName: ''
  })

  return (
  <div>
   {alertVisible && <Alert onClose={() => SetAlertVisible(false)}>
      My alert 
    </Alert>}
    <Like onClick={() => console.log('clicked')}/>
    <Button color="danger" onClick={() => SetAlertVisible(true)}>
      My Button
    </Button>
  </div>
)
}

export default App;