var mongoose = require('mongoose');

var userInfoSchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		min: [2, 'Your name is not 1 letter long']
	},
	email:{
		type: String,
		required: true
	},
	phoneNumber:{
		type: String,
		required: true,
		min: [10, "Get that fake number out of here!"],
		max: [13, "Even with () and - - you dont need more numbers, until we start saving international numbers at least."]
	},
	dateOfBirth:{
		type: Date
		
	}
});

var UserInfo = module.exports = mongoose.model('UserInfo', userInfoSchema);

module.exports.getUserInfo = function(callback, limit) {
	UserInfo.find(callback).limit(limit);
}

module.exports.getUser = function(user, callback) {
	UserInfo.getUser(user, callback);
}

//Add User
module.exports.addUser = function(user, callback) {
	UserInfo.create(user, callback);
}