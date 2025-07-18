import React, { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
      //id === 'add' ? setCount(count+1) : setCount(count-1)
  }
  return (
    <div className='flex justify-center items-center space-x-4'>
      <p>{count}</p>
        <button id = 'add' className='bg-yellow-300 rounded-full text-black w-20 h-20' onClick={handleClick}> - </button>
        <button id = 'minus' className='bg-yellow-300 rounded-full text-black w-20 h-20' onClick={handleClick}> + </button>
    </div>
  )
}

export default Counter