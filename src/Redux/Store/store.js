import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "../Reducer/bookReducer";


const combinedReducer = combineReducers({
    books: bookReducer
})

export const store = createStore(combinedReducer, composeWithDevTools());