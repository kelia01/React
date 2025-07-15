import React from 'react'

const Hello = () => {

  const handleClick = () => {
    alert('Clicked')
  }
  return (
    <div className='bg-amber-400 w-96 h-96 flex justify-center items-center'>
      <button className='bg-orange-600 rounded-lg px-2 py-1' onClick={handleClick}>Click Me</button>
      </div>
  )
}

export default Hello