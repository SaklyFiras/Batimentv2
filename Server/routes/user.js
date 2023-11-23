const express = require("express");
const router = express.Router();
const {
	registerUser,
	loginUser,
	adminGetImages,
	adminAddImage,
	adminDeleteImages,
	logout,
	checkAuth,
} = require("../controllers/adminController");
const { isAuthenticatedUser } = require("../middlewares/auth");

//user routes

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/checkAuth").get(checkAuth);
router.route("/images/:categorie").get(adminGetImages);
router.route("/image").post(isAuthenticatedUser, adminAddImage);
router.route("/image/:categorie").put(isAuthenticatedUser, adminDeleteImages);

module.exports = router;
