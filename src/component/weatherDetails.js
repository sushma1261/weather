import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.openweathermap.org',

	headers : {
		'APPID' : 'fed0ed7e2b5ca9bfa2832a5b347a2e79'
	}

});