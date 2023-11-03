import { useState } from "react"
import CountryDisplay from "./CountryDisplay"

const FilterCountries = ({ countries }) => {

  const [press, setPress] = useState(false);

  const handlePress = () => {
    console.log("button pressed moffo")
    setPress(!press);
  }

  return (
    (countries.length > 10) ? <p>too many results, please narrow search</p>
    : (countries.length > 1) ? countries.map(country => (
      <>
        <span>{country.name.common}</span>
        <button onClick={handlePress}>show</button>
        <br />
      </>
    ))
      : (countries.length) ? <CountryDisplay country={countries[0]} />
        : <p>no matches</p>
  )
}

export default FilterCountries