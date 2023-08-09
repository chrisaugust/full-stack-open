const FilteredCountries = ({ filteredCountries, setFilteredCountries }) => {
  if (filteredCountries.length === 1) return null;

  return filteredCountries.map(country => (
    <div key={country.name.official}>
      {country.name.common}{" "}
      <button onClick={() => setFilteredCountries([country])}>
        show
      </button>
    </div>
  ))
}

export default FilteredCountries