const mongooose = require('mongoose'),
	Schema = mongooose.Schema,
	collectionName = 'tasks';

var TaskSchema = new Schema({
	name: { type: String, default: 'sin nombrar' },
	task: String,
	date: { type: Date, default: Date.now },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	users: { type: Array }
});

let TaskModel = mongooose.model(collectionName, TaskSchema);

module.exports = TaskModel;
