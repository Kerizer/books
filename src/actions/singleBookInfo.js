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
		let response = await getters.getBookInfo({isbn, service:'google'});
		if (!response.error && response.error !== "NotFound") {
			dispatch(bookInfoSuccess(isbn, response));
		} else {
			dispatch(bookInfoFailure());
		}

	}
};