import React from 'react'
import './App.css'
import AddTransactionForm from './components/AddTransactionForm'
import Transactions from './components/Transactions'
import FilterForm from './components/FilterForm'

const App = () => {
  return (
    <div>
      <div className='header'>
        <h1>THE BANK OF FLATIRON</h1>
      </div>
      <div className='forms'>
        <AddTransactionForm />
        <br></br>
        <FilterForm />
      </div>
      <Transactions />
    </div>
  )
}

export default App