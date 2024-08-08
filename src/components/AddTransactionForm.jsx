import React, { useState } from 'react';

const AddTransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      date,
      description,
      category,
      amount
    };
    fetch('https://json-server-sooty-omega.vercel.app/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
      .then((res) => res.json())
      .then((newTransaction) => {
        onAddTransaction(newTransaction);
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
      })
      .catch((e) => console.log(e));
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='input form'>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input placeholder='Description...' className='text-input' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input placeholder='Category...' className='text-input' value={category} onChange={(e) => setCategory(e.target.value)} />
        <input placeholder='Amount...' className='text-input' value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button className='btn'>Add Transaction</button>
      </div>
    </form>
  );
};

export default AddTransactionForm;