import Image from "next/image";
import Link from "next/link";
function Autres_Produits({ current }) {
	const images = [
		{
			imageUrl: "/images/realisations/collectivtees.jpg",
			title: "Collectivites",
			Link: "/realisations/collectivites",
		},
		{
			imageUrl: "/images/realisations/motifs.jpg",
			title: "Motifs",
			Link: "/realisations/motifs",
		},
		{
			imageUrl: "/images/realisations/allees.jpeg",
			title: "Allées",
			Link: "/realisations/allees",
		},
		{
			imageUrl: "/images/realisations/escaliers.jpg",
			title: "Escaliers",
			Link: "/realisations/escaliers",
		},
		{
			imageUrl: "/images/realisations/interieurs.jpeg",
			title: "Interieurs",
			Link: "/realisations/interieurs",
		},
		{
			imageUrl: "/images/realisations/piscines.jpg",
			title: "Piscines",
			Link: "/realisations/piscines",
		},
	];
	return (
		<div className="mx-5">
			<h2 className=" indent-10">Autres</h2>
			<div className="flex flex-wrap justify-center my-10 border-2  mx-auto shadow-sm ">
				{images.map((image, index) => (
					current !== image.title.toLowerCase() && (
					<Link
						href={image.Link}
						key={index}
						className="h-auto w-auto flex flex-col p-8 "
					>
						<Image
							src={image.imageUrl}
							alt={image.title}
							width={150}
							height={150}
							className="rounded h-32 shadow-xl hover:brightness-125 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
						/>
						<h6 className="text-center mt-3 text-black">{image.title}</h6>
					</Link>
				)))}
			</div>
		</div>
	);
}

export default Autres_Produits;
