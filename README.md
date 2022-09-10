# Fullstack Open - Part2: Communicating with server
Part 2 of the Full Stack online course https://fullstackopen.com/en/part2

## Exercise 2.1: Course information step6
**Task:**
Let's finish the code for rendering course contents from exercises 1.1 - 1.5. You can start with the code from the model answers. The model answers for part 1 can be found by going to the submission system, click on my submissions at the top, and in the row corresponding to part 1 under the solutions column click on show. To see the solution to the course info exercise, click on index.js under kurssitiedot ("kurssitiedot" means "course info").

Note that if you copy a project from one place to another, you might have to delete the node_modules directory and install the dependencies again with the command npm install before you can start the application. Generally, it's not recommended that you copy a project's whole contents and/or add the node_modules directory to the version control system.

Let's change the App component like so:
```
const App = () => {
const course = {
id: 1,
name: 'Half Stack application development',
parts: [
{
name: 'Fundamentals of React',
exercises: 10,
id: 1
},
{
name: 'Using props to pass data',
exercises: 7,
id: 2
},
{
name: 'State of a component',
exercises: 14,
id: 3
}
]
}

return <Course course={course} />
}

export default App
```
Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following:
```
App
    Course
        Header
        Content
            Part
            Part
            ...
```
Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

You don't need the sum of the exercises yet.

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.

Ensure that the console shows no errors!

**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 2.2: Course information step7
**Task:**
Show also the sum of the exercises of the course.

**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 2.3*: Course information step8
**Task:**
If you haven't done so already, calculate the sum of exercises with the array method reduce.

**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 2.4: Course information step9
**Task:**
Let's extend our application to allow for an arbitrary number of courses:
```
const App = () => {
const courses = [
{
name: 'Half Stack application development',
id: 1,
parts: [
{
name: 'Fundamentals of React',
exercises: 10,
id: 1
},
{
name: 'Using props to pass data',
exercises: 7,
id: 2
},
{
name: 'State of a component',
exercises: 14,
id: 3
},
{
name: 'Redux',
exercises: 11,
id: 4
}
]
},
{
name: 'Node.js',
id: 2,
parts: [
{
name: 'Routing',
exercises: 3,
id: 1
},
{
name: 'Middlewares',
exercises: 7,
id: 2
}
]
}
]

return (
<div>
// ...
</div>
)
}
```

**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 2.5: separate module
**Task:**
Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course into the same module.

**Solution:**
The solution is demonstrated in the courseinfo application (courseinfo folder). See commits for more details.

## Exercise 2.6: The Phonebook Step1
**Task:**
Let's create a simple phonebook. In this part we will only be adding names to the phonebook.

Let us start by implementing the addition of a person to phonebook.

You can use the code below as a starting point for the App component of your application:
```
import { useState } from 'react'

const App = () => {
const [persons, setPersons] = useState([
{ name: 'Arto Hellas' }
])
const [newName, setNewName] = useState('')

return (
<div>
<h2>Phonebook</h2>
<form>
<div>
name: <input />
</div>
<div>
<button type="submit">add</button>
</div>
</form>
<h2>Numbers</h2>
...
</div>
)
}

export default App
```
The newName state is meant for controlling the form input element.

Sometimes it can be useful to render state and other variables as text for debugging purposes. You can temporarily add the following element to the rendered component:
```
<div>debug: {newName}</div>
```
It's also important to put what we learned in the debugging React applications chapter of part one into good use. The React developer tools extension especially, is incredibly useful for tracking changes that occur in the application's state.

NB:

- you can use the person's name as value of the key property
- remember to prevent the default action of submitting HTML forms!

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.7: The Phonebook Step2
**Task:**
Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable methods for accomplishing this task. Keep in mind how object equality works in Javascript.

Hint: when you are forming strings that contain values from variables, it is recommended to use a template string:
```
`${newName} is already added to phonebook`
```
If the newName variable holds the value Arto Hellas, the template string expression returns the string
```
`Arto Hellas is already added to phonebook`
```
The same could be done in a more Java-like fashion by using the plus operator:
```
newName + ' is already added to phonebook'
```
Using template strings is the more idiomatic option and the sign of a true JavaScript professional.

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.8: The Phonebook Step3
**Task:**
Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler):
```
<form>
  <div>name: <input /></div>
  <div>number: <input /></div>
  <div><button type="submit">add</button></div>
</form>
```

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.9*: The Phonebook Step4
**Task:**
Implement a search field that can be used to filter the list of people by name

You can implement the search field as an input element that is placed outside the HTML form. The filtering logic shown in the image is case insensitive, meaning that the search term arto also returns results that contain Arto with an uppercase A.

NB: When you are working on new functionality, it's often useful to "hardcode" some dummy data into your application, e.g.
```
const App = () => {
const [persons, setPersons] = useState([
{ name: 'Arto Hellas', number: '040-123456', id: 1 },
{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
])

// ...
}
```
This saves you from having to manually input data into your application for testing out your new functionality.

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.10: The Phonebook Step5
**Task:**
If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. Maintain the application's state and all event handlers in the App root component.

