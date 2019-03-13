import { singleBookActions } from './actionTypes';

const bookInfoRequest = () => ({
	type: singleBookActions.request,
});

const bookInfoSuccess = (isbn, data) => ({
	type: singleBookActions.success,
	results: data.items,
	isbn
});

const bookInfoFailure = (error) => ({
	type: singleBookActions.failure,
	error,
});

export function getBookInfo(isbn) {
	return async (dispatch, getState, api) => {
		dispatch(bookInfoRequest());
		// NYT give no possibility to fetch info about single book, using googleapis here
		try {
			let response = await api.get(`https://www.googleapis.com/books/v1/volumes`, {
				params: {
					q:`isbn:${isbn}`
				}
			});
			if (response.status === 200) {
				dispatch(bookInfoSuccess(isbn, response.data));
			} else {
				dispatch(bookInfoFailure());
			}
		} catch(e) {
			dispatch(bookInfoFailure());
		}

	}
};