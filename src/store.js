import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import api from './api';

const store = createStore(
	combineReducers(reducers),
	compose(
		applyMiddleware(thunk.withExtraArgument(api)),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a=>a
	)
);

export default store;