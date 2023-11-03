import { useEffect, useState } from "react"
import axios from 'axios'

const CountryDisplay = ({ country }) => {

  const [press, setPress] = useState(false);
  const [apiData, setApiData] = useState({});
  
  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (press) {
      axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}`)
        .then(response => {
          console.log(response.data)
          setApiData(response.data);
        })
        .catch(err => console.error(err));
    }
  }, [press]);
  
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
          <h3>{`Weather in ${country.name.common}`}</h3>
          <p>{`temperature `}</p>
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