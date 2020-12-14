import { createStore, combineReducers, applyMiddleware } from 'redux';
import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
