import Image from "next/image";
import { Inter } from "next/font/google";
import Slides from "./_Components/Carousel";
import Sections2 from "./_Components/section2";
import Scrollable from "./_Components/Scrollable";
import Technique from "./_Components/Technique";
import Couleurs from "./_Components/Couleurs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className=" container-fluid d-flex flex-column justify-content-center align-items-center overflow-hidden">
			<Head>
				<title>Accueil</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Slides />
			<Sections2 />
			<Scrollable />
			<Technique />
			<Couleurs />
		</main>
	);
}
