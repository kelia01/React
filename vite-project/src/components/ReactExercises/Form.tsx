import React, { useState } from 'react'

const Form = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} =  e.target;
        if (name === 'fname') {
          setFname(value);
        } else if(name === 'lname'){
          setLname(value);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Hello ${fname} ${lname}`)
    }
  return (
    <form className='flex flex-col space-y-6' onSubmit={handleSubmit}>
        <input type="text" name='fname' placeholder='First name' value={fname} onChange= {handleChange}/>
        <input type="text" name='lname' placeholder='Last name' value={lname} onChange= {handleChange}/>
        <button className='bg-amber-800'>Greet me</button>
    </form>
  )
}

export default Form