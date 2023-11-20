import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import bg from "../../../public/images/IMG2.jpg";

const images = [
	["/images/entreprise/quiSommesNous/1.jpeg"],
	["/images/entreprise/quiSommesNous/2.jpeg"],
	["/images/entreprise/quiSommesNous/3.jpeg"],
	["/images/entreprise/quiSommesNous/4.jpeg"],
	["/images/entreprise/quiSommesNous/5.jpeg"],
	["/images/entreprise/quiSommesNous/6.jpeg"],
	["/images/entreprise/quiSommesNous/7.jpeg"],
	["/images/entreprise/quiSommesNous/8.jpeg"],
];

function index() {
	return (
		<div className="h-fit mt-20 ">
			<Head>
				<title>L’entreprise</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="flex flex-row flex-wrap justify-center gap-20 items-center ">
				<div className="mb-5  ">
					<div className="flex flex-col h-max w-full md:w-96     ">
						<Image
							alt="logo"
							className=" w-1/2 mx-auto"
							src={"/images/Icons/logo.png"}
							height={80}
							width={80}
						></Image>
						<div className=" text-center">
							<h2 className=" font-bold">Nom de entrepirse </h2>
							<p> Spécialiste des revêtements sans raccord</p>
						</div>

						<hr className=" w-50 mx-auto"></hr>
						<div
							className="relative w-full h-40 bg-cover bg-center mb-1 mt-3 "
							style={{
								backgroundImage: `url(${bg.src})`,
							}}
						>
							<div className="absolute inset-0 bg-black opacity-50"></div>
						</div>
						<p className=" font-extralight mx-2">
							<span className=" inline-block">
								Fondée en 2015, CASM est une entreprise locale spécialisée dans
								les revêtements de sols et murs, intérieurs et extérieurs.
							</span>{" "}
							<span className=" inline-block">
								À partir de pierres naturelles, de marbre, de quartz ou encore
								de silice, CASM fabrique des revêtements mélangés à des résines
								de haute qualité. L’entreprise, composée de professionnels
								passionnés, met à votre service ses savoir-faire pour créer
								votre projet, selon vos envies et votre budget.
							</span>{" "}
							<span className=" inline-block">
								La diversité des matières naturelles que nous travaillons vous
								offre une large gamme de couleurs et d’effets décoratifs
								personnalisables. La qualité de nos résines mariée à ces
								minéraux signe des réalisations uniques qui embelliront vos
								espaces de façon durable.
							</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col flex-grow-1 max-w-fit ordre-1 mx-2">
					<div className="grid grid-cols-3 md:gap-5 gap-2 mx-1 my-2">
						{images.map((image, index) => (
							<div  	key={index} className="">
								<Image
								
									src={image[0]}
									width={160}
									height={160}
									className=" shadow-xl"
									alt="image"
								/>
								
							</div>
						))}
					</div>
				</div>
				<div
					className="relative w-full h-80 bg-cover bg-center  "
					style={{
						backgroundImage: `url(${bg.src})`,
					}}
				>
					<div className="absolute inset-0 bg-black opacity-50"></div>
					<div className="absolute inset-0 flex items-center justify-center flex-col text-white  ">
						<h2 className="md:text-4xl text-center font-bold mb-4 ">
						Interresé par nos services ?
						</h2>
						<p className="md:text-md text-sm md:w-1/2 text-center mb-6">
							Un projet de terrasse, d’aménagement de piscine, une allée, un
							escalier ou des sols intérieurs à habiller ? CASM répond à votre
							demande : notre technicien vient à votre rencontre pour un
							diagnostic et une réponse personnalisée.
						</p>
						<Link
							href="/contactus"
							className="bg-slate-500 hover:bg-slate-700 text-white md:font-medium font-serif py-2 px-4 rounded no-underline"
						>
							Contactez-nous
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
