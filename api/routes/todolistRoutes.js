const route = require('express').Router();

route.post('/', function(req, res) {
	res.status(200).send('hiciste un post');
});

route.get('/', function(req, res) {

	let data = { tasks: [
		{ name: 'task #1', task: 'do something' },
		{ name: 'task #2', task: 'do anything' },
		{ name: 'task #3', task: 'don\'t do it ' }
	]};
	res.status(200).json(data);
});

route.put('/', function(req, res) {
	res.status(200).send('hiciste un put');
});

route.delete('/', function(req, res) {
	res.status(200).send('hiciste un delete');
});

module.exports = route;
