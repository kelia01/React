
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, SetAlertVisible] = useState(false)

  return (
  <div>
   {alertVisible && <Alert onClose={() => SetAlertVisible(false)}>
      My alert 
    </Alert>}
    <Button color="danger" onClick={() => SetAlertVisible(true)}>
      My Button
    </Button>
  </div>
)
}

export default App;