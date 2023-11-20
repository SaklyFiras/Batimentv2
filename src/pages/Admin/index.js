import axios from "axios";
import { useState } from "react";

export const url = "https://batimentv2.onrender.com/api/v2";
export const config = {
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};
function Admin() {
	const [user, setUser] = useState({
		name: "",
		password: "",
	});
	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(`${url}/login`, user, config);

			if (response.status === 200) {
				console.log(response.data.success); // Log the response message or handle it accordingly
				// Redirect or perform actions after successful login
				window.location.href = "/Admin/interface";
			} else {
				console.error("Login failed"); // Handle login error
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
	};

	return (
		<div className="h-screen d-flex justify-center items-center flex-col container  ">
			<div className="border-1 py-5 px-28">
				<h1 className="text-3xl font-bold text-center">Admin Login</h1>

				<div className="mb-2">
					<label
						htmlFor="first_name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						First name
					</label>

					<input
						value={user.name}
						onChange={(e) => setUser({ ...user, name: e.target.value })}
						type="text"
						id="first_name"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						placeholder="John"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Password
					</label>
					<input
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						type="password"
						id="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="•••••••••"
						required
					/>
				</div>
				<button
					onClick={handleLogin}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default Admin;
