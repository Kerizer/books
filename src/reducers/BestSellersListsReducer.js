import {bestSellersListsActionTypes, singleBestSellersListActionType} from '../actions/actionTypes';

const initialState = {
	lists: [],
	listInfo: {}
}

function BestSellersLists(state = initialState, data) {
	switch(data.type) {
		// get all lists
		case bestSellersListsActionTypes.request:
			return {...state, isLoading: true}
		case bestSellersListsActionTypes.failure:
			return {...state, isLoading: false}
		case bestSellersListsActionTypes.success:
			return {...state, lists: data.results, isLoading: false}
			
		// single list info
		case singleBestSellersListActionType.request:
			return {...state, isLoading: true}
		case singleBestSellersListActionType.failure:
			return {...state, isLoading: false}
		case singleBestSellersListActionType.success:
			return {...state, listInfo: {...state.listInfo, ...{[data.list]: { items: data.results, numResults: data.numResults}}}, isLoading: false}
		default:
			return state;
	}
}

export default BestSellersLists;
