const CountryDisplay = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => <li>{value}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </>
  )
}

export default CountryDisplay