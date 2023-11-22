import MM1 from "../../../../public/images/produits/MM1.jpeg";
import MM2 from "../../../../public/images/produits/MM2.jpeg";
import Image from "next/image";
import Link from "next/link";

const listIcons1 = [
	["/images/PIC1.jpg","antidérapant"],
	["/images/PIC2.jpg","Carrosable"],
	["/images/PIC3.jpg","Drainant"],
	["/images/PIC4.jpg","Durable"],
	["/images/PIC5.jpg","Facile d'entretien"],
	["/images/PIC6.jpg","Resistant"],
];
const listIcons2 = [
	"/images/PIC1.jpg",
	"/images/PIC2.jpg",
	"/images/PIC3.jpg",
	"/images/PIC4.jpg",
	"/images/PIC5.jpg",
	"/images/PIC6.jpg",
];

function Section1() {
	return (
		<div className="flex justify-evenly space-y-20 md:space-y-0       flex-wrap    items-center  mt-20 mb-20">
			{/* First Column */}
			<div className=" flex flex-col ">
				<h2 className="text-3xl font-bold mb-4 text-center">
					Moquette de marbre
				</h2>
				<img
					height={400}
					width={400}
					src={MM1.src}
					alt="Moquette de marbre"
					className="h-96 aspect-square mb-4  mx-auto rounded-3xl "
				/>


				<div className=" grid  grid-row-3 grid-cols-3 self-center gap-3 my-2      ">
					{listIcons1.map((image, index) => (
						<div key={index} className="relative">
							<img
								src={image[0]}
								width={80}
								height={90}
								className=""
								alt="image"
							/>
							<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
								<p className="text-sm font-light">{image[1]}</p>
							</div>
						</div>
					))}
				</div>
				<Link
					href={"/products/Moquettedemarbre"}
					className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded w-full mx-auto text-center no-underline "
				>
					Gamme de moquette de marbre
				</Link>
			</div>

			<div className=" flex flex-col">
				<h2 className="text-3xl font-bold mb-4 text-center ">
					Silice & marbre
				</h2>
				<img
					height={400}
					width={400}
					src={MM2.src}
					alt="Silice & marbre"
					className="h-96 aspect-square mb-4 rounded-3xl mx-auto"
				/>

				<div className="grid  grid-row-3 grid-cols-3 self-center gap-3 my-2      ">
				{listIcons1.map((image, index) => (
						<div key={index} className="relative">
							<img
								src={image[0]}
								width={80}
								height={90}
								className=""
								alt="image"
							/>
							<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
								<p className="text-sm font-light">{image[1]}</p>
							</div>
						</div>
					))}
				</div>
				<Link
					href={"/products/SiliceEtMarbre"}
					className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded w-full mx-auto text-center no-underline"
				>
					Gamme slice & marbre
				</Link>
			</div>
		</div>
	);
}

export default Section1;
