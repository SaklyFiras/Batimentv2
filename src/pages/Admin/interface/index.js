import { useEffect, useState } from "react";

import Routes from "@/pages/_Components/admin/Routes";
import Head from "next/head";
import axios from "axios";
import { url, config } from "../index";
import { useRouter } from "next/router";

const Interface = () => {
	const router = useRouter();

	const isAuth = async () => {
		try {
			const res = await axios.get(`${url}/checkAuth`);
			if (res.data.success) {
				
			} else {
				router.push("/Admin");
			}
		} catch (error) {
			router.push("/Admin");
			console.log(error);
		}
	};

	useEffect(() => {
		 isAuth();
	}, []);

	return (
		<div className="flex flex-row flex-wrap h-screen mt-5 justify-center md:justify-start">
			<Head>
				<title>Admin | Interface</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="md:w-1/6 p-4 md:border-r">
				<Routes />
			</div>
		</div>
	);
};

export default Interface;
