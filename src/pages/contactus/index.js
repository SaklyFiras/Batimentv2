import Image from "next/image";
import { useState } from "react";
import { url, config } from "../Admin/index";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
	const [message, setMessage] = useState({
		email: "",
		name: "",
		telephone: "",
		message: "",
	});
	const handleMessageSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${url}/message`, message, config);
			if (response.status === 200) {
				toast.success('Message sent successfully');
				setMessage({
					email: "",
					name: "",
					telephone: "",
					message: "",
				});
			} else {
				toast.error('Message not sent');
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
	};
	return (
		<>
		<ToastContainer />
			<section className="bg-white mt-5 ">
				<div className="py-8  px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
						Contact Us
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
						Nous sommes à votre disposition
					</p>
					<div action="#" className="space-y-8  ">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Your email
							</label>
							<input
								value={message.email}
								onChange={(e) =>
									setMessage({ ...message, email: e.target.value })
								}
								type="email"
								id="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    -500 -500 "
								placeholder="name@Gmail.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="Name"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Name
							</label>
							<input
								value={message.name}
								onChange={(e) =>
									setMessage({ ...message, name: e.target.value })
								}
								type="text"
								id="Name"
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500    -500 -500 "
								placeholder="votre nom"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="Telephone"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Telephone
							</label>
							<input
								value={message.telephone}
								onChange={(e) =>
									setMessage({ ...message, telephone: e.target.value })
								}
								type="tel"
								id="Telephone"
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500    -500 -500 "
								placeholder="votre numero de telephone"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Message
							</label>
							<textarea
								value={message.message}
								onChange={(e) =>
									setMessage({ ...message, message: e.target.value })
								}
								id="message"
								rows="6"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500    -500 -500"
								placeholder="votre message"
							></textarea>
						</div>
						<button
							onClick={handleMessageSubmit}
							className="py-3 px-5 text-sm font-medium text-center float-right  text-white rounded-sm bg-indigo-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
						>
							Send message
						</button>
					</div>
				</div>
			</section>
			<div className="flex w-full flex-col justify-center items-center mt-5">
				<div className="flex md:flex-row flex-col justify-evenly items-center w-screen p-6">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-2xl font-bold text-center">Address</h1>
						<Image
							src={"/images/LOCAL.png"}
							width={60}
							height={60}
							alt="Image"
							className="my-1"
						/>
						<p className="text-center mt-4">Rue de la gare 1, 1000 Bruxelles</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-2xl font-bold text-center">Phone</h1>
						<Image
							src={"/images/PHONE.png"}
							width={60}
							height={60}
							alt="Image"
							className="my-1"
						/>
						<p className="text-center mt-4">+32 2 123 45 67</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-2xl font-bold text-center">Email</h1>
						<Image
							src={"/images/EMAIL.png"}
							width={60}
							height={60}
							alt="Image"
							className="my-1"
						/>
						<p className="text-center  mt-4">
							<a className="text-black text-decoration-none"
								href="mailto:
                            XX@gmail.com"
							>
								CONTACT@gmail.com
							</a>
						</p>
					</div>
				</div>
				
			</div>
		</>
	);
};

export default ContactUs;
