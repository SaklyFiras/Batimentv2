import Autres_Produits from "@/pages/_Components/Products/Autres_Produits";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

import { url, config } from "../../Admin/index";



const Links = [
	{
		name: "Interieurs",
		url: "/realisations/interieurs",
	},
	{
		name: "Collectivites",
		url: "/realisations/collectivites",
	},
	{
		name: "Motifs",
		url: "/realisations/motifs",
	},
	{
		name: "Allees",
		url: "/realisations/allees",
	},
	{
		name: "Escaliers",
		url: "/realisations/escaliers",
	},
	{
		name: "Piscines",
		url: "/realisations/piscines",
	},
];

function Piscine() {
	const [uploadedImages, setUploadedImages] = useState([]);
	const router = useRouter();
	const { categorie } = router.query;


	const findCategorieIndexInList = (categorie) => {
		return Links.findIndex((link) => link.name.toLowerCase() === categorie);
	};

	const FindRightAndLeft = (categorie) => {
		const categorieIndex = findCategorieIndexInList(categorie);

		if (categorieIndex === -1)
			return { right: Links[0], left: Links[Links.length - 1] };
		if (categorieIndex === 0)
			return {
				right: Links[categorieIndex + 1],
				left: Links[Links.length - 1],
			};
		if (categorieIndex === Links.length - 1)
			return { right: Links[0], left: Links[categorieIndex - 1] };
		const right = Links[categorieIndex + 1];
		const left = Links[categorieIndex - 1];
		return { right, left };
	};

	const { right, left } = FindRightAndLeft(categorie);

	const handleGetImages = async () => {
		try {
			
			const response = await axios.get(
				`${url}/images/${categorie}`,
				{},
				config
			);
			if (response.status === 200) {
				
				setUploadedImages(response.data.images[0].images);
			} else {
				console.error("Login failed"); // Handle login error
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
	};

	useEffect(() => {
		handleGetImages();
	}, [categorie]);

	return (
		<>
			<div className="flex justify-center items-center  gap-6 ">
				<div className="grid grid-cols-3  md:gap-4 gap-2 mx-2 mt-20  mb-5 ">
					{uploadedImages.map((image, index) => (
						<div key={index} className="md:h-64 h-32 w-auto flex ">
							<Image
								src={image.url}
								alt={image.title}
								width={400}
								height={350}
								className="rounded shadow-xl hover:brightness-125 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between md:m-5 m-2 border-2 p-4 items-center shadow-md">
				<Link
					className=" text-black w-12 md:w-20 text-break"
					href={left && left.url}
				>
					{left && left.name}
					<Image
						src={"/images/Icons/arrow.png"}
						width={30}
						height={30}
						alt="arrow_left"
						className=" rotate-90 mx-auto hidden md:block hover:scale-105 transition-transform duration-300 ease-in-out "
					/>
				</Link>
				<Link
					className=" text-black w-12 md:w-20 text-break"
					href="/realisations"
				>
					<Image
						src={"/images/Icons/menu.png"}
						width={30}
						height={30}
						alt="menu"
						className="shadow-xl hover:brightness-125 hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out"
					></Image>
				</Link>
				<Link className=" text-black" href={right && right.url}>
					{right && right.name}
					<Image
						src={"/images/Icons/arrow.png"}
						width={30}
						height={30}
						alt="arrow_left"
						className=" -rotate-90 mx-auto hidden md:block  hover:scale-105 transition-transform duration-300 ease-in-out "
					/>
				</Link>
			</div>
			<Autres_Produits current={categorie} />
		</>
	);
}

export default Piscine;
