const route = require('express').Router();
const TaskModel = require('../models/task');

route.post('/', function (req, res) {
	let task = TaskModel({
		name: req.body.name,
		task: req.body.task,
		date: req.body.date
	});
	task.save((err, data) => {
		if (err)
			console.log('Error', err);
		res.status(200).send('Tarea registrada exitosamente');
	});
});

route.get('/', function (req, res) {
	TaskModel.find({}, (err, docs) => {
		if (err) console.log(err);
		res.status(200).send(docs);
	});
	//taskModel.db.close((err) => {if(!err)console.log('cerrada')})
});

route.get('/:id', function (req, res) {
	TaskModel.findById(req.params.id, (err, doc) => {
		if (err)
			res.status(404).send({ success: false, msg: 'Nosta', err: err });
		res.status(200).send(doc);
	});
});

route.put('/', function (req, res) {
	res.status(200).send('hiciste un put');
});

route.delete('/:id', function (req, res) {
	TaskModel.findByIdAndRemove(req.params.id, function(err) {
		if(err) console.log('No, nel.', err);
		res.status(200).send('Borrado satisfactoriamente');
	});
});

module.exports = route;
