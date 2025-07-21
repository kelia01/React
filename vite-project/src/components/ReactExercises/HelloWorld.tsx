interface Props {
    children: React.ReactNode;
  }

const Hello = ({children}: Props) => {

  const handleClick = () => {
    alert(`Clicked ${children}`)
  }
  return (
    <div className='bg-amber-400 w-72 h-72 flex justify-center items-center'>
      <button className='bg-orange-600 rounded-lg px-2' onClick={handleClick}>Click Me</button>
      </div>
  )
}

export default Hello