const express = require("express");
const router = express.Router();

const {
	addMessage,
	getMessages,
	deleteMessage,
} = require("../controllers/messageController");

router.route("/message").post(addMessage);
router.route("/messages").get(getMessages);
router.route("/message").delete(deleteMessage);

module.exports = router;
