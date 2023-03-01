import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dropdownorder, Footer, Header } from '../../components';
import { useCreateOrder, useFetchCities, useFetchProfile, useFetchStoreDepartments } from '../../models';
import { DECREMENTCOUNTBOOK, DELETEORDERBOOK, ESCAPEBOOKS, INCREMENTCOUNTBOOK } from '../../redux/types';
import './orderdetails.css';

export const Orderdetails = () => {

    const [orderDetailsState, setOrderDetailsState] = useState({selectedCityId: null, selectedStoreId: null})

    const orderBooks = useSelector(state => state.orderBooks);

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleRemoveBook = (e) => {       
        dispatch({type: DELETEORDERBOOK, bookid: e.target.dataset.bookid})
    }

    const profile = useFetchProfile();

    const cities = useFetchCities();

    const createOrder = useCreateOrder();

    const departments = useFetchStoreDepartments();

    const isLoaded = departments.isLoaded && profile.isLoaded && cities.isLoaded;

    const adresses = isLoaded ? departments.data.filter((store) => store.cityId === orderDetailsState.selectedCityId) : [];

    const cities2 = isLoaded ? cities.data.filter((city) => departments.data.find(department => department.cityId === city.id)) : cities.data;

    const handleChangeCity = (e) => {
        setOrderDetailsState((prevState) => ({...prevState, selectedCityId: e.target.value, selectedStoreId: ''}));
    }

    const handleChange = (e) => {
        setOrderDetailsState((prevState) => ({...prevState, selectedStoreId: e.target.value}));
    }

    const handleBookIncrementCount = (e) => {
        dispatch({type: INCREMENTCOUNTBOOK, bookid: e.target.dataset.bookid});
    }

    const handleBookDecrementCount = (e) => {
        dispatch({type: DECREMENTCOUNTBOOK, bookid: e.target.dataset.bookid});
    }

    const toBookStore = () => {
        navigate('/book-store');
      }

    useEffect(() => {
    if (profile.data) {
        setOrderDetailsState((prevState) => ({...prevState, selectedCityId: profile.data.city.id, selectedStoreId: ''}))
    }}, [profile.data])

    const orderList = Object.keys(orderBooks.books);

    const hundleCreateOrder = () => {
        createOrder.createOrder({
            "storeDepartment": orderDetailsState.selectedStoreId,
            "books": orderList.reduce((result, bookid) => {
                const book = orderBooks.books[bookid];
                return result.concat(new Array(book.count).fill(book.id))
            },[])
        })
        dispatch({type: ESCAPEBOOKS});
        navigate('/book-store');
    }

  return (
    <div className='wrapper-order'>
        <Header />
        {profile.data && departments.data && 
        <div className='order'>
            <h1>Оформление заказа</h1>
            <h3 className='order-data'>Ваши контактные данные</h3>
            <div className='order-input-flex'>
                <div className='order-input-row'>
                    <div>
                        <label className='order-label'>Имя</label>
                            <input disabled type='text' className='input-order' value={profile.data.firstName} />
                    </div>
                    <div>    
                        <label className='order-label'>Фамилия</label>
                            <input disabled type='text' className='input-order' value={profile.data.lastName} />
                    </div>
                </div>
                <div className='order-input-row'>
                    <div>
                        <label className='order-label'>Мобильный телефон</label>
                            <input disabled type='text' className='input-order' value={profile.data.phone} />
                    </div>
                    <div>    
                        <label className='order-label'>Электронная почта</label>
                            <input disabled type='text' className='input-order' value={profile.data.email} />
                    </div>
                </div>
            </div>
            <h3 className='order-name'>Заказ</h3>
            <hr />
            { orderList.map(orderBookId => {
                const orderBook = orderBooks.books[orderBookId];
                return (
                <div key={orderBook.id} className='order-item'>
                    <div className='book-img'><img src='./image/book-card.jpg' alt='book' /></div>
                    <div className='book-title'>{orderBook.title}</div>
                    <div className='book-count'>
                        <button disabled={orderBook.count<2} data-bookid={orderBook.id} onClick={handleBookDecrementCount} className='button-counter'>-</button>
                        <input readOnly className='input-counter' onChange={handleChange} value={orderBook.count} />
                        <button data-bookid={orderBook.id} onClick={handleBookIncrementCount} className='button-counter'>+</button>
                    </div>
                    <div className='book-price'>$ {Number(orderBook.cost.replace('$', '')) * orderBook.count}</div>
                    <button onClick={handleRemoveBook} data-bookid={orderBook.id} className='delete-order-book'>X</button>
                </div>)
            })}
            {orderBooks.totalPrice>0 && <div className='totalprice-order'>Общая сумма заказа: $ {orderBooks.totalPrice}</div>}
            <hr />
            <h3 className='order-delivery'>Доставка</h3>
            <div className='order-delivery-wrapper'>
                <select defaultValue={profile.data.city.name} onChange={handleChangeCity} id={profile.data.city.id}>
                    {cities2.map(city => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                </select>
                <Dropdownorder options={adresses} value='' placeholder='Выберите адресс выдачи товара' handleChange={handleChange} id={adresses.id} />
                <div className='button-wrapper'>
                    <button onClick={hundleCreateOrder} className='button-order'>Подтвердить заказ</button>
                    <button onClick={toBookStore} className='button-order'>Продолжить покупки</button>
                </div>
            </div>
        </div>
        }
        <Footer />
    </div>
  )
}