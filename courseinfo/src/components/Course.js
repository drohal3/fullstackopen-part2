const Header = ({text}) => {
    return (
        <h2>{text}</h2>
    )
}

const Content = ({parts}) => {
    return (
        parts.map(part =>
            <Part key={part.id} part={part}/>
        )
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Stats = ({parts}) => {
    return (
        <strong><p>total of {parts.reduce((sum, part) => {return sum + part.exercises}, 0)} exercises</p></strong>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header text={course.name} level="2"/>
            <Content parts={course.parts}/>
            <Stats parts={course.parts}/>
        </>
    )
}

export default Course