const mongoose = require("mongoose");
const imagesSchema = new mongoose.Schema({
	page: {
		type: String,
		required: [true, "Please enter page"],
	},
	categorie: {
		type: String,
		required: [true, "Please enter title"],
	},
	images: [
		{
			public_id: {
				type: String,
				// required: true
			},
			url: {
				type: String,
				// required: true
			},
		},
	],
});

module.exports = mongoose.model("Images", imagesSchema);
