import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import { url, config } from "@/pages/Admin/index";
import axios from "axios";
import images from "../../../../Server/models/images";

const MyGallery = ({ clickedImage, categorie }) => {
	const [images, setImages] = useState([]);

	const width = window.innerWidth;
	const position = width > 768 ? "left" : "bottom";

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const res = await axios.get(`${url}/images/${categorie}`, config);
				console.log(res);
				const images = res.data.images[0].images.map((image) => ({
					original: image.url,
					thumbnail: image.url,
				}));
				//set ClickedImage as first image
				const index = images.findIndex(
					(image) => image.original === clickedImage.url
				);
				const temp = images[0];
				images[0] = images[index];
				images[index] = temp;

				setImages(images);
			} catch (error) {
				console.log(error);
			}
		};
		fetchImages();
	}, [categorie]);

	const organiseImages = () => {
		const images = images.map((image) => ({
			original: image.url,
			thumbnail: image.url,
		}));
		//find index of clicked image and reorganise the array
		const index = images.findIndex(
			(image) => image.original === clickedImage.url
		);
		const temp = images[0];
		images[0] = images[index];
		images[index] = temp;

		return images;
	};

	return (
		<>
			<ImageGallery additionalClass="mt-[50%] md:mt-0" thumbnailPosition={position} items={images} />;
		</>
	);
};

export default MyGallery;
