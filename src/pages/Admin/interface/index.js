import  { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Routes from "@/pages/_Components/admin/Routes";

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
		<div className="flex h-screen mt-5">
			{/* Left column: Accordion */}
			<div className="w-1/6 p-4 border-r">
				<div>
					<Routes />
					
				</div>
			</div>

			{/* Right column: Box with images and buttons */}
			<div className="w-5/6 p-4">
				<div className="mb-4">
					{selectedImages.length > 0 && (
						<button
							className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2"
							onClick={deleteSelectedImages}
						>
							Delete Selected
						</button>
					)}
				</div>
				<div className="flex flex-col border-2 p-5">
					<input
						className="mb-2 text-blue-500 bg-gray-200 rounded-lg h-min w-min mx-auto"
						type="file"
						name="imageFile"
						multiple
						onChange={handleImageFileChange}
						value=""
					/>

					<div className="flex justify-center gap-2">
						{imagesPreview.map((img) => (
							<Image
								className="border-black border-2"
								src={img}
								key={img}
								alt="Images Preview"
								width={150}
								height={150}
							/>
						))}
					</div>
					<div className="flex  justify-end gap-2">
						<button className="py-3 px-5 text-sm font-medium text-center float-right  text-white rounded-sm bg-indigo-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
							Upload
						</button>
						<button
							onClick={handleCancel}
							className="py-3 px-5 text-sm font-medium text-center float-right  text-white rounded-sm bg-red-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Interface;
