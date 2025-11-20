import { useState } from 'react'
const Head = ({text}) => <h1>{text}</h1>

const Button = ({onClick,text}) => <button onClick ={onClick}> {text}</button>

const Statistics =  ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = ( (good * 1) + (neutral * 0) + (bad * -1) ) / total
  const positivePercent = (good / total) * 100

  if(total === 0){
  return (
  <div>
    <h2>
      Statistics
    </h2>
    <p>No feedback given</p>
    </div>
      ) 
  }
    return (
  <div>
    <h2>
      Statistics
    </h2>
    <table>
   <StatisticsLine text = "Good" value={good} />
   <StatisticsLine text = "Neutral" value={neutral} />
   <StatisticsLine text = "Bad" value={bad} />
   <StatisticsLine text = "Total" value={total} />
   <StatisticsLine text = "Average" value={average} />
   <StatisticsLine text= "Positive" value={positivePercent + "%"}/>
   </table>
    </div>
      ) 
}

const StatisticsLine = ({text, value}) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App