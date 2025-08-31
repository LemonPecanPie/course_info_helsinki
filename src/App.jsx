const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>

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

const Total = ({parts}) => {
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

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   );
// }

// export default App
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