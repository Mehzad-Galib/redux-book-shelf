export const ALL_BOOKS = 'ALL_BOOKS';
export const REMOVE_FROM_ALL_BOOKS = 'REMOVE_FROM_ALL_BOOKS';
export const ADD_BOOK_TO_READING_LIST = 'ADD_BOOK_TO_READING_LIST';
export const REMOVE_BOOKS_FROM_READING_LIST = 'REMOVE_BOOKS_FROM_READING_LIST';
export const FINISHED_BOOKS = 'FINISHED_BOOKS';

export const allBooks = (payload) => {
    return {type: ALL_BOOKS, payload:payload}
}

export const removeFromAllBooks = (payload)=>{
    return {type: REMOVE_FROM_ALL_BOOKS, payload:payload}
}

export const addBook = (payload) =>{
    return {type: ADD_BOOK_TO_READING_LIST, payload:payload}
}

export const removeBook = (payload) =>{
    return {type: REMOVE_BOOKS_FROM_READING_LIST, payload:payload}
}

export const finishBooks = (payload)=>{
    return {type: FINISHED_BOOKS, payload:payload}
}