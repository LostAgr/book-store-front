import React from 'react';
import './Textfield.css';

export const Textfield = (props) => {

  return (
    <div className='relative'>
        <label htmlFor={props.id}>{props.label}</label>
        <input {...props.register(props.name)} className='input-reg' placeholder={props.label} type={props.type} id={props.id} />
        {props.errors[props.name] && <div className='fild-errors'>{props.errors[props.name].message}</div>}
    </div>
  )
}