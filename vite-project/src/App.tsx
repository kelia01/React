
import { useState } from "react";
import Message from "./components/Message";

function App() {

  const [bugs, setBugs] = useState([
    {bugg:'components',id: 1, state: false},
    {bugg:'message', id:2, state: false},
  ]);

  const handleClick = () => {
    bugs.map(bug => bug.id === 1 ? {...bug, state: true} : bug)
  }
  return (
  <div>
    
   <button onClick={handleClick}>click me</button>
  </div>
)
}

export default App;