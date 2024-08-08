import React, { useState } from 'react';

const FilterForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className='filter-form' onSubmit={handleSubmit}>
      <input
        id='search'
        placeholder='Search...'
        type='text'
        value={searchTerm}
        onChange={handleChange}
      />
      <button className='btn' type='submit'>
        Search
      </button>
    </form>
  );
};

export default FilterForm;