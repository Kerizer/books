import axios from 'axios';
import { publicNewYorkTimesKey, privateNewYorkTimesKey } from './api_key';

const api = axios.create({
	baseURL: 'https://api.nytimes.com/svc/books/v3/',
	params: {
		'api-key': publicNewYorkTimesKey,
	}
});

export const getters = {
	getBookInfo: async (params) => {
		let { 
			isbn,
			// title,
			service,
			excludedServices = [],
		} = params;

		let getParameters = {},
			getURL = "";

		switch (service) {
			case 'google':
				getParameters = {
					q:`isbn:${isbn}`
				};
				getURL = "https://www.googleapis.com/books/v1/volumes";
				break;
			case 'openLibrary':
			default:
				getParameters = {
					format:'json',
					jscmd:'data',
					bibkeys:`ISBN${isbn}`,
				};
				getURL = "https://openlibrary.org/api/books";
		};

		try {
			let response = await axios.get(getURL, {params: getParameters });
			if (response.status === 200) {
				let result;
				switch (service) {
					case 'google':
						result = response.data.items[0];
						return !!result ? {
							title: result.volumeInfo.title,
							description: result.volumeInfo.description,
							covers: {
								s: result.volumeInfo.imageLinks.thumbnail
							},
								
						} : {};
					case 'openLibrary':
					default:
						result = response.data[`ISBN${isbn}`];
						return !!result ? {
							title: result.title,
							description: result.description,
							covers: {
								s: result.cover.medium
							},
						} : {}
				}
			}
		} catch(e) {
			console.error(`Error while trying to fetch book from ${service} with parameters: ${getParameters}. Error: ${e}`);
		}

	},
};

export default api;