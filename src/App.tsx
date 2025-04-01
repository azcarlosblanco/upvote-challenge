import { useState } from 'react'
import './App.css'
import { Votes } from './types'
import UpVote from './components/UpVote'

function App() {
  const [votes, setVotes] = useState<Votes>([
    { count: 0, selected: false},
    { count: 0, selected: false},
    { count: 0, selected: false},
  ])

  return (
      <div className='app-container'>
        <UpVote votes={votes} setVotes ={setVotes}/>
      </div>
  )
}

export default App
