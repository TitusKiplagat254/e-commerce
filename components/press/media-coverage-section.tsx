import { mediaCoverage } from "@/lib/data/press";
import MediaCard from "./media-card";

const MediaCoverage = () => {
	return (
		<section className="py-16 bg-secondary">
			<div className="container mx-auto px-4 md:px-6">
				<h2 className="text-2xl font-bold tracking-tight mb-8">
					Media Coverage
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{mediaCoverage.map(({ id, image, title, description, alt }) => (
						<MediaCard
							key={id}
							image={image}
							title={title}
							description={description}
							alt={alt}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default MediaCoverage;
