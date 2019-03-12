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
	// return bestSellersListSuccess({results: [0, 1]});
	return async dispatch => {
		dispatch(bestSellersListRequest());
		try {
			let data = await fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=XlPHGXLfDmGcZKZCOK5RhuGWiARgbGWe");
			dispatch(bestSellersListSuccess(data.json()));
		} catch(error) {
			dispatch(bestSellersListFailure(error));
		}
		// fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=XlPHGXLfDmGcZKZCOK5RhuGWiARgbGWe")
		// 	.then(data => data.json())
		// 	.then(data => dispatch(bestSellersListSuccess(data)));
	}
};