import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchBooks } from '../../models';
import { FilterAuthors } from '../filterAuthors';
import { Filtercategory } from '../filtercategory';
import { Filterlanguage } from '../filterlanguage';
import { Filterprice } from '../filterprice/filterprice';
import { Items } from '../items';
import './main.css'

export const Main = () => {

  const [params, setParams] = useState(null)

  const {
    register,
    watch,
    formState: {
      errors,
    },
  } = useForm({});

  const fetchBooks = useFetchBooks({params});

  useEffect(() => {
    const subscription = watch((values, { name, type }) => {
      const params = Object.keys(values).reduce((result, key) => {
        const value = values[key];
        if (value) {
          return {...result, [key]: value.join()}
        } 
        return result;
      }, {});
      setParams(params)
    })
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className='main_wrapper'>
        <div className='sidebar'>
            <h3>Фильтр</h3>
            <form className='formClass'>
              <Filtercategory name='categories' errors={errors} register={register} />
              <Filterlanguage name='languages' errors={errors} register={register} />
              <FilterAuthors name='authors' errors={errors} register={register} />
              <Filterprice errors={errors} register={register} />
            </form>
        </div>
        <div className='main'>
            <Items data={fetchBooks.data} />
        </div>
    </div>
  )
}