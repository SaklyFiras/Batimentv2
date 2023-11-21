import Image from "next/image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

const Slides = () => {
	return (
		<Carousel className=" h-fit w-screen border-1 border-black">
			<Carousel.Item className="h-[30rem] w-full">
				<Image
					className="d-block w-100 h-full"
					src={"/images/Vitrine.jpg"}
					width={300}
					height={300}
					alt="First slide"
				/>
				<Carousel.Caption className="carousel-caption mb-5">
					<p className=" text-indigo-900   text-3xl  font-medium pb-4 ">
						Découvrez notre vitrine et trouvez l essentiel que vous cherchez.
					</p>{" "}
					<div className="flex justify-evenly gap-2">
						<Link
							href={"/products"}
							type="button"
							className="text-white  bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg md:text-sm text-xs  px-5 py-2.5  inline-flex items-center no-underline  "
						>
							Nos produits
						</Link>
						<Link
							href={"/contactus"}
							type="button"
							className="relative text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg md:text-sm text-xs  px-5 py-2.5  inline-flex items-center no-underline  "
						>
							Contactez-nous
							<svg
								className="w-3.5 h-3.5 ml-2 absolute bottom-5 right-2 md:bottom-3 md:right-3"
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
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item className="h-[30rem] w-full">
				<Image
					className="d-block w-100 h-full"
					src={"/images/Vitrine.jpg"}
					width={300}
					height={300}
					alt="First slide"
				/>
				<Carousel.Caption className="carousel-caption mb-5">
					<p className=" text-indigo-900   text-3xl  font-medium pb-4 ">
						Découvrez notre vitrine et trouvez l essentiel que vous cherchez.
					</p>{" "}
					<div className="flex justify-evenly gap-2">
						<Link
							href={"/products"}
							type="button"
							className="text-white  bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg md:text-sm text-xs  px-5 py-2.5  inline-flex items-center no-underline  "
						>
							Nos produits
						</Link>
						<Link
							href={"/contactus"}
							type="button"
							className="relative text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg md:text-sm text-xs  px-5 py-2.5  inline-flex items-center no-underline  "
						>
							Contactez-nous
							<svg
								className="w-3.5 h-3.5 ml-2 absolute bottom-5 right-2 md:bottom-3 md:right-3"
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
				</Carousel.Caption>
			</Carousel.Item>

			{/* Add more Carousel.Items for additional slides as needed */}
		</Carousel>
	);
};

export default Slides;
