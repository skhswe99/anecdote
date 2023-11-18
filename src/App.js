import { useState } from 'react'

const Button = ({getNextAnecdote}) => {
  return(
    <button onClick={getNextAnecdote}>
      next anecdote
    </button>
  )
}

const Vote = ({handleVote}) => {
  return(
    <button onClick={handleVote}>
      vote
    </button>
  )
}

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
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0,0,anecdotes.length))
  
  const getNextAnecdote = () => { // WORKS!!!
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const handleVote = () => {
    const voteCounts = [...votes]
    voteCounts[selected]++
    setVotes(voteCounts)
  }

  const MostVoted = () => {
    const mostVotedIndex = votes.indexOf(Math.max(...votes))
    return(
      <p>
        {anecdotes[mostVotedIndex]}<br/>has {votes[mostVotedIndex]} votes
      </p>
    )
  }
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Vote handleVote={handleVote} />
      <Button getNextAnecdote={getNextAnecdote} />
      <MostVoted votes={votes} />
    </div>
  )
}
export default App;