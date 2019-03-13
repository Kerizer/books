import { bestSellersListActionTypes } from './actionTypes';

const bestSellersListRequest = () => ({
	type: bestSellersListActionTypes.request,
});

const bestSellersListSuccess = data => ({
	type: bestSellersListActionTypes.success,
	results: data.results
});

const bestSellersListFailure = (error) => ({
	type: bestSellersListActionTypes.failure,
	error
});

export function getBestSellersList() {
	return async (dispatch, getState, api) => {
		dispatch(bestSellersListRequest());
		let response = await api.get("lists/names.json");
		if (response.status === 200 && response.statusText === "OK") {
			dispatch(bestSellersListSuccess(response.data));
		} else {
			dispatch(bestSellersListFailure());
		}

	}
};