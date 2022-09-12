import {useState, useEffect} from 'react'
import personsService from './sevices/persons'

const Filter = ({filter, changeHandler}) => {
    return (<form>
        <div>
            filter shown with: <input value={filter} onChange={changeHandler}/>
        </div>
    </form>)
}

const PersonForm = ({name, nameChangeHandler, number, numberChangeHandler, addPersonClickHandler}) => {
    return (<form>
        <div>
            name: <input value={name} onChange={nameChangeHandler}/>
        </div>
        <div>
            number: <input value={number} onChange={numberChangeHandler}/>
        </div>
        <div>
            <button type="submit" onClick={addPersonClickHandler}>add</button>
        </div>
    </form>)
}

const Persons = ({persons, deletePerson}) => {
    return (persons.map(person => <p key={person.name}>{person.name} {person.number}
        <button onClick={() => deletePerson(person.id)}>delete</button>
    </p>))
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
                console.log("persons", persons)
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

        let personsCopy = [...persons] // Question: is this really needed? Is nopt enough to replace object in this array?

        const notePerson = {
            name: newName, number: newNumber
        }

        let existingPerson = personsCopy.find(person => person.name === newName)

        if (existingPerson) {
            if (window.confirm("Do you want to update existing contact?")) {
                personsService.update(existingPerson.id, notePerson).then(returnedPerson => {
                    setPersons(personsCopy.map(person => person.id === returnedPerson.id ? returnedPerson : person))
                })
            }

            return
        }

        personsService.create(notePerson)
            .then(response => {
                setNewName('')
                setNewNumber('')
                console.log("persons", response)
                setPersons(persons.concat(response))
            }).catch(error => {
            console.log('fail')
        })

        setPersons(persons.concat(notePerson))
        setNewName('')
        setNewNumber('')
    }

    const deletePerson = (id) => {
        if (window.confirm("Do you really want to delete contact?")) {
            console.log("delete", id)
            personsService.remove(id).then(response => {
                setPersons(persons.filter(person => person.id !== id))
            }).catch(response => {
                console.log("the person could not be removed")
            })
        }
    }

    let personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (<div>
        <h2>Phonebook</h2>
        <Filter filter={filter} changeHandler={handleFilterChange}/>
        <h2>Add new</h2>
        <PersonForm name={newName} nameChangeHandler={handleNameChange} number={newNumber}
                    numberChangeHandler={handleNumberChange} addPersonClickHandler={addPerson}/>
        <h2>Numbers</h2>
        <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>)
}

export default App