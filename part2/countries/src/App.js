import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FilteredCountries from './components/FilteredCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => setCountries(response.data))
  }, [])

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value)
    setFilteredCountries(countries.filter(country => 
      country.name.common.toLowerCase().includes(filterValue.toLowerCase())
    ))
  }

  return (
    <>
      <Filter filterValue={filterValue} handler={handleFilterValueChange} />

      <FilteredCountries 
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />
    </>
  )
}

export default App
