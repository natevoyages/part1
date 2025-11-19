  const Header = (props) => {

    return(<h1>
      {props.course}
      </h1>)
  }
  const Content = (props) => {
    return(
      <div>
        <Part name = {props.part1} number = {props.exercises1}/>
        <Part name = {props.part2} number = {props.exercises2}/>
        <Part name = {props.part3} number = {props.exercises3}/>
      </div>
      )
    
  }

  const Part = (props) => {
    return(
          <p>
            {props.name} {props.number}
          </p>
    )

  }

  const Total = (props) => {
    return(
          <p>Number of exercises {props.exercises1 + props.exercises2 
            + props.exercises3}</p>
    )
    }

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
     <div>
      <Header course={course} />
      <Content exercises1 ={parts[0].exercises} 
      exercises2= {parts[1].exercises} exercises3= {parts[2].exercises}
      part1= {parts[0].name} part2={parts[1].name} part3={parts[2].name}/>
      <Total exercises1 ={parts[0].exercises} 
      exercises2= {parts[1].exercises} exercises3= {parts[2].exercises}/>
      </div>
  )
}
// <div>
//      <Header course={course} />
  //    <Content exercises1 ={exercises1} 
    //  exercises2= {exercises2} exercises3= {exercises3}
     // part1= {part1} part2={part2} part3={part3}/>
      //<Total exercises1 ={exercises1} 
      //exercises2= {exercises2} exercises3= {exercises3}/>
  //  </div>*/

export default App