It is sufficient to extract three components from the application. Good candidates for separate components are, for example, the search filter, the form for adding new people into the phonebook, a component that renders all people from the phonebook, and a component that renders a single person's details.

The application's root component could look similar to this after the refactoring. The refactored root component below only renders titles and lets the extracted components take care of the rest.
```
const App = () => {
// ...

return (
<div>
<h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm 
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
)
}
```

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.11: The Phonebook Step6
**Task:**
We continue with developing the phonebook. Store the initial state of the application in the file db.json, which should be placed in the root of the project.
```
{
"persons":[
{
"name": "Arto Hellas",
"number": "040-123456",
"id": 1
},
{
"name": "Ada Lovelace",
"number": "39-44-5323523",
"id": 2
},
{
"name": "Dan Abramov",
"number": "12-43-234345",
"id": 3
},
{
"name": "Mary Poppendieck",
"number": "39-23-6423122",
"id": 4
}
]
}
```
Start json-server on port 3001 and make sure that the server returns the list of people by going to the address http://localhost:3001/persons in the browser.

If you receive the following error message:
```
events.js:182
throw er; // Unhandled 'error' event
^

Error: listen EADDRINUSE 0.0.0.0:3001
at Object._errnoException (util.js:1019:11)
at _exceptionWithHostPort (util.js:1041:20)
```
it means that port 3001 is already in use by another application, e.g. in use by an already running json-server. Close the other application, or change the port in case that doesn't work.

Modify the application such that the initial state of the data is fetched from the server using the axios-library. Complete the fetching with an Effect hook.

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.12* Data for countries, step1
**Task:**
The API https://restcountries.com provides data for different countries in a machine-readable format, a so-called REST API.

Create an application, in which one can look at data of various countries. The application should probably get the data from the endpoint [all](https://restcountries.com/v3.1/all).

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific

When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken there, are shown

NB: It is enough that your application works for most of the countries. Some countries, like Sudan, can be hard to support, since the name of the country is part of the name of another country, South Sudan. You don't need to worry about these edge cases.

**Solution**
The solution is demonstrated in the countries application (countries folder). See commits for more details.

## Exercise 2.13*: Data for countries, step2
**Task:**
Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country
In this exercise it is also enough that your application works for most of the countries. Countries whose name appears in the name of another country, like Sudan, can be ignored.

**Solution**
The solution is demonstrated in the countries application (countries folder). See commits for more details.

## Exercise 2.14*: Data for countries, step3
**Task:**
Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is https://openweathermap.org. Note that it might take some minutes until a generated api key is valid.

If you use Open weather map, [here](https://openweathermap.org/weather-conditions#Icon-list) is the description how to get weather icons.

NB: In some browsers (such as Firefox) the chosen API might send an error response, which indicates that HTTPS encryption is not supported, although the request URL starts with http://. This issue can be fixed by completing the exercise using Chrome.

NB: You need an api-key to use almost every weather service. Do not save the api-key to source control! Nor hardcode the api-key to your source code. Instead use an [environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables/) to save the key.

Assuming the api-key is t0p53cr3t4p1k3yv4lu3, when the application is started like so:
```
REACT_APP_API_KEY=t0p53cr3t4p1k3yv4lu3 npm start // For Linux/macOS Bash
($env:REACT_APP_API_KEY="t0p53cr3t4p1k3yv4lu3") -and (npm start) // For Windows PowerShell
set "REACT_APP_API_KEY=t0p53cr3t4p1k3yv4lu3" && npm start // For Windows cmd.exe
```
you can access the value of the key from the process.env object:
```
const api_key = process.env.REACT_APP_API_KEY
// variable api_key has now the value set in startup
```
Note that if you created the application using npx create-react-app ...and you want to use a different name for your environment variable then the environment variable name must still begin with REACT_APP_. You can also use a .envfile rather than defining it on the command line each time by creating a file entitled '.env' in the root of the project and adding the following.
```
# .env

REACT_APP_API_KEY=t0p53cr3t4p1k3yv4lu3
```
Note that you will need to restart the server to apply the changes.

**Solution**
The solution is demonstrated in the countries application (countries folder). See commits for more details.

## Exercise 2.15: Phonebook step7
**Task:**
Let's return to our phonebook application.

Currently, the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.

**Solution**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.16: Phonebook step8
**Task:**
Extract the code that handles the communication with the backend into its own module by following the example shown earlier in this part of the course material.

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

## Exercise 2.17: Phonebook step9
**Task:**
Make it possible for users to delete entries from the phonebook. The deletion can be done through a dedicated button for each person in the phonebook list. You can confirm the action from the user by using the [window.confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) method

The associated resource for a person in the backend can be deleted by making an HTTP DELETE request to the resource's URL. If we are deleting e.g. a person who has the id 2, we would have to make an HTTP DELETE request to the URL localhost:3001/persons/2. No data is sent with the request.

You can make an HTTP DELETE request with the axios library in the same way that we make all of the other requests.

NB: You can't use the name delete for a variable because it's a reserved word in JavaScript. E.g. the following is not possible:
```
// use some other name for variable!
const delete = (id) => {
// ...
}
```

**Solution:**
The solution is demonstrated in the phonebook application (phonebook folder). See commits for more details.

