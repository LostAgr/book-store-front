import { useFetchCategories } from '../../models/categories';
import './filtercategory.css';

export const Filtercategory = (props) => {

  const fetchCategories = useFetchCategories()

  return (
    <div className='category'>
        <h4>Категории</h4>
        <div>
          {
            fetchCategories.data.map((item) => (
              <label key={item.id} className='label-category'>
                <input {...props.register(props.name)} type='checkbox' className='input-category' value={item.id} />{item.name}
              </label>
            ))
          }         
        </div> 
    </div>
  )
}
