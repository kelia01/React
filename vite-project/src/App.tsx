
import { useState } from "react";
import Message from "./components/Message";
import produce from "immer";

function App() {

  const [bugs, setBugs] = useState([
    {bugg:'components',id: 1, state: false},
    {bugg:'message', id:2, state: false},
  ]);

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, state: true} : bug));

    setBugs(produce(draft => {
       const bug = draft.find(bug => bug.id === 1);
       if(bug) bug.state = true;
    }))
  }
  return (
  <div>
    {bugs.map(bug => <p key={bug.id}>{bug.state} {bug.state ? 'Fixed' : 'New'}</p>)}
   <button onClick={handleClick}>click me</button>
  </div>
)
}

export default App;