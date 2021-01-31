import {createStore, combineReducers} from 'redux';
import messageReducer from './messageReducer';
import postDataReducer from './postDataReducer';
import contactDataReducer from './contactDataReducer';

let reducers = combineReducers({
     messageReducer,
     postDataReducer,
     contactDataReducer
});

let store = createStore(reducers);

export default store;