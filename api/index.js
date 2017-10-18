// DEPENDENCIES
const express	= require('express'),
	PORT		= 8000,
	bodyParser	= require('body-parser');
// APP
let app = express();

// Require ROUTES
let todolistRoutes = require('./routes/todolistRoutes');

// Require mongoose db
let db = require('./config/db');

// APP imports
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes config
app.use('/todolist', todolistRoutes);

// RUN APP
app.listen(PORT, function(err, res) {
	if(err) {
		console.log('Surgio este error', err);
		return;
	}
	console.log(`Server running localhost:${PORT}`);
});

