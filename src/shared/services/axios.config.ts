import axios, { AxiosError } from 'axios';

const instance = axios.create({
	baseURL: 'http://127.0.0.1:3333',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

instance.interceptors.request.use(
	async (config) => {
		const isToken = localStorage.getItem('token');

		if (isToken) {
			config.headers!.Authorization = 'Bearer ' + isToken;
		}

		return config;
	},
	function (error: AxiosError) {
		console.log('error no interceptor', error);
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	async (response) => {
		return response.data;
	},
	function (error: AxiosError) {
		console.log('error no interceptor', error);
		if (error.response) {
			const handlerError = error.response.data;
			return Promise.reject(handlerError);
		}

		return Promise.reject(error);
	}
);

export default instance;
