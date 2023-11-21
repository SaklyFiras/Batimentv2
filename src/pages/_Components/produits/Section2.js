import Link from "next/link";
import bg from "../../../../public//images/IMG2.jpg";

function Section2() {
	return (
		<div
			className="relative w-full h-80 bg-cover bg-center mb-1 "
			style={{
				backgroundImage: `url(${bg.src})`,
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="absolute inset-0 flex items-center justify-center flex-col text-white ">
				<h2 className="md:text-4xl text-center font-bold mb-4 ">
			        Interressé par nos produits ?
				</h2>
				<p className="md:text-md text-sm md:w-1/2 text-center mb-6">
					Un projet de terrasse, d’aménagement de piscine, une allée, un
					escalier ou des sols intérieurs à habiller ? CASM répond à votre
					demande : notre technicien vient à votre rencontre pour un diagnostic
					et une réponse personnalisée.
				</p>
				<Link
					href="/contactus"
					className="bg-slate-500 hover:bg-slate-700 text-white md:font-medium font-serif py-2 px-4 rounded no-underline"
				>
					Contact Us
				</Link>
			</div>
		</div>
	);
}

export default Section2;
