import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import FilteredPersons from './components/FilteredPersons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
     personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const showMessage = (text, isError = false) => {
    setMessage(text)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addOrUpdatePerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    // prevent duplicate names from being added
    if (nameIsNotAlreadyInPhonebook(newName)) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          showMessage(`${newName} has been added`)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => showMessage(error.response.data.error, true))

    // update number if name is already in phonebook
    } else {
      const personToUpdate = persons.find(person => person.name === newName)
      if (window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)) {
        personService
          .update(personToUpdate.id, personObject)
          .then(returnedPerson => {
            showMessage(`${newName}'s number has been updated to ${newNumber}`)
            setPersons(prevPersons => 
              prevPersons.map(person => 
                (person.id === returnedPerson.id ? 
                  returnedPerson : person
                )
              )
            )
            setNewName('')
            setNewNumber('')
          })
          .catch(error => showMessage(error.response.data.error, true))
      }
    }
  }

  const nameIsNotAlreadyInPhonebook = name => {
    const names = persons.map(person => person.name)
    return !names.includes(name)
  }

  const removePerson = (id) => {
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Are you sure you want to delete ${personToRemove.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          showMessage(`${personToRemove.name} was deleted`)
          setPersons(prevPersons => prevPersons.filter(person => person.id !== id))  
        })
        .catch(error => showMessage(error.response.data.error, true))
    }
  }
   
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        value={filter} 
        handler={handleFilterChange}
      />

      <h2>Add new</h2>

      <Notification message={message} />

      <PersonForm 
        addPerson={addOrUpdatePerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <FilteredPersons 
        filter={filter} 
        persons={persons} 
        removePerson={removePerson}
      />
    </div>
  )
}

export default App