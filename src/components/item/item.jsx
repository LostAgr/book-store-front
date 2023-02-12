import './item.css';


export const Item = (props) => {

  const data = props.data

  return (
    <div className='contain'>
      <div>
        <img className='book-card' src='./image/book-card.jpg' alt='book' />
      </div>
      <div className='book-info'>
        <h1>{data.title}</h1>
        <h3>
          {
            data.authors.map(item => (
              <div key={item.id}>{item.firstName} {item.lastName}</div>
            ))
          }
        </h3>
        <h4>
          {
            data.categories.map(item => (
              <div key={item.id}>{item.name}</div>
            ))
          }
        </h4>
        <h4>
          {data.language.name}
        </h4>
        <h3>{data.cost}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  )
}