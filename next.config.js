/** @type {import('next').NextConfig} */
const nextConfig = {
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: "/api/v2/:path*",
	// 			destination: `${process.env.URL}/api/v2/:path*`,
	// 		},
	// 	];
	// },

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "**",
			},
		],
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
