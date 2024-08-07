import React from 'react'

const FilterForm = () => {
  return (
    <form id='new-item'>
        <div className='input form'>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" date-date-inline-picker='true'/>
            <input placeholder='Description...' className='text-input'></input>
            <input placeholder='Category...' className='text-input'></input>
            <input placeholder='Amount...' className='text-input'></input>
            <button className='btn'>Add Transaction</button>
        </div>
    </form>
  )
}

export default FilterForm