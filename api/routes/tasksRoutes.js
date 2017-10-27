const route = require('express').Router(),
	TaskModel = require('../models/taskModel');

// #region GET ------------------------------------------------------------------------------------
route.get('/', (req, res) => {
	TaskModel.find({}, (err, docs) => {
		if (err)
			res.status(404).send(err);
		res.status(200).send(docs);
	});
});
route.get('/:id', (req, res) => {
	TaskModel.findById(req.params.id, (err, doc) => {
		if (err)
			res.status(404).send(err);
		res.status(200).send(doc);
	});
});
// #endregion
// #region POST -----------------------------------------------------------------------------------
route.post('/', (req, res) => {
	// Check required fields
	if(!req.body.name || !req.body.task || !req.body.date)
		res.status(206).send(err);
	// Build a new taask
	let task = new TaskModel({
		name: req.body.name,
		task: req.body.task,
		date: req.body.date
	});
	// Insert task into the database
	task.save((err, data) => {
		if (err)
			res.status(404).send(err);
		res.status(200).send('Task registered succesfully');
	});
});
// #endregion
// #region PUT ------------------------------------------------------------------------------------
route.put('/:id', (req, res) => {
	TaskModel.findById(req.params.id, (err, doc) => {
		if (err)
			res.status(404).send(err);
		if(req.body.task) doc.task = req.body.task;
		if(req.body.name) doc.name = req.body.name;
		if(req.body.date) doc.date = req.body.date;
		if(req.body.users) doc.users = req.body.users;
		doc.updated_at = Date.now();
		doc.save((err, doc) => { if(err) res.status(404).send(err); });
		res.status(200).send('Task updated succesfully');
	});
});
// #endregion
// #region DELETE ---------------------------------------------------------------------------------
route.delete('/:id', (req, res) => {
	TaskModel.findByIdAndRemove(req.params.id, err => {
		if (err)
			res.status(404).send(err);
		res.status(200).send('Borrado satisfactoriamente');
	});
});
// #endregion

module.exports = route;
