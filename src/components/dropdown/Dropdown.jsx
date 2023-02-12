import React from 'react'
import './Dropdown.css'

export const Dropdown = (props) => {
  return (
    <select {...props.register(props.name)} defaultValue={props.value} placeholder={props.placeholder} name={props.name} id={props.id}>
      {props.placeholder && props.value==='' && <option value='' disabled>{props.placeholder}</option>}
      {props.options.map(option => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}
    </select>
  )
}