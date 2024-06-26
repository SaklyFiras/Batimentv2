import { useEffect, useState } from "react";
import axios from "axios";
import { url, config } from "../../index";
import Routes from "@/pages/_Components/admin/Routes";
import Head from "next/head";
const Interface = () => {
	const handleGetMessages = async () => {
		try {
			const response = await axios.get(`${url}/messages`, config);
			if (response.status === 200) {
				console.log(response.data.success);
				setMessages(response.data.messages);
			} else {
				console.error("Login failed"); // Handle login error
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
	};
	const isAuth = async () => {
		try {
			const res = await axios.get(`${url}/checkAuth`);
			if (res.data.success) {
				
			} else {
				router.push("/Admin");
			}
		} catch (error) {
			router.push("/Admin");
			console.log(error);
		}
	};

	useEffect(() => {
		 isAuth();
	}, []);
	useEffect(() => {
		handleGetMessages();
	}, []);
	const [Messages, setMessages] = useState([]);
	return (
		<div className="flex flex-row h-fit mt-5 min-h-screen">
			<Head>
				<title>Admin | Messages</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="flex justify-center md:w-1/6 p-4 border-r">
				<Routes />
			</div>

			{/* Right column: Box with images and buttons */}
			<div className="md:w-5/6 p-4 overflow-auto">
				<div className="flex flex-col  flex-wrap">
					<h1 className="mx-auto">MESSAGES</h1>
					{/*Messages wih email name telephone and message */}
					{Messages.map((message, index) => (
						<div
							key={index}
							className="flex flex-col  border-2 mt-2 shadow-sm p-4"
						>
							<p className="flex text-decoration-underline">
								<span className=" text-indigo-500 font-bold">Email : </span>
								{message.email}
							</p>
							<p className=" text-decoration-underline">
								<span className=" text-indigo-500 font-bold">Name : </span>
								{message.name}
							</p>
							<p className=" text-decoration-underline">
								<span className=" text-indigo-500 font-bold">Telephone :</span>
								{message.telephone}
							</p>
							<p className="overflow-auto break-words col-span-3">
								<span className=" text-break break-words text-indigo-500 font-bold">
									Message :{" "}
								</span>
								{message.message}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Interface;
