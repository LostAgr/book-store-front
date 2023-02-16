import { Pagination } from '../pagination';
import { Item } from '../item/item';
import './items.css';

export const Items = (props) => {

  const data = props.data ? props.data.data : [];

  return (
    <main>
      <article>
        {
          data.map(item => (
            <div className='card-items' key={item.id}>
              <Item counter={props.counter} data={item} />
            </div>
          ))
        }
        {props.data && <Pagination nextPageChange={props.nextPageChange} activeItem={props.activeItem} prevPageChange={props.prevPageChange} handlePageChange={props.handlePageChange} {...props.data.metaData} />}
      </article>
    </main>
  )
}