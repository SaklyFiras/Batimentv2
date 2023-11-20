import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const images = [
	["/images/entreprise/savoirFaire/1.jpeg"],
	["/images/entreprise/savoirFaire/3.jpg"],
	["/images/entreprise/savoirFaire/4.jpg"],
	["/images/entreprise/savoirFaire/2.jpeg"],
];

import bg from "../../../../public/images/IMG2.jpg";

function index() {
	return (
		<div className="h-fit mt-20 ">
			<Head>
				<title>Notre savoir-faire </title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="flex flex-row flex-wrap justify-center gap-20 place-content-center place-items-center ">
				<div className="mb-5 flex  justify-center   ">
					<div className="flex flex-col h-max w-full md:w-96     ">
						<Image
							alt="logo"
							className=" w-1/2 mx-auto"
							src={"/images/Icons/logo.png"}
							height={80}
							width={80}
						></Image>
						<div className=" text-center">
							<h2 className=" font-bold">Le marbre à l’état brut </h2>
							<p> Quand la nature s’invite sous vos pieds</p>
						</div>

						<hr className="w-50 mx-auto"></hr>
						<ul className="list-decimal">
							<li className=" font-extralight">
								Préparation du support en fonction de sa nature (carrelage,
								béton, pierre reconstituées, ou absence de support existant)
							</li>
							<li className=" font-extralight">
								Pose de profilés et/ou nez de marche en aluminium
							</li>
							<li className=" font-extralight">Primaire d’accroche</li>
							<li className=" font-extralight">
								Application frais sur frais du revêtement moquette de pierre
								coulé et taloché de façon artisanale.
							</li>
						</ul>
						<div
							className="relative w-full h-40 bg-cover bg-center mb-1 mt-3 "
							style={{
								backgroundImage: `url(${bg.src})`,
							}}
						>
							<div className="absolute inset-0 bg-black opacity-50"></div>
						</div>
						<ul className=" mt-3 w-full">
							<li className=" font-extralight indent-1">
								Nos experts préparent le revêtement adapté au support existant
								et apportent le plus grand soin aux finitions.
							</li>
							<li className=" font-extralight indent-1">
								Notre pose sans raccords offre une excellente résistance dans le
								temps : au gel et dégel, aux UV, aux chocs, au trafic.
							</li>
						</ul>
					</div>
				</div>
				<div className=" flex flex-col    ">
					<h4 className=" p-2 text-left px-auto-rows-min">
						Faites le choix d’un revêtement outdoor
						<br /> ou indoor haut de gamme,
						<br /> au design élégant et intemporel.
					</h4>
					<div className="flex flex-col  max-w-fit ordre-1 mb-2 ">
						<div className="grid grid-cols-2 md:gap-5 gap-3 mb-5 mx-3">
							{images.map((image, index) => (
								<div key={index} className="md:my-6 flex">
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
				</div>
				<div
					className="relative w-full h-80 bg-cover bg-center  "
					style={{
						backgroundImage: `url(${bg.src})`,
					}}
				>
					<div className="absolute inset-0 bg-black opacity-50"></div>
					<div className="absolute inset-0 flex items-center justify-center flex-col text-white ">
						<h2 className="md:text-4xl text-center font-bold mb-4 ">
							Interested in working with us?
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
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
