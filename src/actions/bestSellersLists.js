import { bestSellersListsActionTypes } from './actionTypes';

const bestSellersListRequest = () => ({
	type: bestSellersListsActionTypes.request,
});

const bestSellersListSuccess = data => ({
	type: bestSellersListsActionTypes.success,
	results: data.results
});

const bestSellersListFailure = (error) => ({
	type: bestSellersListsActionTypes.failure,
	error
});

export function getBestSellersList() {
	return async (dispatch, getState, {api}) => {
		dispatch(bestSellersListRequest());
		let response = await api.get("lists/names.json");
		if (response.status === 200 && response.statusText === "OK") {
			dispatch(bestSellersListSuccess(response.data));
		} else {
			dispatch(bestSellersListFailure());
		}

	}
};