# Full Stack Open - Countries Search

This is a solution to the [Countries application on Full Stack Open](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20). Full Stack Open is a free online course that helps budding developers build their full stack development skills.

## Table of contents

- [Overview](#overview)
  - [The Application](#the-application)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The Application

Users should be able to:

- Search for a country and see a list of potential matches with their input
- Not see any countries if their input does not match any country's name
- See detailed information about a country when they press the "show" button
- View current weather data for each country

### Screenshot

![Desktop Screenshot](./src/assets/Screenshot%202023-12-13%20203934.png)

### Links

- [GitHub Repo](https://github.com/DeviantSchemist/fullstackopen_countries)
- [Live Site URL](https://super-tapioca-424156.netlify.app/)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [OpenWeather API](https://openweathermap.org/api)
- [React](https://reactjs.org/) - JS library


### What I learned

Learned about how state works in React with functional components. I had a difficult time realizing an error in the code snippet below about a state variable not loading the data gathered from the API. The solution was that I had to instantialize the object structure of the API within the initial state declaration in the useState hook.

Also learned how to do component composition, and to separate functionality into different components.


```js
const [apiData, setApiData] = useState({ main: {}, wind: {}, weather: [{}] });
```

```jsx
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
  <p>{` Temperature ${JSON.stringify(apiData.main.temp)} fahrenheit`}</p>
  <img src={`https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`} alt={JSON.stringify(apiData.weather[0].description)} />
  <p>{`Wind ${JSON.stringify(apiData.wind.speed)}`}</p>
</>
```

### Continued development

I focused mainly on functionality with this application. Future development will consist of making the UI look substantially better. Right now, it is very barebones.
