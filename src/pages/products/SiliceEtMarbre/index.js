import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
const { url, config } = require("../../Admin/index");
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const images = [
	["/images/moquette/aubergine.jpg", "Aubergine"],
	["/images/moquette/beige.jpg", "Beige"],
	["/images/moquette/blanc.jpg", "Blanc"],
	["/images/moquette/gris-anthracite.jpg", "Gris Anthracite"],
	["/images/moquette/gris-clair.jpg", "Gris Clair"],
	["/images/moquette/jaune.jpg", "Jaune"],
	["/images/moquette/rouge.jpg", "Rouge"],
	["/images/moquette/saumon.jpg", "Saumon"],
];

const Index = () => {
	const [message, setMessage] = useState({
		email: "",
		name: "",
		telephone: "",
		message: "",
	});
	const handleMessageSubmit = async (e) => {
		e.preventDefault();
		// add "(avis)" to the message
		message.message = "(avis) " + message.message;
		
		try {
			const response = await axios.post(`${url}/message`, message, config);
			if (response.status === 200) {
				toast.success("Message sent successfully");
				setMessage({
					email: "",
					name: "",
					telephone: "",
					message: "",
				});
			} else {
				toast.error("Message not sent");
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
	};

	return (
		<div className="h-fit mt-20 ">
			<Head>
				<title>Moquette de marbre</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<ToastContainer />
			<div className="flex flex-row flex-wrap  justify-evenly ">
				<div className="flex flex-col flex-grow-1 max-w-fit ordre-1 mx-2">
					<h2>Marbre de provenance exclusivement européenne.</h2>
					<i>
						Existe en granulométrie 2-4 mm ou 4-8 mm pour une épaisseur finale
						de 8 mm.
					</i>
					<hr className=" w-50"></hr>
					<div className="grid grid-cols-3 md:gap-5 gap-2 mx-1">
						{images.map((image, index) => (
							<div key={index} className="">
								<Image
									src={image[0]}
									width={160}
									height={160}
									className=" shadow-xl"
									alt="image"
								/>
								<p className="text-center font-semibold text-slate-500 pt-2 md:pr-3">
									{image[1]}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="justify-between ">
					<div className=" h-max w-full md:w-80   bg-gray-100 p-12">
						<p className=" font-bold">Nos produits</p>
						<ul className="list-disc">
							<li>
								<Link className=" no-underline  text-slate-500 hover:text-slate-700" href={"/products/Moquettedemarbre"}>
									Moquette de marbre
								</Link>
							</li>
							<li>
								<Link className=" no-underline  text-slate-500 hover:text-slate-700" href={"/products/SiliceEtMarbre"}>Slice & marbre</Link>
							</li>
						</ul>
					</div>
					<div className="mb-8  w-full md:w-80   bg-gray-100 p-4 mt-3">
						<h5 className="">Demandez votre avis</h5>
						<p className=" font-light">
							Un projet de terrasse, d’aménagement de piscine, une allée, un
							escalier ou des sols intérieurs à habiller ? CASM répond à votre
							demande : notre technicien vient à votre rencontre pour un
							diagnostic et une réponse personnalisée.
						</p>

						<div>
							<label
								htmlFor="first_name"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Nom
							</label>
							<input
								value={message.name}
								onChange={(e) =>
									setMessage({ ...message, name: e.target.value })
								}
								type="text"
								id="first_name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
								placeholder="John"
								required
							/>
						</div>
						<div className="mb-1">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Email addresse
							</label>
							<input
								value={message.email}
								onChange={(e) =>
									setMessage({ ...message, email: e.target.value })
								}
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
								placeholder="john.doe@company.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								numéro de téléphone
							</label>
							<input
								value={message.telephone}
								onChange={(e) =>
									setMessage({ ...message, telephone: e.target.value })
								}
								type="tel"
								id="phone"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
								placeholder="123-45-678"
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Votre avis
							</label>
							<textarea
								value={message.message}
								onChange={(e) =>
									setMessage({ ...message, message: e.target.value })
								}
								id="message"
								rows="4"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Write your thoughts here..."
							></textarea>
						</div>
						<div className=" flex justify-end">
							<button
								onClick={handleMessageSubmit}
								type="button"
								className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2  "
							>
								Envoyer
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
