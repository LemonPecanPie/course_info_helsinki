const Header = (props) => {
    return (
        <>
            <h2>{props.course}</h2>

        </>
    );
}

const Part = (props) => {
    console.log('props:', props);
    return (
        <>
            <p>{props.part} {props.exercises}</p>
        </>
    );
}

const Content = ({ parts }) => {
    // return (<>
    //   <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
    //   <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
    //   <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    // </>
    // );
    console.log(parts);
    return (
        <>
            {parts.map(part => {
                console.log('part:', part);
                return <Part key={part.id}
                    part={part.name}
                    exercises={part.exercises} />;
            }
            )}
        </>
    );
}

const Total = ({ parts }) => {
    let exercisesSum = parts.reduce((a, b) => a + b.exercises, 0);
    return (
        // <>
        //   <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        // </>
        <>
            <p><b>total of {exercisesSum} exercises</b></p></>
    );
}

const Course = ({ course }) => {
    console.log('course:', course);
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
}

export default Course;