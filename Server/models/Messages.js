const validator = require("validator");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		validator: [validator.isEmail, "Please enter valid email address"],
	},
	message: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	telephone: {
		type: String,
		required: true,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Messages", userSchema);
