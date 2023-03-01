import { ADDTOORDERBOOK, DECREMENTCOUNTBOOK, DELETEORDERBOOK, ESCAPEBOOKS, INCREMENTCOUNTBOOK } from "./types";

const initialState = {books: {}};

export const addToOrder = (state = initialState, action) => {

    switch(action.type) {

        case ADDTOORDERBOOK: {
            const bookExist = state.books[action.book.id];
            const totalPrice = state.totalPrice ? state.totalPrice + Number(action.book.cost.replace('$', '')) : Number(action.book.cost.replace('$', ''));
            const totalCount = state.totalCount ? state.totalCount + 1 : 1;
            const book = bookExist ? ({[action.book.id]: {...bookExist, count: bookExist.count + 1}}) : ({[action.book.id]: {...action.book, count: 1}});
            return { books: {...state.books, ...book}, totalCount, totalPrice};
        }
        
        case DELETEORDERBOOK: {
            const bookToDelete = state.books[action.bookid];
            const totalCount = state.totalCount - bookToDelete.count;
            const totalPrice = state.totalPrice - (Number(bookToDelete.cost.replace('$', '')) * bookToDelete.count);
            delete state.books[action.bookid];
            return {...state, books: { ...state.books}, totalCount, totalPrice};
        }

        case INCREMENTCOUNTBOOK: {
            const book = state.books[action.bookid];
            const totalCount = state.totalCount + 1;
            const totalPrice = state.totalPrice + Number(book.cost.replace('$', ''));
            book.count += 1;
            return {...state, books: {...state.books}, totalCount, totalPrice}
        }

        case DECREMENTCOUNTBOOK: {
            const book = state.books[action.bookid];
            const totalCount = state.totalCount - 1;
            const totalPrice = state.totalPrice - Number(book.cost.replace('$', ''));
            book.count -= 1;
            return {...state, books: {...state.books}, totalCount, totalPrice}
        }

        case ESCAPEBOOKS: {
            return {...state, books: {}, totalCount: 0, totalPrice: 0}
        }

        default:
            return state;
    }
}