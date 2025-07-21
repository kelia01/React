import React, { useState } from 'react'

const Counter = () => {

  const [status, setStatus] = useState(0);

  const handleClick = () => {
    setStatus(status + 1);
  }
  return (
    <div>
      <p>Clicked {status}</p>
      <button className='bg-amber-600 text-black text-lg' onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Counter