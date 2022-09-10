import {useState, useEffect} from 'react'
import axios from 'axios'

const Filter = ({filter, filterChangeHandler}) => {
    return (
        <form>
            <div>
                find countries: <input value={filter} onChange={filterChangeHandler}/>
            </div>
        </form>
    )
}

const Country = ({country, showClickHandle}) => {
    return (
        <div>
            {country.name.common}
            <button value={country.name.common} onClick={showClickHandle}>show</button>
        </div>
    )
}

const Weather = ({country}) => {
    const [weather, setWeather] = useState([])

    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`
    console.log(weatherUrl)

    useEffect(() => {
        console.log('effect')
        axios
            .get(weatherUrl)
            .then(response => {
                console.log('weather promise fulfilled')
                setWeather(response.data)
                console.log("weather", weather)
            })
    }, [])

    let temperature = ("main" in weather && 'temp' in weather.main) ? (weather.main.temp) : false
    let weatherDetail = ("weather" in weather && weather.weather.length > 0) ? weather.weather[0] : false
    let weatherIconUrl = (weatherDetail) ? `http://openweathermap.org/img/wn/${weatherDetail.icon}@2x.png` : false

    console.log("weatherDetail", weatherDetail)


    return (temperature !== false && weatherDetail !== false) ? (
        <>
            <p>temperature {(temperature - 273.15).toFixed(2)} celsius</p>
            <img alt="weatherIcon" src={weatherIconUrl}/>
            <p>{weatherDetail.description}</p>
        </>
    ) : <p>Weather could not be loaded</p>
}

const CountryDetail = ({country}) => {
    console.log(country)
    let languages = Object.values(country.languages)
    console.log(languages)

    return (
        <>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages</h2>
            <ul>
                {languages.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img alt="flag" src={country.flags.png}></img>
            <h2>Weather in {country.capital}</h2>
            <Weather country={country}/>
        </>
    )
}

function App() {
    const [countries, setCountries] = useState([])
    const [countriesFilter, setCountriesFilter] = useState("")

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
            })
    }, [])

    const handleCountriesFilterChange = (event) => {
        console.log(event.target.value)
        setCountriesFilter(event.target.value)
    }

    const handleShowClick = (event) => {
        event.preventDefault()
        setCountriesFilter(event.target.value)
    }

    let countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(countriesFilter.toLowerCase()))

    return (
        <div>
            <Filter filter={countriesFilter} filterChangeHandler={handleCountriesFilterChange}/>
            {countriesToShow.length > 10 ?
                <p>Too many matches, specify another filter</p> : countriesToShow.length === 1 ?
                    <CountryDetail country={countriesToShow[0]}/> : countriesToShow.map(country => <Country
                        key={country.name.official}
                        country={country}
                        showClickHandle={handleShowClick}/>)}
        </div>
    )
}

export default App;
