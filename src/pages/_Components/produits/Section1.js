
import MM1 from "../../../../public/images/produits/MM1.jpeg";
import MM2 from "../../../../public/images/produits/MM2.jpeg";
import Image from "next/image";
import Link from "next/link";

const listIcons1 = [
	"/images/PIC1.jpg",
	"/images/PIC2.jpg",
	"/images/PIC3.jpg",
	"/images/PIC4.jpg",
	"/images/PIC5.jpg",
	"/images/PIC6.jpg",
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
				<Image
					height={400}
					width={400}
					src={MM1.src}
					alt="Moquette de marbre"
					className="h-96 aspect-square mb-4 mx-auto rounded-3xl "
				/>

				<div className="flex    p-4 justify-around ">
					<div className="h-32 aspect-square flex flex-wrap justify-around gap-2 w-full my-5 ">
						{listIcons1.map((image, index) => (
							<Image
								key={index}
								src={image}
								width={80}
								height={90}
								className=""
								alt="image"
							/>
						))}
					</div>
				</div>
				<Link
					href={"/products/Moquettedemarbre"}
					className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded w-full mx-auto text-center "
				>
					Gamme de moquette de marbre
				</Link>
			</div>

			<div className=" flex flex-col">
				<h2 className="text-3xl font-bold mb-4 text-center">Silice & marbre</h2>
				<Image
					height={400}
					width={400}
					src={MM2.src}
					alt="Silice & marbre"
					className="h-96 aspect-square mb-4 rounded-3xl mx-auto"
				/>

				<div className="flex   p-4   justify-around ">
					<div className="h-32 aspect-square flex flex-wrap justify-around gap-2 w-full my-5 ">
						{listIcons1.map((image, index) => (
							<Image
								key={index}
								src={image}
								width={80}
								height={90}
								className=""
								alt="image"
							/>
						))}
					</div>
				</div>
				<Link
					href={"/products/SiliceEtMarbre"}
					className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded w-full mx-auto text-center"
				>
					Gamme slice & marbre
				</Link>
			</div>
		</div>
	);
}

export default Section1;
