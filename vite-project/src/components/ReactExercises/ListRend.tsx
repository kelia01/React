
const ListRend = () => {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  return (
    <div>
        <ul>
            {
            animals.map((animal) => (
                <li key={animal}>{animal}</li>
            ))
        }
            </ul>
    </div>
  )
}

export default ListRend