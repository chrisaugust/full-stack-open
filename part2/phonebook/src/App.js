import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import FilteredPersons from './components/FilteredPersons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPerson, setNewPerson] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('')
 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleChange = (event) => {

  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
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
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        value={filter} 
        handler={handleFilterChange} 
      />

      <h2>Add new</h2>

      <PersonForm 
        addPerson={addPerson}
        newPerson={newPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <FilteredPersons 
        filter={filter} 
        persons={persons} 
      />
    </div>
  )
}

export default App