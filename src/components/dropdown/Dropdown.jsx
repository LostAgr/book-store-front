import React from 'react'
import './Dropdown.css'

export const Dropdown = (props) => {
  return (
    <div className='select-errors'>
      <select {...props.register(props.name)} defaultValue={props.value} placeholder={props.placeholder} name={props.name} id={props.id}>
        {props.placeholder && props.value==='' && <option value='' disabled>{props.placeholder}</option>}
        {props.options.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
      {props.errors[props.name] && <div className='fild-errors'>{props.errors[props.name].message}</div>}
    </div>
  )
}