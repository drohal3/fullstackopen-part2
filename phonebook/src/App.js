import {useState, useEffect} from 'react'
import axios from 'axios'
import personsService from './sevices/persons'

const Filter = ({filter, changeHandler}) => {
    return (
        <form>
            <div>
                filter shown with: <input value={filter} onChange={changeHandler}/>
            </div>
        </form>
    )
}

const PersonForm = ({name, nameChangeHandler, number, numberChangeHandler, addPersonClickHandler}) => {
    return (
        <form>
            <div>
                name: <input value={name} onChange={nameChangeHandler}/>
            </div>
            <div>
                number: <input value={number} onChange={numberChangeHandler}/>
            </div>
            <div>
                <button type="submit" onClick={addPersonClickHandler}>add</button>
            </div>
        </form>
    )
}

const Persons = ({persons}) => {
    return (
        persons.map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
        )
    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        console.log('effect')
        personsService
            .getAll()
            .then(data => {
                console.log('promise fulfilled')
                setPersons(data)
            })
    }, [])

    console.log('render', persons.length, 'persons')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)

            return
        }

        const notePerson = {
            name: newName,
            number: newNumber
        }

        personsService.create(notePerson)
            .then(response => {
                setPersons(persons.concat(notePerson))
                setNewName('')
                setNewNumber('')
            }).catch(error => {
            console.log('fail')
        })

        setPersons(persons.concat(notePerson))
        setNewName('')
        setNewNumber('')
    }

    let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} changeHandler={handleFilterChange}/>
            <h2>Add new</h2>
            <PersonForm name={newName} nameChangeHandler={handleNameChange} number={newNumber}
                        numberChangeHandler={handleNumberChange} addPersonClickHandler={addPerson}/>
            <h2>Numbers</h2>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App