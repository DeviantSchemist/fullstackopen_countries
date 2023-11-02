import CountryDisplay from "./CountryDisplay"

const FilterCountries = ({ countries }) => {
  return (
    (countries.length > 10) ? <p>too many results, please narrow search</p>
    : (countries.length > 1) ? countries.map(country => <p>{country.name.common}</p>)
      : (countries.length) ? <CountryDisplay country={countries[0]} />
        : <p>no matches</p>
  )
}

export default FilterCountries