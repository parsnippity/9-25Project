const http = require('https');

const options = {
	method: 'GET',
	hostname: 'imdb8.p.rapidapi.com',
	port: null,
	path: '/auto-complete?q=adventure%20time',
	headers: {
		'X-RapidAPI-Key': '663668d71dmsh0e0b7a4446c320cp18bcb9jsn2cff65faaa23',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();