import Part from './Part'
import Total from './Total'

const Content = ({ parts }) => {
  // const initialValue = 0
  // const total = parts.map(part => part.exercises)
  //   .reduce((total, current) => total + current, initialValue)

  // console.log(total)

  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
      
      <Total parts={parts} />
    </>
  )
}

export default Content