import { getPrettyDate } from '../../helpers/formatDate';
import { useFetchOrderBooks } from '../../models';
import './orderStatusList.css';

export const OrderStatusList = () => {

    const orderList = useFetchOrderBooks();

    const uniqueBooks = (books) => {
        const result = books.reduce((acc, book) => {
            const found = acc.find(item => item.id === book.id)
            if (!found) {
                book.count = 1;
                acc.push(book);
            } else {
                found.count += 1;
            }
            return acc;
        }, []);
        return result
    }

  return (
    <div className='wrapper-status-list'>
        <h1>Мои заказы</h1>
            {orderList.data.map((order) => (
                    <fieldset key={order.id}>
                    <legend>{order.status}</legend>
                        <ul className='order-wrapper'>
                            <li className='orderbooks'>
                                {uniqueBooks(order.books).map(((book, idx) => (
                                    <div className='order-items' key={book.id}>
                                        <div className='order-items-title'><h3>{idx + 1}. {book.title}</h3></div>
                                        <div className='order-items-count'>x {book.count}</div>
                                        <div className='order-items-cost'>{book.cost}</div>
                                    </div>
                                )))
                                }
                            </li>
                            <li className='order-item-created'>Дата создания заказа: {getPrettyDate('hh.mm.ss dd/MM/yyyy', order.createdAt)}</li>
                            <li className='orderadress'><div><p className='mb'>City: {order.departmentStore.city.name}</p><p>adress: {order.departmentStore.address}</p></div></li>
                            <li className='orderprice'>Сумма заказа: {order.cost} </li>
                            <li className='img'><img src='./image/book-card.jpg' alt='book' /></li>
                        </ul>
                    </fieldset>
                ))
            }
    </div>
  )
}