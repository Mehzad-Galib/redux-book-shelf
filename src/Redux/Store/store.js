import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "../Reducer/bookReducer";

const middleware = applyMiddleware(thunk);

const combinedReducer = combineReducers({
    books: bookReducer
})
 
export const store = createStore(combinedReducer, composeWithDevTools(middleware));