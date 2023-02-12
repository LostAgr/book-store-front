import React from 'react';
import './order.css';
import { FaTrash } from 'react-icons/fa';

export const Order = () => {
  return (
    <div>
        <div className='item'>
            <img src='#' alt={'Товары'} />
            <h2>#</h2>
            <b>#</b>
            <FaTrash className='delItem' onClick='#' />
        </div>
    </div>
  )
}