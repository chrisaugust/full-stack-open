import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FilteredCountries from './components/FilteredCountries'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value
    setFilter(searchTerm)
    setFilteredCountries(
      countries.filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }

  return (
    <>
      <Filter
        value={filter}
        handler={handleFilterChange}
      />

      {filteredCountries.length > 10 ? (
        <div>choose a more specific filter, too many matches</div>
      ) : 
        <FilteredCountries
          filteredCountries={filteredCountries}
          setFilteredCountries={setFilteredCountries}
        />
      }

      {filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : null}
    </>
  )
}

export default App