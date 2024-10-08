import React, { useEffect, useState } from 'react';
import './App.css';
import AddTransactionForm from './components/AddTransactionForm';
import Transactions from './components/Transactions';
import FilterForm from './components/FilterForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://json-server-sooty-omega.vercel.app/transactions')
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions))
      .catch((e) => console.log(e));
  }, []);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='app'>
      <div className='header'>
        <h1>THE BANK OF FLATIRON</h1>
      </div>
      <div className='forms'>
        <AddTransactionForm onAddTransaction={handleAddTransaction} />
        <br></br>
        <FilterForm onSearch={handleSearch} />
      </div>
      <Transactions transactions={filteredTransactions} />
    </div>
  );
};

export default App;