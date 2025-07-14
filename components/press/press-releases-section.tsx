import { Button } from "@/components/ui/button";
import { pressReleases } from "@/lib/data/press";
import PressReleaseCard from "./press-release-card";

const PressReleases = () => (
	<section className="py-16">
		<div className="container mx-auto px-4 md:px-6">
			<h2 className="text-2xl font-bold tracking-tight mb-8">
				Recent Press Releases
			</h2>
			<div className="space-y-6">
				{pressReleases.slice(0, 3).map(({ id, date, title, description }) => (
					<div key={id}>
						<PressReleaseCard
							title={title}
							date={date}
							description={description}
						/>
					</div>
				))}
			</div>
			<div className="mt-8 text-center">
				<Button variant="outline">View All Press Releases</Button>
			</div>
		</div>
	</section>
);

export default PressReleases;
