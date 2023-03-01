import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchBooks } from '../../models';
import { FilterAuthors } from '../filterAuthors';
import { Filtercategory } from '../filtercategory';
import { Filterlanguage } from '../filterlanguage';
import { Items } from '../items';
import './main.css';

export const Main = (props) => {

  const [params, setParams] = useState({page: 1})

  const {
    register,
    watch,
    formState: {
      errors,
    },
  } = useForm({});

  const fetchBooks = useFetchBooks({params});

  console.log()

  const search = props.search;

  useEffect(() => {
    setParams((prevState) => ({...prevState, search}))
  }, [search]);

  useEffect(() => {
    const subscription = watch((values, { name, type }) => {
      const params = Object.keys(values).reduce((result, key) => {
        const value = values[key];
        if (value) {
          return {...result, [key]: value.join()}
        } 
        return result;
      }, {});
      setParams((prevState) => ({...prevState, ...params}))
    })
    return () => subscription.unsubscribe();
  }, [watch]);

  const handlePageChange = (e) => {
    const page = Number(e.target.innerText);
    setParams((prevState) => ({...prevState, page}))
  }

  const prevPageChange = (e) => {
    setParams((prevState) => ({...prevState, page: prevState.page - 1}))
  }

  const nextPageChange = (e) => {
    setParams((prevState) => ({...prevState, page: prevState.page + 1}))
  }

  

  return (
    <div className='main_wrapper'>
        <div className='sidebar'>
            <h3 className='sidebar-title'>Фильтр</h3>
            <form className='formClass'>
              <Filtercategory name='categories' errors={errors} register={register} />
              <Filterlanguage name='languages' errors={errors} register={register} />
              <FilterAuthors name='authors' errors={errors} register={register} />
            </form>
        </div>
        <div className='main'>
            <Items data={fetchBooks.data} activeItem={params.page} nextPageChange={nextPageChange} prevPageChange={prevPageChange} handlePageChange={handlePageChange} />
        </div>
    </div>
  )
}