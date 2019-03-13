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
	return async (dispatch, getState, api) => {
		dispatch(bookInfoRequest());
		// NYT give no possibility to fetch info about single book, using googleapis here
		try {
			let response = await api.get(`https://openlibrary.org/api/books`, {
				params: {
					format:'json',
					jscmd:'data',
					bibkeys:`ISBN${isbn}`,
				}
			});
			if (response.status === 200) {
				dispatch(bookInfoSuccess(isbn, response.data[`ISBN${isbn}`]));
			} else {
				dispatch(bookInfoFailure());
			}
		} catch(e) {
			dispatch(bookInfoFailure());
		}

	}
};