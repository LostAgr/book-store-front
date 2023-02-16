import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Dropdown, Radio, Textfield } from '../../components'
import { Textfieldsubmit } from '../../components/textfield'
import './sign-up.css';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi";
import axios from 'axios'

export const SignUp = () => {
  const [cities, setCities] = useState([])

  const urlCities = 'http://localhost:8000/cities';
  const urlPostUserData = 'http://localhost:8000/users';

  useEffect(() => {
    axios.get(urlCities)
    .then(response => setCities(response.data))
    .catch(error => console.log(error.message))
  }, []);

  const navigate = useNavigate()

  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    phone: Joi.string(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] } }).required(),
    cityId: Joi.string(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9а-яА-Я]{3,30}$')).required(),
    gender: Joi.number()
    })

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    axios.post(urlPostUserData, data)
    .then(function (response) {
      console.log(response.data);
      window.location.href = '/';
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleGoToLoginForm = () => {
    navigate('/')
  }

  return (
    <div className='wrapper'>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='formClass'>
          <Textfield errors={errors} register={register} name='firstName' id='nameField' type='text' label='Имя' />
          <Textfield errors={errors} register={register} name='lastName' id='secondNameField' type='text' label='Фамилия' />
          <Textfield errors={errors} register={register} classname='tel' name='phone' id='telNumber' type='number' label='Номер телефона' />
          <Dropdown errors={errors} register={register} options={cities} value='' label='Город' name='cityId' placeholder='Выберите ваш город' id={cities.id} />
          <Textfield errors={errors} register={register} name='email' id='emailField' type='email' label='Ел.почта' />
          <Textfield errors={errors} register={register} name='password' id='firstPass' type='password' label='Придумайте пароль' />
          <Radio errors={errors} register={register} name='gender' />
          <p>Регистрируясь, вы соглашаетесь с условиями положения о сборе и защите персональных данных и пользовательским соглашением</p>
          <Textfieldsubmit name='submit' id='submit' />
      </form>
      <Button onClick={handleGoToLoginForm} size='large' color='transparent'>Я уже зарегистрирован</Button>
    </div>
  )
}