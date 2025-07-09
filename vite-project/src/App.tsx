import ListGroup from "./components/ListGroup";

function App() {
 let items = ["NewYork", "Uganda", "Rwanda", "Kenya"];

  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;