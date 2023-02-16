import { Textfield } from "../../components";
import { Link } from 'react-router-dom';
import './sign-in.css';
import { Textfieldsubmit } from '../../components/textfield';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi";
import axios from 'axios';

const urlAuth = 'http://localhost:8000/auth';

export const SignIn = (props) => {

  const schema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] } }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9а-яА-Я]{3,30}$')).required()
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

  const onSubmit = (userData) => {
    axios.post(urlAuth, userData)
    .then(function (response) {
      localStorage.setItem('access_token', response.data.access_token)
      window.location.href = '/book-store'
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='wrapper'>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='formClass'>
          <Textfield errors={errors} register={register} name='email' id='emailField' type='email' label='Ел.почта' />
          <Textfield errors={errors} register={register} name='password' id='passField' type='password' label='Пароль' />
          <Textfieldsubmit name='submit' id='submit' />
      </form>
    <Link to='/registration'>Зарегистрироваться</Link>
    </div>
  )
}