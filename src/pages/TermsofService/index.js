// pages/terms.js

import React from "react";

const TermsOfService = () => {
	return (
		<div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg h-screen mt-20">
			<h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

			<p className="mb-4">
				Please read these terms of service carefully before using operated by
			</p>

			<h2 className="text-2xl font-bold my-4">Conditions of Use</h2>

			<p className="mb-4">
				By accessing and using the Service, you agree to be bound by these
				terms. If you disagree with any part of the terms, then you may not
				access the Service.
			</p>

			<h2 className="text-2xl font-bold my-4">Termination</h2>

			<p className="mb-4">
				We may terminate or suspend access to our Service immediately, without
				prior notice or liability, for any reason whatsoever, including without
				limitation if you breach the terms.
			</p>
		</div>
	);
};

export default TermsOfService;
