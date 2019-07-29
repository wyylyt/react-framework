import { createStore, combineReducers } from 'redux';
import ContentReducer from './ContentReducer';

const reducer = combineReducers({
  ContentReducer,
});

const store = createStore(reducer);

export default store;