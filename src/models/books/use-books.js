import { useEffect, useState } from 'react'
import { API } from '../../common/API';

export const useFetchBooks = ({ params }) => {

    const [state, setState] = useState({data: null, isLoading: false, isLoaded: false, error: null})

    useEffect(() => {
        setState((prevState) => ({...prevState, isLoading: true}))
        API.get('/books', {params})
        .then(({data}) => setState((prevState) => ({...prevState, data, isLoaded: true, isLoading: false})))
        .catch(({message}) => setState((prevState) => ({...prevState, error: message, isLoading: false})))
      }, [params]);

  return state;
}
