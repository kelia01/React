
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {

  return (
  <div>
    <Alert>
      <span>Hello  World</span>
    </Alert>
    <Button color="danger" onClick={() => console.log('clicked')}>
      My Button
    </Button>
  </div>
)
}

export default App;