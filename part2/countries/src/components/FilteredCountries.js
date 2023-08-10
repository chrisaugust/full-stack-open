import CountryDetails from './CountryDetails'

const FilteredCountries = ({ filteredCountries, setFilteredCountries }) => {
  if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries[0]} />
  } else if (filteredCountries.length > 10){
    return <p>provide a more specific query, number of matches is too high</p>
  } else {
    return (
      <>
        {filteredCountries.map(country => {
          return (
            <div key={country.name.official} className='country-name'>
              <p>{country.name.common}</p>
              <button onClick={() => setFilteredCountries([country])}>Show</button>
            </div>
          )
        })}
      </>
    )
  }
}

export default FilteredCountries