import Image from "next/image";
import Link from "next/link";

function Technique() {
	return (
		<div className="bg-slate-800   text-white p-8 w-screen h-fit mb-4">
			<div className="flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 ">
					<h1 className="text-3xl md:px-5 indent-10">Nos techniques</h1>
					<p className=" md:px-5 pt-4 font-light indent-2 ">
						
							"La moquette de pierre, aussi appelée moquette de marbre ou tapis de pierre, est un revêtement de sol qui convient aussi bien en intérieur qu'en extérieur, pour les particuliers comme les professionnels, Propriétaires de restaurant, hoteliers, gérants de camping, propriétaires de concessions automobiles, piscinistes... vous pouvez opter pour un revêtement de sol professionnel en marbre résiné afin d'habiller vos locaux. Nous accompagnons les professionnels pour réaliser un projet de A à Z afin d'habiller un espace intérieur ou extérieur"
						
					</p>
					<Link href={"/entreprise/technique"} className=" text-white hover:text-white border mx-5 border-gray-800 hover:bg-gray-900 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
						Learn more
					</Link>
				</div>
				<div className="md:w-1/2  p-4">
					<Image
						src={"/images/Technique.jpg"}
						width={300}
						height={500}
						alt="Image"
						className=" mx-auto opacity-75"
					/>
				</div>
			</div>
			<div className=" flex flex-row flex-wrap gap-2 justify-evenly  items-end mt-5 pb-5">
				<p className=" text-slate-300 font-light">ALLEES DE GARAGE</p>
				<p className="text-slate-300 font-light">MUR INTERIEURS</p>
				<p className="text-slate-300 font-light">PLAGES DE PISCINES</p>
				<p className="text-slate-300 font-light">ALLEES PIETONNES</p>
				<p className="text-slate-300 font-light">TERRASSES</p>
				<p className="text-slate-300 font-light">SOL INTERIEURS</p>
				<p className="text-slate-300 font-light">ESCALIERS</p>
				<p className=" text-slate-300 font-light">FACADES</p>
			</div>
		</div>
	);
}

export default Technique;
