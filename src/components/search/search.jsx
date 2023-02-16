import React from 'react';
import './search.css';

export const Search = (props) => {

  return (
    <div>
        <input className='search-field' onChange={props.handleChange} placeholder='Введите название или номер книги' value={props.value} />
    </div>
  )
}