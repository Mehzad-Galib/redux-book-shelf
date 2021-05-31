import {ADD_BOOK_TO_READING_LIST, REMOVE_BOOKS_FROM_READING_LIST, FINISHED_BOOKS, REMOVE_FROM_ALL_BOOKS, LOAD_BOOKS} from '../Action/bookAction';
// import books from '../../fakeData/books.json';

const initialState = {
    allBooks: [],
    reading: [],
    finishList: []
}

const bookReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_BOOKS:{
            const newState = {
                ...state, allBooks: action.payload
            }
            return newState;
        }
        case REMOVE_FROM_ALL_BOOKS:{
            const newState = {
                ...state, allBooks: state.allBooks.filter(b => b.id !== action.payload.id)
            }
            return newState;
        }

        case ADD_BOOK_TO_READING_LIST: {
            const newState = {
                ...state, reading: [...state.reading, action.payload]
            }
            return newState;
        }
        
        case REMOVE_BOOKS_FROM_READING_LIST:{
            const newState = {
                ...state, reading: state.reading.filter(b => b.id !== action.payload.id)
            }
            return newState;
        }
        case FINISHED_BOOKS:{
            const newState = {
                ...state, finishList: [...state.finishList, action.payload]
            }
            return newState;
        }
            
        default:{
            return state;
        }
            
        
    }
}

export default bookReducer;