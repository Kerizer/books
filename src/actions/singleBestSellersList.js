import { singleBestSellersListActionType } from './actionTypes';

const singleBestSellersListRequest = () => ({
	type: singleBestSellersListActionType.request,
});

const singleBellersListSuccess = (list, data) => ({
	type: singleBestSellersListActionType.success,
	results: data.results,
	numResults: data.num_results,
	list
});

const singleBellersListFailure = (error) => ({
	type: singleBestSellersListActionType.failure,
	error
});

export function getSingleBestSellersList(list) {
	return async (dispatch, getState, {api}) => {
		dispatch(singleBestSellersListRequest());
		let response = await api.get(`/lists/current/${list}.json`);
		if (response.status === 200 && response.statusText === "OK") {
			dispatch(singleBellersListSuccess(list, response.data));
		} else {
			dispatch(singleBellersListFailure());
		}

	}
};