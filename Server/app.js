const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middlewares/errors");
if (process.env.NODE_ENV !== "PRODUCTION")
	require("dotenv").config({ path: "Server/config/config.env" });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(fileUpload());

const corsOptions = {
	origin: function (origin, callback) {
		callback(null, origin);
	},
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true,
	optionsSuccessStatus: 204,
};

//import cors : Temporary solution
const cors = require("cors");
app.use(cors(corsOptions));
//import routes
const user = require("./routes/user");
const messages = require("./routes/messages");

app.use("/api/v2", user);
app.use("/api/v2", messages);

//handling error
app.use(errorMiddleware);



module.exports = app;
