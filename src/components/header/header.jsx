import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export const Header = () => {
  return (
    <header className='header'>
        <div className='header__logo'>
          <img src='./image/book-logo.jpg' alt='logo' />
          <h3>Book-store</h3>
        </div>
        <ul className='nav'>
            <li>Про компанию</li>
            <li>Новости</li>
            <li>Контакты</li>
            <li><FontAwesomeIcon icon={faCartShopping} /></li>
            <li><FontAwesomeIcon icon={faUser} /></li>
        </ul>
    </header>
  )
}