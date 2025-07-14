import { ArrowDownToLine } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { pressKitResources } from "@/lib/data/press";
import PressKitCard from "./press-kit-card";

export const PressKit = () => (
	<section className="py-16">
		<div className="container mx-auto px-4 md:px-6">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
					Press Kit
				</h2>
				<p className="text-muted-foreground text-center mb-8">
					Download our press kit for brand assets, high-resolution product
					images, founder bios, and fact sheets.
				</p>
				<div className="bg-secondary rounded-lg p-8 text-center">
					<h3 className="text-xl font-medium mb-4">EldoShop Press Kit</h3>
					<p className="text-muted-foreground mb-6">
						Includes brand guidelines, logos, product images, and company
						information.
					</p>
					<Button size="lg" className="flex items-center gap-2 mx-auto">
						<ArrowDownToLine size={18} />
						Download Press Kit (ZIP, 42MB)
					</Button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
					{pressKitResources.map(({ id, title, description, cta }) => (
						<PressKitCard
							key={id}
							title={title}
							description={description}
							cta={cta}
						/>
					))}
				</div>
			</div>
		</div>
	</section>
);

export default PressKit;
