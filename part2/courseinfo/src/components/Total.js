const Total = ({ parts }) => {

  const initialValue = 0
  const total = parts.map(part => part.exercises)
    .reduce((total, current) => total + current, initialValue) 

  return (
    <p>
      <strong>
        total of {total} exercises
      </strong>
    </p>
  )
}

export default Total