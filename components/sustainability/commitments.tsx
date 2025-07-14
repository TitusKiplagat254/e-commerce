const Commitments = () => {
	const commitments = [
		{
			title: "2025",
			description:
				"100% plastic-free packaging\n50% reduction in carbon emissions\n75% renewable energy in all facilities",
		},
		{
			title: "2027",
			description:
				"Full product lifecycle management program\nComprehensive repair and refurbishment service\nWater-neutral manufacturing operations",
		},
		{
			title: "2030",
			description:
				"Carbon-neutral across all operations\nZero waste to landfill from all facilities\n100% renewable energy throughout supply chain",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-secondary">
			<div className="container mx-auto px-4 md:px-6">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-center">
					{"Our Sustainability Commitment"}
				</h2>
				<div className="max-w-3xl mx-auto">
					<p className="text-muted-foreground text-center mb-12">
						{
							"We recognize that sustainability is a journey of continuous improvement. Here are our goals for the future:"
						}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{commitments.map((item, index) => (
						<div
							key={index}
							className="p-6 border border-border rounded-lg bg-white"
						>
							<h3 className="text-xl font-medium mb-4">{item.title}</h3>
							<ul className="space-y-2 text-muted-foreground">
								{item.description.split("\n").map((line, i) => (
									<li key={i}>
										<b className="text-black">✓</b> {line}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Commitments;
