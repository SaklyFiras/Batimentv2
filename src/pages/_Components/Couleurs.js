import Image from "next/image";
import Link from "next/link";
function Couleurs() {
	return (
		<div className="bg-gray-100  p-8 w-screen h-fit mb-4">
			<div className=" flex">
				<div className="my-auto md:w-4/12  px-4 d-flex flex-col z-10">
					<h1 className="text-3xl font-medium px-5">Couleurs</h1>
					<p className="text-left md:px-5 pt-4 font-light">
						Lorem losum dolor sit amet consectetur adipiscing ent. Phasellus
						aliquet puris et arc tincidunt tempus Dus ultricies, form sit amet
						handent sodales or deior vulputate matus
					</p>
					<Link href={"/products"} className="md:w-1/2 bg-slate-700 text-white hover:text-white border mx-5 border-gray-800 hover:bg-gray-900 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
						Découvrir
					</Link>
				</div>
				<div className=" w-8/12  ">
					<div className="md:grid md:grid-cols-3 md:grid-rows-5 md:gap-4 md:w-[32rem] md:rotate-45 md:h-[52rem] hidden  md:-z-10  mx-auto ">
						<div className="relative rotate-45 col-start-3 row-start-1">
							<Image
								src="/images/moquette/aubergine.jpg"
								alt="Image 1"
								width={200}
								height={200}
								className="  object-cover  aspect-square  -rotate-45 "
							/>
							<p className="absolute w-1/2 opacity-75 bg-slate-100 -rotate-90 bottom-[29%] left-10 right-0 text-center text-black font-serif ">
								Aubergine
							</p>
						</div>
						<div className="relative rotate-45 col-start-2 row-start-2">
							<Image
								src="/images/moquette/beige.jpg"
								alt="Image 1"
								width={200}
								height={200}
								className="  object-cover  aspect-square  -rotate-45 "
							/>
							<p className="absolute w-1/2 opacity-75 bg-slate-100 -rotate-90 bottom-[29%] left-10 right-0 text-center text-black font-serif">
								Beige
							</p>
						</div>
						<div className="relative rotate-45 col-start-3 row-start-2">
							<Image
								src="/images/moquette/blanc.jpg"
								alt="Image 1"
								width={200}
								height={200}
								className="  object-cover  aspect-square  -rotate-45 "
							/>
							<p className="absolute w-1/2 opacity-75 bg-slate-100 -rotate-90 bottom-[29%] left-10 right-0 text-center text-black font-serif">
								Blanc
							</p>
						</div>
						<div className="relative rotate-45 col-start-1 row-start-3">
							<Image
								src="/images/moquette/gris-anthracite.jpg"
								alt="Image 1"
								width={200}
								height={200}
								className="  object-cover  aspect-square  -rotate-45 "
							/>
							<p className="absolute w-1/2 opacity-75 bg-slate-100 -rotate-90 bottom-9 left-10 right-0 text-center text-black font-serif">
								Gris anthracite
							</p>
						</div>
						<div className="relative rotate-45 col-start-2 row-start-3">
							<Image
								src="/images/moquette/gris-clair.jpg"
								alt="Image 1"
								width={200}
								height={200}
								className="  object-cover  aspect-square  -rotate-45 "
							/>
							<p className="absolute w-1/2 opacity-75 bg-slate-100 -rotate-90 bottom-[29%] left-10 right-0 text-center text-black font-serif">
								Gris clair
							</p>
						</div>
						<div className="relative rotate-45 col-start-1 row-start-4">
							<Image
								src="/images/moquette/jaune.jpg"
								alt="Image 1"
								width={200}
								height={200}
								className="  object-cover  aspect-square  -rotate-45 "
							/>
							<p className="absolute w-1/2 opacity-75 bg-slate-100 -rotate-90 bottom-[29%] left-10 right-0 text-center text-black font-serif">
								Jaune
							</p>
						</div>
						<div className="relative rotate-45 col-start-2 row-start-4 ">
							<div className="-rotate-45 aspect-square bg-slate-800">
								<p className="absolute -rotate-45 bottom-8 left-0 right-0 text-center text-white font-light text-sm">
									Palette de couleurs très variée teintées naturellement dans la
									masse
								</p>
							</div>
						</div>
						<div className="relative rotate-45 col-start-1 row-start-5">
							<Image
								src="/images/moquette/saumon.jpg"
								alt="Image 1"
								width={200}
								height={200}
								className="  object-cover  aspect-square  -rotate-45 "
							/>
							<p className="absolute w-1/2 opacity-75 bg-slate-100 -rotate-90 bottom-[29%] left-10 right-0 text-center text-black font-serif">
								Saumon
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Couleurs;
