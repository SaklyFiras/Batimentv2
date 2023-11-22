import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import { url, config } from "@/pages/Admin/index";
import axios from "axios";

const MyGallery = ({ clickedImage, categorie }) => {
	const [images, setImages] = useState([]);
	

	

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

	return (
		<>
			<ImageGallery
				additionalClass="mt-[50%] md:mt-0 "
				
				items={images}
			/>
			;
		</>
	);
};



export default MyGallery;
