const mongooose = require('mongoose');
const Schema = mongooose.Schema;

var taskSchema = new Schema({
	name: { type: String, default: 'sin nombrar' },
	task: String,
	date: { type: Date, default: Date.now },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

let TaskModel = mongooose.model('Task', taskSchema);

module.exports = TaskModel;
