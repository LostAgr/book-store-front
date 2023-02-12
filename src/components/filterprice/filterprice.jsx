import React, { useState } from 'react';
import './filterprice.css';

export const Filterprice = () => {

  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleChange1 = (e) => {
    setValue1(e.target.value)
  }

  return (
    <div className="slidecontainer">
        <h4>Цена</h4>
        От <input className='price' type="text" onChange={handleChange} value={value} />
        до <input className='price' type="text" onChange={handleChange1} value={value1} />
    </div>
  )
}