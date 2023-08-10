import Weather from './Weather'

const CountryDetails = ({ country }) => {

  return (
    <div className='country-details'>
      <h1>{country.name.common}</h1>
      <p><strong>capital </strong>{country.capital}</p>
      <p><strong>population </strong>{country.population}</p>
      <p><strong>area </strong>{country.area} square kilometers</p>
      <p><strong>region </strong>{country.subregion}</p>
      <p><strong>languages</strong></p>
      <ul>
        {Object.values(country.languages).map(language => {
          return (
            <li>{language}</li>
          )
        })}
      </ul>
      <img className='flag'
        src={country.flags.png}
      />

      <Weather city={country.capital} />
    </div>
  )
}

export default CountryDetails