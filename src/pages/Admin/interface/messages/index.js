import { useEffect, useState } from "react";
import axios from "axios";
import { url, config } from "../../index";
import Routes from "@/pages/_Components/admin/Routes";
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
	useEffect(() => {
		handleGetMessages();
	}, []);
	const [Messages, setMessages] = useState([]);
	return (
		<div className="flex flex-row h-fit mt-5">
			{/* Left column: Accordion */}
			<div className="flex justify-center md:w-1/6 p-4 border-r">
				
					<Routes />
				
			</div>

			{/* Right column: Box with images and buttons */}
			<div className="md:w-5/6 p-4 overflow-auto">
				<div className="flex flex-col max-w-sm flex-wrap">
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
								<span className=" text-break break-words text-indigo-500 font-bold">Message : </span>
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
