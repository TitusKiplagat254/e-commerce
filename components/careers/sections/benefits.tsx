import { benefits } from "@/lib/data/careers";

const BenefitsSection = () => {
	return (
		<section className="py-16 md:py-24 bg-secondary">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
						Benefits & Perks
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						We believe in taking care of our team with comprehensive benefits
						and a supportive work environment.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map(({ icon, title, items }) => (
						<div
							key={title}
							className="bg-background p-6 rounded-lg border border-border"
						>
							<div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
								{icon}
							</div>
							<h3 className="text-xl font-medium mb-3">{title}</h3>
							<ul className="space-y-2 text-muted-foreground">
								{items.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
