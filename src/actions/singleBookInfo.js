import { singleBookActions } from './actionTypes';

const bookInfoRequest = () => ({
	type: singleBookActions.request,
});

const bookInfoSuccess = (isbn, data) => ({
	type: singleBookActions.success,
	result: data,
	isbn
});

const bookInfoFailure = (error) => ({
	type: singleBookActions.failure,
	error,
});

export function getBookInfo(isbn) {
	return async (dispatch, getState, {api, getters}) => {
		dispatch(bookInfoRequest());
		// NYT gives no possibility to fetch info about single book, using openlibrary here
		try {
			let response = await getters.getBookInfo({isbn});
			// if (response.status === 200) {
				console.log(response);
				dispatch(bookInfoSuccess(isbn, response));
			// } else {
				// dispatch(bookInfoFailure());
			// }
		} catch(e) {
			dispatch(bookInfoFailure());
		}

	}
};