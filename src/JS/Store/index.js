import { createStore } from 'redux';
import todoReducer from '../Reducers/reducers';

const store = createStore(todoReducer);

export default store;
