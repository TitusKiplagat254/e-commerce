import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "@/components/icons";

interface Props {
	title: string;
	description: string;
	image: string;
	alt: string;
}

const MediaCard = ({ title, description, image, alt }: Props) => {
	return (
		<div className="bg-background border border-border rounded-lg overflow-hidden flex flex-col">
			<Image
				src={image}
				alt={alt}
				height={500}
				width={500}
				className="w-full h-48 object-cover"
			/>
			<div className="p-6 flex flex-col flex-1">
				<div className="space-y-2 mb-3">
					<h3 className="font-medium">{title}</h3>
					<p className="text-muted-foreground text-sm">{description}</p>
				</div>
				<Link
					href="#"
					className="text-primary hover:underline text-sm flex items-center mt-auto"
				>
					Read Article <ExternalLink size={14} className="ml-1" />
				</Link>
			</div>
		</div>
	);
};

export default MediaCard;
