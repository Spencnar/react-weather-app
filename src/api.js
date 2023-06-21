export const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40eea2771cmshcaa3b36508a0078p12cc73jsnf41a035177c6',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};



try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "b7a1fde7c444bfad4b5c1bddd07bcc67"