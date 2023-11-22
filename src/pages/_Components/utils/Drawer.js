import React, { useState } from "react";
import Link from "next/link";

function Drawer() {
	const [drawerVisible, setDrawerVisible] = useState(false);

	const hideDrawer = () => {
		setDrawerVisible(false);
	};

	return (
		<>
			<div className="bg-black flex justify-between fixed top-0 w-screen z-10 ">
				<p1 className="text-white  px-4 pt-2">Entreprise</p1>
				<button
					className="text-white hover:text-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
					type="button"
					onClick={() => setDrawerVisible(!drawerVisible)}
					aria-controls="drawer-example"
				>
					☰
				</button>
			</div>

			<div
				id="drawer-example"
				className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
					drawerVisible ? "translate-x-0" : "-translate-x-full"
				} bg-white w-80 dark:bg-gray-800`}
				tabIndex="-1"
				aria-labelledby="drawer-label"
			>
				<h5
					id="drawer-label"
					className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
				>
					<svg
						className="w-4 h-4 me-2.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
					</svg>
					Menu
				</h5>
				<button
					onClick={hideDrawer}
					type="button"
					data-drawer-hide="drawer-example"
					aria-controls="drawer-example"
					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center "
				>
					<svg
						className="w-3 h-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
						/>
					</svg>
					<span className="sr-only">Close menu</span>
				</button>
				<div className="flex flex-col gap-3">
				<div>
						<Link
							className=" text-gray-800  no-underline	"
							onClick={hideDrawer}
							href="/"
						>
							Home
						</Link>
					</div>
					<div>
						Entreprise
						<div>
							<Link
								href={"/entreprise"}
								className="block px-4 py-2 text-gray-800 no-underline"
								onClick={hideDrawer}
							>
								Qui sommes nous ?
							</Link>
						</div>
						<div>
							<Link
								onClick={hideDrawer}
								href={"/entreprise/technique"}
								className="block px-4 py-2 text-gray-800   no-underline"
							>
								Nos techniques
							</Link>
						</div>
						<div>
							<Link
								onClick={hideDrawer}
								href={"/entreprise/savoirfaire"}
								className="block px-4 py-2 text-gray-800   no-underline"
							>
								Notre savoir-faire
							</Link>
						</div>
					</div>
					<div>
						<Link
							className=" text-gray-800  no-underline	"
							onClick={hideDrawer}
							href="/products"
						>
							Produits
						</Link>
					</div>
					<div>
						<Link
							className=" text-gray-800  no-underline	"
							onClick={hideDrawer}
							href="/realisations"
						>
							Realisations
						</Link>
					</div>
					<div>
						<Link
							className=" text-gray-800  no-underline	"
							onClick={hideDrawer}
							href="/contactus"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Drawer;
