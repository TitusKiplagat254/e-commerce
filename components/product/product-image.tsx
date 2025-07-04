"use client";

import Image from "next/image";
import { useState } from "react";

const fallbackImage = "/no-image-icon.png";

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<Image
			src={imgSrc}
			alt={alt}
			width={320}
			height={320}
			onError={() => setImgSrc(fallbackImage)}
			className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
		/>
	);
};

export default ProductImage;
