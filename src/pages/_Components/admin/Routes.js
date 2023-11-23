import  { useState } from "react";
import Link from "next/link";
function Routes() {
	const [accordionItems, setAccordionItems] = useState([
		{
			id: 1,
			title: "Realisations",
			content: [
				"Allees",
				"Collectivités",
				"Escaliers",
				"Interieurs",
				"Motifs",
				"Piscines",
			],
		},

		// Add more items as needed
	]);

	return (
		<div className=" flex justify-center  ">
			{accordionItems.map((item) => (
				<div key={item.id}>
					<Link
						href="/Admin/interface"
						replace={true}
						className="mb-2 text-blue-500"
					>
						{item.title}
					</Link>
					<div className="flex flex-col indent-2">
						<Link className="text-slate-600 focus:text-gray-900 no-underline focus:underline" href={"/Admin/interface/allees"}>
							{item.content[0]}
						</Link>
						<Link
							className="text-slate-600 focus:text-gray-900 no-underline focus:underline"
							href={"/Admin/interface/collectivites"}
						>
							{item.content[1]}
						</Link>
						<Link className="text-slate-600 focus:text-gray-900 no-underline focus:underline" href={"/Admin/interface/escaliers"}>
							{item.content[2]}
						</Link>
						<Link className="text-slate-600 focus:text-gray-900 no-underline focus:underline" href={"/Admin/interface/interieurs"}>
							{item.content[3]}
						</Link>
						<Link className="text-slate-600 focus:text-gray-900 no-underline focus:underline" href={"/Admin/interface/motifs"}>
							{item.content[4]}
						</Link>
						<Link className="text-slate-600 focus:text-gray-900 no-underline focus:underline" href={"/Admin/interface/piscines"}>
							{item.content[5]}
						</Link>
					</div>
					<Link href="/Admin/interface/messages" className="mb-2 text-blue-500">
						Messages
					</Link>
				</div>
			))}
		</div>
	);
}

export default Routes;
