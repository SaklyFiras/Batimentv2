const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Message = require("../models/Messages");

exports.addMessage = catchAsyncErrors(async (req, res, next) => {
	const message = await Message.create(req.body);
	res.status(200).json({
		success: true,
		message,
	});
});

exports.getMessages = catchAsyncErrors(async (req, res, next) => {
	const messages = await Message.find();
	res.status(200).json({
		success: true,
		messages,
	});
});

exports.deleteMessage = catchAsyncErrors(async (req, res, next) => {
	const Message = await Message.findById(req.body.id);
	if (!Message) {
		return next(new ErrorHandler("Message not found", 404));
	}
	await Message.remove();
	res.status(200).json({
		success: true,
		message: "Message deleted successfully",
	});
});
