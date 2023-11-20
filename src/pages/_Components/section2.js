import Image from "next/image";
import Link from "next/link";

function Section2() {
	const images = [
		"/images/IMG1.jpg",
		"/images/IMG2.jpg",
		"/images/IMG3.jpg",
		"/images/IMG4.jpg",
		"/images/IMG5.jpg",
		"/images/IMG3.jpg",
	];

	return (
		<div className="grid md:grid-flow-col     justify-between w-screen   my-16 mx-4 h-fit ">
			<div className=" my-auto text-center ">
				<h1 className="text-2xl mb-4 indent-4 ">Qui sommes nous ?</h1>
				<p className="text-centertext-gray-700  mb-12  indent-5 px-5  ">
					Fondée en 2015, CASM est une entreprise locale spécialisée dans les
					revêtements de sols et murs, intérieurs et extérieurs. À partir de
					pierres naturelles, de marbre, de quartz ou encore de silice, CASM
					fabrique des revêtements mélangés à des résines de haute qualité.
					L’entreprise, composée de professionnels passionnés, met à votre
					service ses savoir-faire pour créer votre projet, selon vos envies et
					votre budget.
				</p>

				<Link
					href="/entreprise"	
					type="button"
					className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
				>
					Learn more
				</Link>
			</div>
			<div className="grid grid-cols-2 mt-2 gap-2 place-items-center md:grid-cols-4  w-full overflow-hidden">
				{images.map((image, index) => (
					<div
						key={index}
						className="relative aspect-square h-40	 md:h-48 transform md:rotate-45  md:-skew-y-6  hover:brightness-125 hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out"
					>
						<Image
							src={image}
							fill={true}
							className="absolute w-full h-full object-cover border-1 border-black transform shadow-xl md:-rotate-45 md:skew-y-6 transition-transform duration-300 ease-in-out"
							alt="image"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Section2;
