import React, { useState } from 'react'

const Form = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Hi ${fname} ${lname}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='First name' value={fname} onChange={(e) => setFname(e.target.value)}/>
      <input type="text" placeholder='Last name' value={lname} onChange={(e) => setLname(e.target.value)}/>
      <button className='bg-red-500 text-white text-xl px-6 py-1.5'>GREET ME</button>
    </form>
  )
}

export default Form