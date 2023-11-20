const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
// checks if user us authentucated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return next(new ErrorHandler("Login first to access this resource.", 401));
	}

	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(decoded.id);

	next();
});

