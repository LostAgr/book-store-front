import { combineReducers } from 'redux';
import { addToOrder } from './addtoorder';


export const rootReducer = combineReducers({
    orderBooks: addToOrder,
});