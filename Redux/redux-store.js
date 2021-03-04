import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import messageReducer from './messageReducer';
import postDataReducer from './postDataReducer';
import contactDataReducer from './contactDataReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';
import authReducer from "./authReducer";

let reducers = combineReducers({
    messageReducer,
    postDataReducer,
    contactDataReducer,
    usersReducer,
    profileReducer,
    authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;