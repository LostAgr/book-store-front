import { useEffect, useState } from 'react'
import { API } from '../../common/API';

export const useFetchAuthors = () => {

    const [state, setState] = useState({ data:[], isLoading:false, isLoaded:false, error:null })

    useEffect(() => {
        setState((prevState) => ({...prevState, isLoading: true}))
        API.get('/authors')
        .then(({data}) => setState((prevState) => ({...prevState, data, isLoaded: true, isLoading: false})))
        .catch(({message}) => setState((prevState) => ({...prevState, error: message, isLoading: false})))
      }, [])

  return state;
}