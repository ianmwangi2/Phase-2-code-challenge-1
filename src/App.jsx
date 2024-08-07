import React from 'react'
import './App.css'
import Transactions from './components/Transactions'
import FilterForm from './components/FilterForm'

const App = () => {
  return (
    <div>
      <div className='header'>
        <h1>THE BANK OF FLATIRON</h1>
      </div>
      <Transactions />
      <FilterForm />
    </div>
  )
}

export default App