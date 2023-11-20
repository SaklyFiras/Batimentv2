

const PrivacyPolicy = () => {
	return (
		<div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg mt-20 h-screen">
			<h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

			<p className="mb-4">
				This Privacy Policy describes how collects, uses, and discloses personal information when you use
				our website .
			</p>

			{/* Add more sections as needed */}

			<h2 className="text-2xl font-bold my-4">
				Information Collection and Use
			</h2>

			<p className="mb-4">
				We collect several types of information for various purposes to provide
				and improve our Service to you.
			</p>

			<h3 className="text-xl font-bold my-2">Personal Data</h3>

			<p className="mb-4">
				While using our Service, we may ask you to provide us with certain
				personally identifiable information that can be used to contact or
				identify you. Personally identifiable information may include, but is
				not limited to:
			</p>

			<ul className="list-disc pl-6 mb-4">
				<li>Email address</li>
				<li>First name and last name</li>
				<li>Phone number</li>
				<li>Address, State, Province, ZIP/Postal code, City</li>
				<li>Cookies and Usage Data</li>
			</ul>

			{/* Add more content as needed */}
		</div>
	);
};

export default PrivacyPolicy;
