import Link from "next/link";
import Image from "next/image";

const Realisations = () => {
	const posts = [
		{
			image: "/images/realisations/collectivtees.jpg",
			title: "Collectivités",
			link: "/realisations/collectivites",
		},
		{
			image: "/images/realisations/motifs.jpg",
			title: "Motifs",
			link: "/realisations/motifs",
		},
		{
			image: "/images/realisations/allees.jpeg",
			title: "Allées",
			link: "/realisations/allees",
		},
		{
			image: "/images/realisations/escaliers.jpg",
			title: "Escaliers",
			link: "/realisations/escaliers",
		},
		{
			image: "/images/realisations/interieurs.jpeg",
			title: "Interieurs",
			link: "/realisations/interieurs",
		},
		{
			image: "/images/realisations/piscines.jpg",
			title: "Piscines",
			link: "/realisations/piscines",
		},
	];
	return (
		<div className="min-h-screen h-fit">
			<div className=" bg-slate-200 py-1">
				<h2 className="mb-4 text-4xl tracking-wide font-extrabold text-center text-gray-900 mt-20 ">
					Nos Realisations
				</h2>
				<p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
					Decouvrir nos realisations au cours des années
				</p>
			</div>
			<div className="flex flex-col flex-wrap mt-16    mb-5  gap-6 ">
				<div className="flex justify-around flex-wrap gap-2">
					{posts.map((post, index) => {
						return (
							<div
								key={index}
								className="   bg-white border border-gray-200 rounded-lg shadow md:w-fit w-full mx-2 "
							>
								<div className=" items-center d-flex place-content-center">
									<img
										className="rounded-t-lg h-32 object-cover  w-full"
										src={post.image}
										alt="post"
										width={180}
										height={120}
									/>
								</div>
								<hr className=" w-75 mx-auto" />
								<div className="px-5 py-2">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
										{post.title}
									</h5>

									<Link
										href={post.link}
										className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-slate-600 text-white hover:bg-slate-900 transform     hover:brightness-125  hover:scale-105 transition-transform duration-100 ease-in-out "
									>
										En savoir plus
										<svg
											className="w-3.5 h-3.5 ml-2"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Realisations;
