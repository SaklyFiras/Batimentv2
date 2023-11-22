import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Routes from "@/pages/_Components/admin/Routes";
import Head from "next/head";

const Interface = () => {
	const [addImageClicked, setAddImageClicked] = useState(false);

	const [images, setImages] = useState([]);
	const [imagesPreview, setImagesPreview] = useState([]);

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

	const deleteSelectedImages = () => {
		const remainingImages = images.filter((image) => !image.isSelected);
		setImages(remainingImages);
		setSelectedImages([]);
	};

	const toggleImageSelection = (index) => {
		const updatedImages = [...images];
		updatedImages[index].isSelected = !updatedImages[index].isSelected;

		setImages(updatedImages);

		if (updatedImages[index].isSelected) {
			setSelectedImages([...selectedImages, index]);
		} else {
			const newSelectedImages = selectedImages.filter(
				(selected) => selected !== index
			);
			setSelectedImages(newSelectedImages);
		}
	};

	const handleCancel = () => {
		setImages([]);
		setImagesPreview([]);
	};

	return (
		<div className="flex flex-row flex-wrap h-screen mt-5 justify-center md:justify-start">
			<Head>
				<title>Admin | Interface</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="md:w-1/6 p-4 border-r">
				<Routes />
			</div>
		</div>
	);
};

export default Interface;
