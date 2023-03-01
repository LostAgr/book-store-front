import React from 'react';
import './radio.css'

export const Radio = (props) => {

  return (
        <div className='radio'>
            <input {...props.register('gender')} type="radio" name={props.name} value='0' />Мужчина
            <input {...props.register('gender')} type="radio" name={props.name} value='1' />Женщина
            {props.errors[props.name] && <div className='fild-errors'>{props.errors[props.name].message}</div>}
        </div>
  )
}