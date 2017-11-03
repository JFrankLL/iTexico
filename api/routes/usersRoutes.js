const route = require('express').Router(),
	UserModel = require('../models/userModel');

// #region GET ------------------------------------------------------------------------------------
route.get('/', (req, res) => {
	UserModel.find({}).sort({_id: -1}).exec((err, docs) => {
		if (err)
			res.status(404).send(err);
		res.status(200).send(docs);
	});
});
route.get('/:id', (req, res) => {
	UserModel.findById(req.params.id, (err, doc) => {
		if (err)
			res.status(404).send(err);
		res.status(200).send(doc);
	});
});
// #endregion
// #region POST -----------------------------------------------------------------------------------
route.post('/', (req, res) => {
	// Check required fields
	if(!req.body.name || !req.body.email || !req.body.password)
		return res.status(206).send({ success: false, msg: 'Registro. campos incompletos' });
	// Build a new user
	let user = new UserModel({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	// Insert task into the database
	user.save((err, data) => {
		if (err)
			res.status(404).send(err);
		res.status(200).send({ success: true, msg: 'Registrado Satisfactoriamente', data: data });
	});
});
route.post('/login', (req, res) => {
	// Check required fields
	if(!req.body.email || !req.body.password)
		return res.status(206).send({ success: false, msg: 'LogIn. Campos incompletos' });
	UserModel.find({email: req.body.email, password: req.body.password}, (err, doc) => {
		if (err)
			res.status(404).send(err);
		res.status(200).send({
			success: doc.length > 0,
			msg: 'Logeado. Credenciales ' + ((doc.length > 0) ? 'correctas':'incorrectas'),
			data: doc
		});
	});
});
// #endregion
// #region PUT ------------------------------------------------------------------------------------
route.put('/:id', (req, res) => {
	UserModel.findById(req.params.id, (err, doc) => {
		if (err)
			res.status(404).send(err);
		if(req.body.name) doc.name = req.body.name;
		if(req.body.email) doc.email = req.body.email;
		if(req.body.password) doc.date = req.body.date;
		doc.updated_at = Date.now();
		doc.save((err, doc) => { if(err) res.status(404).send(err); });
		res.status(200).send({ success: true, msg: 'User updated succesfully' });
	});
});
// #endregion
// #region DELETE ---------------------------------------------------------------------------------
route.delete('/:id', (req, res) => {
	UserModel.findByIdAndRemove(req.params.id, err => {
		if (err)
			res.status(404).send(err);
		res.status(200).send({ success: true, msg: 'Borrado satisfactoriamente' });
	});
});
// #endregion

module.exports = route;
