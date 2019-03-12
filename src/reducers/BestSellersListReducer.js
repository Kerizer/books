import {bestSellersListActionTypes} from './../actions/actionTypes';

const initialState = {
	lists: []
}

function BestSellersLists(state = initialState, data) {
	switch(data.type) {
		case bestSellersListActionTypes.request:
			return {...state}
		case bestSellersListActionTypes.success:
			return {...state, lists: data.results}
		default:
			return state;
	}
}

export default BestSellersLists;
