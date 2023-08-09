import Weather from './Weather'

const CountryDetails = ({ country }) => {

  return (
    <>
      <h1>{country.name.common}</h1>
      <p><strong>Capital: </strong>{country.capital[0]}</p>
      <p><strong>Languages: </strong></p>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img className='flag'
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <Weather city={country.capital[0]} />
    </>
  )
}

export default CountryDetails