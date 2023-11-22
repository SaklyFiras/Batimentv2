import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { url, config } from "../../index";
import Routes from "@/pages/_Components/admin/Routes";

const Interface = () => {
	const router = useRouter();
	const { categorie } = router.query;
	const [loading, setLoading] = useState(false);

	const [addImageClicked, setAddImageClicked] = useState(false);

	const [images, setImages] = useState([]);
	const [imagesPreview, setImagesPreview] = useState([]);
	const [uploadedImages, setUploadedImages] = useState([]);

	useEffect(() => {
		setUploadedImages([]);
		handleGetImages();
		setSelectedImages([]);
	}, [categorie]);

	const handleImageFileChange = (e) => {
		const files = Array.from(e.target.files);

		setImagesPreview([]);
		setImages([]);

		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setImagesPreview((oldArray) => [...oldArray, reader.result]);
					setImages((oldArray) => [...oldArray, reader.result]);
				}
			};

			reader.readAsDataURL(file);
		});
	};

	const [selectedImages, setSelectedImages] = useState([]);

	const handleCancel = () => {
		setImages([]);
		setImagesPreview([]);
	};
	const handleUpload = async () => {
		setLoading(true);
		try {
			const formData = new FormData();
			formData.append("page", "Realisations");
			formData.append("categorie", categorie);
			images.forEach((image) => {
				formData.append("images", image);
			});
			const response = await axios.post(`${url}/image`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				withCredentials: true,
			});
			if (response.status === 201) {
				console.log(response.data.success);
				setImages([]);
				setImagesPreview([]);
			} else {
				console.error("Upload failed"); // Handle login error
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
		setLoading(false);
	};
	console.log(selectedImages);

	const handleGetImages = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${url}/images/${categorie}`, config);
			if (response.status === 200) {
				console.log(response.data);
				setUploadedImages(response.data.images[0].images);
				console.log(uploadedImages);
			} else {
				console.error("Login failed"); // Handle login error
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
		setLoading(false);
	};

	const handleDeleteImages = async () => {
		setLoading(true);
		try {
			const images = selectedImages.map((image) => {
				return { public_id: image.public_id };
			});

			const response = await axios.put(
				`${url}/image/${categorie}`,
				{ images },
				config
			);
			if (response.status === 200) {
				console.log(response.data.success);
				setUploadedImages(
					uploadedImages.filter((image) => !selectedImages.includes(image))
				);
			} else {
				console.error("Upload failed"); // Handle login error
			}
		} catch (error) {
			console.error("An error occurred during login:", error); // Log the error
			// Handle login error - Show message to the user, redirect, etc.
		}
		setLoading(false);
	};

	const handleSelectImage = (index) => (e) => {
		//set selected image to the image with index with no repition
		const selectedIndex = selectedImages.indexOf(uploadedImages[index]);
		let newSelectedImages = [];

		if (selectedIndex === -1) {
			newSelectedImages = newSelectedImages.concat(
				selectedImages,
				uploadedImages[index]
			);
		}

		//if selected image is already in the state remove it

		if (selectedIndex >= 0) {
			newSelectedImages = selectedImages.filter(
				(image) => image !== uploadedImages[index]
			);
		}

		setSelectedImages(newSelectedImages);
	};

	return (
		<div className="flex flex-row flex-wrap h-screen mt-5">
			<div className="flex justify-center mx-auto md:w-1/6 p-4 border-r">
				<Routes />
			</div>

			{/* Right column: Box with images and buttons */}
			<div className="md:w-5/6 p-4">
				<div className="flex flex-col border-2 p-5">
					<input
						className="mb-2 text-blue-500 bg-gray-200 rounded-lg h-min  mx-auto w-40"
						type="file"
						name="imageFile"
						multiple
						onChange={handleImageFileChange}
						value=""
					/>

					<div className="flex justify-center gap-2">
						{imagesPreview.map((img, index) => (
							<div key={img} className="">
								<img
									className="border-black border-2 "
									src={img}
									alt="Images Preview"
									width={150}
									height={150}
								/>
							</div>
						))}
					</div>
					<div className="flex flex-wrap  justify-end gap-2">
						<button
							disabled={loading}
							onClick={handleUpload}
							className="py-3 px-5 text-sm font-medium text-center float-right  text-white rounded-sm bg-indigo-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
						>
							Upload
						</button>
						<button
							onClick={handleCancel}
							className="py-3 px-5 text-sm font-medium text-center float-right  text-white rounded-sm bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
						>
							Cancel
						</button>
						{selectedImages.length > 0 && (
							<button
								disabled={loading}
								onClick={handleDeleteImages}
								className="py-3 px-5 text-sm font-medium text-center float-right  text-white rounded-sm bg-red-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
							>
								Delete
							</button>
						)}
					</div>
				</div>
				<div className="flex flex-wrap border-2 mt-1">
					{uploadedImages.length > 0 &&
						uploadedImages.map((image, index) => {
							return (
								<div key={image.url} className="w-1/4 p-4 relative">
									<input
										onClick={handleSelectImage(index)}
										type="checkbox"
										className=" absolute "
									/>
									<img
										className="border-black border-2"
										src={image.url}
										alt="Images Preview"
										width={150}
										height={150}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Interface;
