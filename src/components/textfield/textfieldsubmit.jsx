import React from 'react';
import './Textfield.css'

export const Textfieldsubmit = (props) => {
  return (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input className='input-submit' name={props.name} id={props.id} type='submit' />
    </div>
  )
}
