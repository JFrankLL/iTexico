const db = require('mongoose');

let host = '127.0.0.1',
	port = '20017',
	db_name = 'todolist';

db.connect('mongodb://'+host+'/'+db_name, function(err) {
	if(err){
		console.log('Error:', err);
		return;
	}
	console.log('Connected to MongoDB succesfully!');
});

module.exports = db;
