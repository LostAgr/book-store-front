import React from 'react'

export const Dropdownorder = (props) => {
    return (
        <select defaultValue={props.value} onChange={props.handleChange} placeholder={props.placeholder} id={props.id}>
          {props.placeholder && props.value==='' && <option value='' disabled>{props.placeholder}</option>}
          {props.options.map(option => (
            <option key={option.id} value={option.id}>{option.address}</option>
          ))}
        </select>
      )
    }