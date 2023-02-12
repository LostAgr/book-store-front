import { useFetchAuthors } from '../../models/authors';
import './filterAuthors.css';

export const FilterAuthors = (props) => {

    const fetchAuthors = useFetchAuthors();

  return (
    <div className='authors'>
        <h4>Категории</h4>
        <div>
          {
            fetchAuthors.data.map((item) => (
              <label key={item.id} className='label-category'>
                <input {...props.register(props.name)} type='checkbox' className='input-category' value={item.id} />{item.firstName} {item.lastName}
              </label>
            ))
          }         
        </div> 
    </div>
  )
}
