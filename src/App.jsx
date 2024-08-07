import React from 'react'
import './App.css'
import Transactions from './components/Transactions'

const App = () => {
  return (
    <div>
      <div className='header'>
        <h1>THE BANK OF FLATIRON</h1>
      </div>
      <Transactions />
    </div>
  )
}

export default App