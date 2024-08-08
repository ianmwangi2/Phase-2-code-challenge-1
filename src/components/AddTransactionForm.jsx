import React, { useState } from 'react'

const AddTransactionForm = () => {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const transaction = {
      date,
      description,
      category,
      amount
    }
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(res => res.json())
    .then(transaction => console.log(transaction))
    .catch(e => console.log(e))
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className='input form'>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" date-date-inline-picker='true' value={date} onChange={(e) => setDate(e.target)} />
            <input placeholder='Description...' className='text-input' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <input placeholder='Category...' className='text-input' value={category} onChange={(e) => setCategory(e.target.value)}></input>
            <input placeholder='Amo...' className='text-input' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <button className='btn'>Add Transaction</button>
        </div>
    </form>
  )
}

export default AddTransactionForm