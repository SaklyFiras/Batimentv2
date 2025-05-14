import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <p className="text-gray-400">© 2023 Batiment Project</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                        <Link href={"/privacyAndPolicy"} className="text-gray-400 hover:text-white mx-2">Privacy Policy</Link>
                        <Link href={"/TermsofService"} className="text-gray-400 hover:text-white mx-2">Terms of Service</Link>
                    </div>
                    <div className="w-full md:w-1/3 text-center md:text-right">
                        <p className="text-gray-400">Made by Firas</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
