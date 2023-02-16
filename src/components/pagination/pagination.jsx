import './pagination.css';

export const Pagination = (props) => {

    const pageButtons = new Array(props.pages).fill(null)

  return (
    <div className='pagination-container'>
        {(props.activeItem == 1) ? (<button disabled onClick={props.prevPageChange} className='button-pagination-number'>Previous</button>) : (<button onClick={props.prevPageChange} className='button-pagination-number'>Previous</button>)}
        {
          pageButtons.map((i, idx) => (
            <button
              onClick={props.handlePageChange} 
              className={
                (props.activeItem == idx + 1) ? 
                'button-pagination-number button-pagination-prev button-pagination-used' : 
                'button-pagination-number button-pagination-prev'} key={idx}>{idx + 1}
            </button>
          ))
        }
        {(props.activeItem == props.pages) ? (<button disabled onClick={props.nextPageChange} className='button-pagination-next'>Next</button>) : (<button onClick={props.nextPageChange} className='button-pagination-next'>Next</button>)}
    </div>
  )
}