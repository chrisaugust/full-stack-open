import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // prevent duplicate names from being added
    if (nameIsNotAlreadyInPhonebook(newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const nameIsNotAlreadyInPhonebook = (name) => {
    const names = persons.map(person => person.name)
    return !names.includes(name)
  }
  console.log('filter: ', newFilter)
  const re = new RegExp(newFilter, "i")
  console.log(persons.filter(person => person.name.match(re)))
  
  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter by:  
        <input 
          value={newFilter}
          onChange={handleNewFilterChange}
        />
      </div>

      <h2>Add new</h2>

      <form onSubmit={addName}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {
          persons.filter((person => person.name.match(re)))
            .map(person => {
              return (
                <Person key={person.id} name={person.name} number={person.number} />
              )
            })
        }
    </div>
  )
}

export default App