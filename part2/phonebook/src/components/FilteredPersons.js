import Person from './Person'

const FilteredPersons = ({ filter, persons, removePerson }) => {
  const re = new RegExp(filter, "i")
  return (
    <>
      {
        persons.filter((person => person.name.match(re)))
          .map(person => {
            return (
              <div className="numbers">
                <Person 
                  key={person.id} 
                  name={person.name} 
                  number={person.number}
                />
                <button onClick={() => removePerson(person.id)}>
                  delete
                </button>
              </div>
            )
          })
      }
    </>
  )
}

export default FilteredPersons