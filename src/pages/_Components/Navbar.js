import Image from "next/image";
import Link from "next/link";
import  { useState, useEffect } from "react";
import Drawer from "./utils/Drawer";
import 'flowbite';

export default function Navbar() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	});

	// get width of height of the window

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setPrevScrollPos(currentScrollPos);
	};

	return (
		<>
			<nav
				className={` hidden md:min-w-max min-w-fit  fixed z-50 md:flex flex-row flex-nowrap  auto-rows-min  justify-evenly  p-3   -translate-x-1/2 ${
					prevScrollPos > 0
						? "bg-gray-700 border-gray-600  shadow-sm w-[calc(100%-55rem)] rounded-xl"
						: "bg-black border-black shadow-none  w-screen"
				}    -top-[5.5rem] left-1/2   transition delay-200 duration-300  ${
					visible ? "translate-y-20" : ""
				}  `}
			>
				<div className="flex flex-row flex-nowrap justify-center w-fit md:gap-11  ">
					<div className="relative transition delay-200 duration-300 px-2 rounded-xl p-2  text-indigo-500  ">
						<Link
							href={"/entreprise"}
							className="text-slate-300 no-underline  hover:text-slate-100 hover:opacity-60 focus:text-white"
							onMouseEnter={() => setDropdownVisible(true)}
						>
							Entreprise
						</Link>

						{isDropdownVisible && (
							<div
								onMouseLeave={() => setDropdownVisible(false)}
								className="absolute top-6 -left-12 mt-2 bg-white border rounded shadow-lg w-44"
							>
								<ul className="p-2">
									<li>
										<Link
											href={"/entreprise"}
											className="block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline"
										>
											Qui sommes nous ?
										</Link>
									</li>
									<li>
										<Link
											href={"/entreprise/technique"}
											className="block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline"
										>
											Nos techniques
										</Link>
									</li>
									<li>
										<Link
											href={"/entreprise/savoirfaire"}
											className="block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline"
										>
											Notre savoir faire
										</Link>
									</li>
								</ul>
							</div>
						)}
					</div>
					<Link
						href="/products"
						className={`text-slate-300 no-underline  hover:text-slate-100 hover:opacity-60 focus:text-white p-2  `}
					>
						Products
					</Link>

					<Link href="/">
						<img
							src={"/images/Icons/logo.png"}
							width={20}
							height={20}
							alt="logo"
							className="h-8 w-8 rounded-xl hidden md:block  aspect-square bg-white"
						/>
					</Link>

					<Link
						href="/contactus"
						className={`text-slate-300 no-underline  hover:text-slate-100 hover:opacity-60 focus:text-white p-2`}
					>
						Contact
					</Link>
					<Link
						href="/realisations"
						className={`text-slate-300 no-underline  hover:text-slate-100 hover:opacity-60 focus:text-white p-2 `}
					>
						Realisations
					</Link>
				</div>
			</nav>
			<nav className="md:hidden block">
				<Drawer />
			</nav>
		</>
	);
}
