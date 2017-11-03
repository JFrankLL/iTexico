const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	collectionName = 'users';

var UserSchema = new Schema({
	name: { type: String, default: 'sin nombrar' },
	email: { type: String },
	password: { type: String, default: 'password' },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

let UserModel = mongoose.model(collectionName, UserSchema);

module.exports = UserModel;
