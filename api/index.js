// DEPENDENCIES
const express = require('express'),
	bodyParser = require('body-parser'),
	PORT = 8000;
// APP
let app = express();

// ROUTES
let tasksRoutes = require('./routes/tasksRoutes');

// Require mongoose db
let db = require('./config/db');

// APP imports
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Routes config
app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
	res.send('Welcome to my todoList project main Page');
});

// RUN APP
app.listen(PORT, (err, res) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server running http://localhost:${PORT}`);
});
