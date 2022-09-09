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

const Country = ({country}) => {
    return (
        <div>
            <p>{country.name.common}</p>
        </div>
    )
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
            <img src={country.flags.png}></img>
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

    let countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(countriesFilter.toLowerCase()))

    return (
        <div>
            <Filter filter={countriesFilter} filterChangeHandler={handleCountriesFilterChange}/>
            {countriesToShow.length > 10 ?
                <p>Too many matches, specify another filter</p> : countriesToShow.length === 1 ?
                    <CountryDetail country={countriesToShow[0]}/> : countriesToShow.map(country => <Country
                        key={country.name.official}
                        country={country}/>)}
        </div>
    )
}

export default App;
