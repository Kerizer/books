import { booksReviewesActions } from '../actions/actionTypes';

const initialState = {
	reviews: {}
}

function BestSellersLists(state = initialState, data) {
	switch(data.type) {
		case booksReviewesActions.request:
			return {...state, isLoading: true}
		case booksReviewesActions.failure:
			return {...state, isLoading: false}
		case booksReviewesActions.success:
			return {...state, reviews:{...state.reviews, ...{[data.isbn]:data.results}}, isLoading: false}
		default:
			return state;
	}
}

export default BestSellersLists;
