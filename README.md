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
