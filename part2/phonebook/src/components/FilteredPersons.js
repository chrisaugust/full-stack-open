import Person from './Person'
const FilteredPersons = ({filter, persons}) => {
  const re = new RegExp(filter, "i")
  return (
    <>
      {
        persons.filter((person => person.name.match(re)))
          .map(person => {
            return (
              <Person 
                key={person.id} 
                name={person.name} 
                number={person.number} 
              />
            )
          })
      }
    </>
  )
}
export default FilteredPersons