const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	collectionName = 'tasks';

var TaskSchema = new Schema({
	name: { type: String, default: 'sin nombrar' },
	task: String,
	date: { type: Date, default: Date.now },
	toggle: { type: Boolean, default: false },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	owner: Object
});

let TaskModel = mongoose.model(collectionName, TaskSchema);

module.exports = TaskModel;
