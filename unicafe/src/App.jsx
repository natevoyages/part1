import { useState } from 'react'
const Head = ({text}) => <h1>{text}</h1>

const Button = ({onClick,text}) => <button onClick ={onClick}> {text}</button>

const Feedback =  ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = ( (good * 1) + (neutral * 0) + (bad * -1) ) / total

  if(total === 0){
  return (
  <div>
    <h2>
      Statistics
    </h2>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>Total {total}</p>
    <p>Average 0</p>
    <p>positive 0</p>
    </div>
      ) 
  }
    return (
  <div>
    <h2>
      Statistics
    </h2>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>Total {total}</p>
    <p>Average {average}</p>
    <p>positive</p>
    </div>
      ) 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <Head text= "Give Feedback" />
      <Button onClick = {goodClick} text = "Good"/>
      <Button onClick = {neutralClick} text = "Nuetral"/>
      <Button onClick ={badClick} text = "Bad"/>
      <Feedback good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App