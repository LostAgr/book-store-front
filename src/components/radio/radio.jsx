import React from 'react';
import './radio.css'

export const Radio = (props) => {

  console.log(props.name)

  return (
        <div className='radio'>
            <input {...props.register('gender')} type="radio" name={props.name} value='0' />Мужчина
            <input {...props.register('gender')} type="radio" name={props.name} value='1' />Женщина
        </div>
  )
}