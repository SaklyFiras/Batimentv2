import Section1 from "../_Components/produits/Section1";
import Section2 from "../_Components/produits/Section2";
import Head from "next/head";

const images = [
	{
		imageUrl: "/images/moquette/aubergine.jpg",
		title: "Slide 1",
		description: "Description for the first image.",
	},
	{
		imageUrl: "/images/moquette/beige.jpg",
		title: "Slide 2",
		description: "Description for the second image.",
	},
	{
		imageUrl: "/images/moquette/blanc.jpg",
		title: "Slide 3",
		description: "Description for the third image.",
	},
	{
		imageUrl: "/images/moquette/gris-anthracite.jpg",
		title: "Slide 4",
		description: "Description for the fourth image.",
	},
];

const ImageSlider = ({}) => {
	return (
		<>
			<Head>
				<title>Produits</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="bg-slate-200 py-1">
				<h2 className="mb-4 text-4xl  font-extrabold text-center text-gray-900 mt-20 tracking-wide  ">
					Nos Produits
				</h2>
				<p className="mb-8  tracking-wide font-light text-center text-gray-500  sm:text-xl">
					Produits de qualité
				</p>
			</div>
			<Section1 />
			<Section2 />
		</>
	);
};

export default ImageSlider;
