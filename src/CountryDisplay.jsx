import { useState } from "react"

const CountryDisplay = ({ country }) => {

  const [press, setPress] = useState(false);
  
  return (
    <>
      {press ?
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
        : <>
            <span>{country.name.common}</span>
            <button onClick={() => setPress(!press)}>show</button>
            <br />
          </>}
    </>
  )
}

export default CountryDisplay