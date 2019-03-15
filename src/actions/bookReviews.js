import { booksReviewesActions } from './actionTypes';

const booksReviewesRequest = () => ({
	type: booksReviewesActions.request,
});

const booksReviewesSuccess = (isbn, data) => ({
	type: booksReviewesActions.success,
	results: data.results,
	isbn
});

const booksReviewesFailure = (error) => ({
	type: booksReviewesActions.failure,
	error,
});

export function getBookReviews(isbn) {
	return async (dispatch, getState, {api}) => {
		dispatch(booksReviewesRequest());
		try {
			let response = await api.get(`/reviews.json`, {
				params: {
					isbn
				}
			});
			if (response.status === 200 && response.statusText === "OK") {
				dispatch(booksReviewesSuccess(isbn, response.data));
			} else {
				dispatch(booksReviewesFailure());
			}
		} catch(e) {
			dispatch(booksReviewesFailure());
		}

	}
};