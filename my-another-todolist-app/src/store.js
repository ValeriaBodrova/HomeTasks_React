import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'thunk';
import redusers from './reducers';

const rootReducer = combineReducers({
  todos: redusers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
