const express = require("express");
const next = require("next");
const server = require("./Server/server");
const appexpress = require("./Server/app");

const port = 3000;
const dev = process.env.NODE_ENV !== "PRODUCTION";

// creating the app either in production or dev mode
const app = next({ dev });
const handle = app.getRequestHandler();

// running the app, async operation
app.prepare().then(() => {
	
	// redirecting all requests to Next.js
	appexpress.all("*", (req, res) => {
		return handle(req, res);
	});

	appexpress.listen(port, (err) => {
		if (err) throw err;
		console.log(`Runing on port ${port}, dev: ${dev}`);
	});
});
