const express = require("express");
const router = express.Router();

const {
	addMessage,
	getMessages,
	deleteMessage,
} = require("../controllers/messageController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/message").post(addMessage);
router.route("/messages").get(isAuthenticatedUser, getMessages);
router.route("/message").delete(deleteMessage);

module.exports = router;
