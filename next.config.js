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
		domains: ["res.cloudinary.com"],
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
