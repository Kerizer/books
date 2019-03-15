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
		const services = ['google', 'openLibrary'];
		let { 
			isbn,
			// title,
			service,
			excludedServices = [],
		} = params;

		if (service === null) {
			let leftServices = [];
			for (let i = 0; i < services.length; i++) {
				if ( !excludedServices.includes(services[i]) ) {
					leftServices = [...leftServices, services[i]]
				}
			}

			if (leftServices.length) {
				service = leftServices[0];
			} else {
				return {
					error: "NotFound",
					checkedServices: excludedServices,
				};
			}
		}

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
						if (response.data.totalItems === 0) {
							return getters.getBookInfo({...params, ...{excludedServices: [...excludedServices, 'google']}, service: null })
						}
						// Google sometimes returns array of irrelevant books, need to check if this array contains book with our isbn
						result = response.data.items.reduce( (acc, current) => {
							let isIsbnMatch = current.volumeInfo.industryIdentifiers.filter(industryIdentifier => industryIdentifier.identifier === isbn).length;
							return isIsbnMatch ? current : acc;
						}, {});
						return !!result ? {
							title: result.volumeInfo.title,
							description: result.volumeInfo.description,
							covers: {
								s: result.volumeInfo.imageLinks.thumbnail
							},
								
						} : getters.getBookInfo({...params, ...{excludedServices: [...excludedServices, 'google']}, service: null });
					case 'openLibrary':
					default:
						result = response.data[`ISBN${isbn}`];
						return !!result ? {
							title: result.title,
							description: result.description,
							covers: {
								s: result.cover.medium
							},
						} : getters.getBookInfo({...params, ...{excludedServices: [...excludedServices, 'openLibrary']}, service: null });
				}
			}
		} catch(e) {
			console.error(`Error while trying to fetch book from ${service} with parameters: ${JSON.stringify(getParameters)}. Error: ${e}`);
		}

	},
};

export default api;