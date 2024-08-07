import React from 'react'

const FilterForm = () => {
  return (
    <form id='filter-form'>
        <input id='search' placeholder='Search...' type={"text"} />
        <button className='btn'>Search</button>
    </form>
  )
}

export default FilterForm