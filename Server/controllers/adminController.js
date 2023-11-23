const User = require("../models/user");
const Images = require("../models/images");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const cloudinary = require("cloudinary").v2;
const jwt = require("jsonwebtoken");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
	const { name, password } = req.body;

	const user = await User.create({
		name,
		password,
	});

	await user.save();
	sendToken(user, 200, res);
});
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
	const { name, password } = req.body;

	// Checks if name and password is entered by user
	if (!name || !password) {
		return next(new ErrorHandler("Please enter name & password", 400));
	}

	// Finding user in database
	const user = await User.findOne({ name }).select("+password");

	if (!user) {
		return next(new ErrorHandler("User does not exist", 401));
	}

	// Checks if password is correct or not

	const isPasswordMatched = await user.comparePassword(password);

	if (!isPasswordMatched) {
		return next(new ErrorHandler("Invalid name or Password", 401));
	}

	sendToken(user, 200, res);
});

//Admin Get Images => /api/v1/admin/images
exports.adminGetImages = catchAsyncErrors(async (req, res, next) => {
	const categorie = req.params.categorie;
	const images = await Images.find({ categorie: categorie });
	res.status(200).json({
		success: true,
		images,
	});
});

// Admin Add Image  =>   /api/v1/admin/image
exports.adminAddImage = catchAsyncErrors(async (req, res, next) => {
	let images = [];
	if (typeof req.body.images === "string") {
		images.push(req.body.images);
	} else {
		images = req.body.images;
	}
	let imagesLinks = [];

	for (let i = 0; i < images.length; i++) {
		const result = await cloudinary.uploader.upload(images[i], {
			folder: `batiment/${req.body.categorie}`,
		});

		imagesLinks.push({
			public_id: result.public_id,
			url: result.secure_url,
			name: images[i].name,
		});
	}

	req.body.images = imagesLinks;
	const _image = await Images.findOne({ categorie: req.body.categorie });
	if (_image) {
		_image.images.push(...imagesLinks);
		await _image.save();
		res.status(201).json({
			success: true,
			_image,
		});
		return;
	}

	const post = await Images.create(req.body);

	res.status(201).json({
		success: true,
		post,
	});
});

// Admin Delete Images => /api/v1/admin/image

exports.adminDeleteImages = catchAsyncErrors(async (req, res, next) => {
	let images = await Images.find({ categorie: req.params.categorie });
	if (!images) {
		return next(
			new ErrorHandler(
				`Images does not found with categorie: ${req.params.categorie}`
			)
		);
	}

	const imagesArray = req.body.images;
	for (let i = 0; i < imagesArray.length; i++) {
		await cloudinary.uploader.destroy(imagesArray[i].public_id);
	}

	// remove images that Images.images = imagesArray using mongoose pull
	images = await Images.findOneAndUpdate(
		{ categorie: req.params.categorie },
		{
			$pull: {
				images: {
					public_id: { $in: imagesArray.map((image) => image.public_id) },
				},
			},
		},
		{ new: true }
	);

	res.status(200).json({
		success: true,
		message: "Images deleted successfully",
	});
});

// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
	res.clearCookie("token");
	res.status(200).json({
		success: true,
		message: "Logged out",
	});
});

exports.checkAuth = catchAsyncErrors(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return next(new ErrorHandler("Login first to access this resource.", 401));
	}
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(decoded.id);
	res.status(200).json({
		success: true,
	});
});
