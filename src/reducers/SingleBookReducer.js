import { singleBookActions } from '../actions/actionTypes';

const initialState = {
	books: {}
}

function BestSellersLists(state = initialState, data) {
	switch(data.type) {
		case singleBookActions.request:
			return {...state, isLoading: true}
		case singleBookActions.failure:
			return {...state, isLoading: false}
		case singleBookActions.success:
			return {...state, books:{...state.books, ...{[data.isbn]:data.results ? data.results[0] : {error:"NotFound"} }}, isLoading: false}
		default:
			return state;
	}
}

export default BestSellersLists;
