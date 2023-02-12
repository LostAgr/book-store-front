import { Item } from '../item/item';
import './items.css';

export const Items = (props) => {

  const data = props.data ? props.data.data : [];

  return (
    <main>
      <article>
        {
          data.map(item => (
            <div key={item.id}>
              <Item data={item} />
            </div>
          ))
        }
      </article> 
    </main>
  )
}
