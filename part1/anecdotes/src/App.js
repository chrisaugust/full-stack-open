import { useState } from 'react'

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  let mostPopular = Math.max.apply(Math, points);

  const randomChoice = (numChoices) => Math.floor(Math.random() * numChoices) 
  
  const addVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <Button handler={() => addVote()} text="vote" />
        <Button handler={() => setSelected(randomChoice(anecdotes.length))} text="next anecdote" />
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        <p>{anecdotes[points.indexOf(mostPopular)]}</p>
        <p>has {mostPopular} votes</p>
      </div>
    </div>
  )
}

export default App