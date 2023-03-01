import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Search } from '../search';
import { useState } from 'react';
import { useFetchProfile } from '../../models/profile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = (props) => {

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate()

  const totalOrderBooks = useSelector((state) => state.orderBooks.totalCount);

  const isOpen = () => {
    setIsProfileOpen(!isProfileOpen);
  }

  const logaut = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/';
  }

  const toStatusOrder = () => {
    navigate('/order-status');
  }

  const profile = useFetchProfile();

  const toOrderDetails = () => {
    navigate('/order-details');
  }

  const toBookStore = () => {
    navigate('/book-store');
  }

  return (
    <header className='header'>
        <div onClick={toBookStore} className='header__logo'>
          <img src='./image/book-logo.jpg' alt='logo' />
          <h3>Book-store</h3>
        </div>
        <Search handleChange={props.handleChange} value={props.value} />
        <ul className='nav'>
            <li>Про компанию</li>
            <li>Новости</li>
            <li>Контакты</li>
            <li className='profile-icon'>
              <FontAwesomeIcon onClick={toOrderDetails} icon={faCartShopping} />{(totalOrderBooks > 0) && (
                <div className='cart-count'>{totalOrderBooks}</div>
              )}
            </li>
            <li className='profile-icon'>
              <FontAwesomeIcon onClick={isOpen} icon={faUser} />{isProfileOpen && (
              <div className='profile-icon-open'>
                <ul className='profile-icon-menu'>
                  <li><h3>{profile.data.firstName} {profile.data.lastName}</h3></li>
                  <li onClick={toStatusOrder}>Просмотр статуса заявок</li>
                  <li><button onClick={logaut} className='profile-icon-button'>Выход</button></li>
                </ul>
              </div>
            )}</li>
        </ul>
    </header>
  )
}