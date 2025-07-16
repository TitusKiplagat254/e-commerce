const PackagingSection = () => {
	const packagingItems = [
		{
			title: "Sustainable Packaging",
			description:
				"100% recyclable or biodegradable packaging materials\nMinimalist packaging design to reduce waste\nSoy-based inks for all printed materials\nNo single-use plastics",
		},
		{
			title: "Carbon-Conscious Shipping",
			description:
				"Carbon offset program for all shipments\nConsolidated shipping to reduce trips\nPartnership with eco-friendly carriers\nLocal warehousing to minimize transit distances",
		},
	];

	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-center">
						{"Packaging & Shipping"}
					</h2>
					<p className="text-muted-foreground text-center mb-12">
						{
							"We're committed to minimizing the environmental footprint of our packaging and shipping processes."
						}
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{packagingItems.map((item, index) => (
							<div key={index} className="p-6 border border-border rounded-lg">
								<h3 className="text-xl font-medium mb-4">{item.title}</h3>
								<ul className="space-y-2 text-muted-foreground">
									{item.description.split("\n").map((line, i) => (
										<li key={i}>• {line}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PackagingSection;
