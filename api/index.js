// DEPENDENCIES
const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	PORT = 8000;

// APP
let app = express();

// ROUTES
let tasksRoutes = require('./routes/tasksRoutes');
let usersRoutes = require('./routes/usersRoutes');

// Require mongoose db
let db = require('./config/db');

// APP imports
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Cross domain requests
app.use(cors());

// Routes config
app.use('/tasks', tasksRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
	res.send('API para proyecto de iTexico');
});

// RUN APP
app.listen(PORT, (err, res) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`Server running on http://localhost:${PORT}`);
});
