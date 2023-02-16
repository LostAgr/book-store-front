import React, { useEffect } from 'react';
import { useState } from 'react';
import { Footer, Header } from '../../components';
import { useFetchCitiesies } from '../../models/cities';
import { useFetchProfile } from '../../models/profile';
import { useFetchStoreDepartmens } from '../../models/storedepartments';
import './orderdetails.css'

export const Orderdetails = () => {

    const [orderDetailsState, setOrderDetailsState] = useState({selectedCityId: null, selectedStoreId: null})

    const profile = useFetchProfile();

    const cities = useFetchCitiesies();

    const departments = useFetchStoreDepartmens();

    const isLoaded = departments.isLoaded && profile.isLoaded && cities.isLoaded;

    const adresses = isLoaded ? departments.data.filter((store) => store.cityId === orderDetailsState.selectedCityId) : [];

    const cities2 = isLoaded ? cities.data.filter((city) => departments.data.find(department => department.cityId === city.id)) : cities.data;

    const handleChangeCity = (e) => {
        setOrderDetailsState((prevState) => ({...prevState, selectedCityId: e.target.value, selectedStoreId: ''}))
    }

    const handleChange = (e) => {
        setOrderDetailsState((prevState) => ({...prevState, selectedStoreId: e.target.value}))
    }

    useEffect(() => {
    if (profile.data) {
        setOrderDetailsState((prevState) => ({...prevState, selectedCityId: profile.data.city.id, selectedStoreId: ''}))
    }}, [profile.data])

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
            <ul className='order-item'>
                <li>Картинка</li>
                <li>Цена</li>
                <li>Количество</li>
                <li>Сумма</li>
            </ul>
            <hr />
            <h3 className='order-delivery'>Доставка</h3>
            <div className='order-delivery-wrapper'>
                <select defaultValue={profile.data.city.name} onChange={handleChangeCity} id={profile.data.city.id}>
                    {cities2.map(city => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                </select>
                <select defaultValue={departments.data.address} onChange={handleChange} id={departments.data.id}>
                    {adresses.map(address => (
                        <option key={address.id} value={address.address}>{address.address}</option>
                    ))}
                </select>
                <button className='button-order'>Подтвердить заказ</button>
            </div>
        </div>
        }
        <Footer />
    </div>
  )
}