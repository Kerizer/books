import axios from 'axios';
import { publicNewYorkTimesKey, privateNewYorkTimesKey } from './api_key';

const api = axios.create({
	baseURL: 'https://api.nytimes.com/svc/books/v3/',
	params: {
		'api-key': publicNewYorkTimesKey,
	}
});

export default api;