
import { useState } from "react";
import Message from "./components/Message";

function App() {

  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    //Add an item
    setTags([...tags, 'exciting']);

    //Remove an item
    setTags(tags.filter(tag => tag !== 'happy'));

    //Update an item
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
  }
  return (
  <div>
    
   <button onClick={handleClick}>click me</button>
  </div>
)
}

export default App;