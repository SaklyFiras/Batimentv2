import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./_Components/Navbar";
import Footer from "./_Components/Footer";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
