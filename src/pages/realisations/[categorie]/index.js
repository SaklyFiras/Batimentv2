import Autres_Produits from "@/pages/_Components/Products/Autres_Produits";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import MyGallery from "@/pages/_Components/utils/Gallery";
import { url, config } from "../../Admin/index";
import Head from "next/head";

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
	const [showGallery, setShowGallery] = useState(false);
	const [clickedImage, setClickedImage] = useState(null);
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
		setUploadedImages([]);
		handleGetImages();
	}, [categorie]);

	const handleClickedImage = (image) => {
		setShowGallery(true);
		setClickedImage(image);
	};

	return (
		<div className="mt-20 h-fit min-h-screen">
			<Head>
				<title>Realisations | {categorie}</title>
			</Head>
			<div className="flex justify-center items-center  gap-6  min-h-[30rem] ">
				<div className="grid grid-cols-3  md:gap-4 gap-2 mx-2   mb-5 ">
					{showGallery && (
						<div className=" fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 md:h-max h-full w-screen z-50 bg-opacity-75 bg-black  ">
							<MyGallery clickedImage={clickedImage} categorie={categorie} />

							<button
								onClick={() => setShowGallery(false)}
								className="absolute top-10 right-5 text-white  p-2 rounded-full"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 "
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					)}
					{uploadedImages.map((image, index) => (
						<div key={index} className="md:h-64 h-32 w-auto flex ">
							<img
								onClick={() => handleClickedImage(image)}
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
			<div className="flex justify-between md:m-5 m-2 border-2  p-4 md:mx-5 mb-5 items-center shadow-md">
				<Link
					className=" text-black w-24 md:w-20 text-break text-center "
					href={left && left.url}
				>
					{left && left.name}
					<img
						src={"/images/Icons/arrow.png"}
						width={30}
						height={30}
						alt="arrow_left"
						className=" rotate-90 mx-auto hidden md:block hover:scale-105 transition-transform duration-300 ease-in-out "
					/>
				</Link>
				<Link
					className=" text-black w-8 md:w-20 text-break"
					href="/realisations"
				>
					<img
						src={"/images/Icons/menu.png"}
						width={30}
						height={30}
						alt="menu"
						className="shadow-xl hover:brightness-125 hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out"
					></img>
				</Link>
				<Link
					className=" text-black w-24 md:w-20 text-break text-center"
					href={right && right.url}
				>
					{right && right.name}
					<img
						src={"/images/Icons/arrow.png"}
						width={30}
						height={30}
						alt="arrow_left"
						className=" -rotate-90 mx-auto hidden md:block  hover:scale-105 transition-transform duration-300 ease-in-out "
					/>
				</Link>
			</div>
			<Autres_Produits current={categorie} />
		</div>
	);
}

export default Piscine;
