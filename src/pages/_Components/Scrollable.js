import Image from "next/image";

const Scrollable = () => {
	return (
		<div className="flex flex-col h-fit  mb-4 w-screen    bg-gray-100 mx-0 px-0 ">
			<div className="flex items-center justify-center  ">
				<h1 className="text-4xl font-medium text-gray-800 py-4">
					Nos qualités
				</h1>
			</div>
			<div className="flex flex-wrap  justify-around pb-5 gap-6  ">
				<div className="relative">
					<Image
						className="h-28 rounded-full "
						width={125}
						height={125}
						src={"/images/PIC1.jpg"}
						alt="Placeholder"
					/>
					<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
						<p className="text-sm font-light">antidérapant</p>
					</div>
				</div>

				<div className="relative">
					<Image
						className="h-28 rounded-full "
						width={125}
						height={125}
						src={"/images/PIC2.jpg"}
						alt="Placeholder"
					/>
					<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
						<p className="text-sm font-light">Carrosable</p>
					</div>
				</div>

				<div className="relative">
					<Image
						className="h-28 rounded-full "
						width={125}
						height={125}
						src={"/images/PIC3.jpg"}
						alt="Placeholder"
					/>
					<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
						<p className="text-sm font-light">Drainant</p>
					</div>
				</div>

				<div className="relative">
					<Image
						className="h-28 rounded-full "
						width={125}
						height={125}
						src={"/images/PIC4.jpg"}
						alt="Placeholder"
					/>
					<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
						<p className="text-sm font-light">Durable</p>
					</div>
				</div>

				<div className="relative">
					<Image
						className="h-28 rounded-full "
						width={125}
						height={125}
						src={"/images/PIC5.jpg"}
						alt="Placeholder"
					/>
					<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
						<p className="text-sm font-light">{"Facile d'entretien"}</p>
					</div>
				</div>

				<div className="relative">
					<Image
						className=" h-28 rounded-full "
						width={125}
						height={125}
						src={"/images/PIC6.jpg"}
						alt="Placeholder"
					/>
					<div className="absolute bottom-[-7vh] text-gray-500 left-0 right-0 p-2   text-center">
						<p className="text-sm font-light">Resistant</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scrollable;
