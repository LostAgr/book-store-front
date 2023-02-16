import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './item.css';


export const Item = (props) => {

  const data = props.data

  return (
    <div className='contain'>
      <div className='book-card'>
        <img className='book-card' src='./image/book-card.jpg' alt='book' />
        <h6>Количество страниц: {data.pages}</h6>
        <button onClick={props.counter} className='button-shop'>Купить <FontAwesomeIcon icon={faCartShopping} /></button>
      </div>
      <div className='book-info'>
        <h1>{data.title}</h1>
        <h3>
          {
            data.authors.map(item => (
              <div key={item.id}>Автор: {item.firstName} {item.lastName}</div>
            ))
          }
        </h3>
        <h4>
          {
            data.categories.map(item => (
              <div key={item.id}>Категория: {item.name}</div>
            ))
          }
        </h4>
        <h4>
          Язык: {data.language.name}
        </h4>
        <h3>Цена: {data.cost}</h3>
      </div>
    </div>
  )
}