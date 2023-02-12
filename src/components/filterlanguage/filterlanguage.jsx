import { useFetchLanguages } from '../../models/language';
import './filterlanguage.css';

export const Filterlanguage = (props) => {

  const fetchLanguage = useFetchLanguages();

  return (
    <div className='language'>
        <h4>Язык</h4>
        <div>
          {
            fetchLanguage.data.map((item) => (
              <label key={item.id} className='label-language'>
                  <input {...props.register(props.name)} type='checkbox' className='input-language' value={item.id} />{item.name}
              </label>
            ))
          }
        </div>
    </div>
  )
}
