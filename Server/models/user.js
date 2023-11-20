const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter your name"],
		maxlength: [30, "Your name cannot exceed 30 characters"],
		minlength: 3,
	},
	password: {
		type: String,
		required: [true, "Please enter password"],
		minlength: [3, "Your password must be longer than 3 charcaters"],
		maxlength: [1000, "Your password cannot exceed 1000 characters"],
		select: false,
	},
});
//Encrypting password before saving user

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	this.password = await bcrypt.hash(this.password, 10);
});
//compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//Retun jWT token
userSchema.methods.getJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_TIME,
	});
};
//generate password reset token

module.exports = mongoose.model("User", userSchema);
