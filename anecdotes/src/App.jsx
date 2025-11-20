import { useState } from 'react'
const Button = ({onClick,text}) => {
  return (<button onClick={onClick}>{text}</button>)
  }
const Header = ({text}) => <h2>{text}</h2>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const randomGenerator = () => Math.floor(Math.random() * anecdotes.length)
  let randomNum = randomGenerator()
  while (randomNum === selected){
    randomNum = randomGenerator()
  }
  const copy = [...votes] 

  const vote = () => {
  copy[selected] += 1
  setVotes(copy);
   }

  const randomQuote = () => { setSelected(randomNum)}
  
  const getTopVoted = () => {
    const max = Math.max(...copy)
    const topVoted = copy.indexOf(max)
    return topVoted
  }
  const topVoted = getTopVoted()

  return (
    <div>
      <Header text = "Anecdote of the day"/>
      {anecdotes[selected]}
      <p>has {votes[selected]} vote(s)</p> 
      <div>
        <Button onClick = {vote} text = "Vote"/>
        <Button onClick = {randomQuote} text = "Next Anectdote"/>
      </div>
      <Header text = "Anecdote with most votes"/>
      {anecdotes[topVoted]}
      <p>has {votes[topVoted]} vote(s)</p> 

    </div>
  )
}

export default App