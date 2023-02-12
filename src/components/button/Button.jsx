import React from 'react';
import './Button.css';

export const Button = (props) => {

  const size = {'large':'btn-lg'}[props.size] || '';

  const color = {'succsess':'btn-green', 'transparent':'btn-trt'}[props.color] || '';

  const classes = `btn ${color} ${size}`;
  return (
    <button onClick={props.onClick} className={classes}>{props.children}</button>
  )
}