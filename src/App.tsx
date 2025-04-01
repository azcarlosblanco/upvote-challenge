import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [votes, setVotes] = useState([
    {
      count: 0,
      selected: false
    }
  ])

  return (
      <div className='app-container'>
        <UpVote />
      </div>
  )
}

export default App
