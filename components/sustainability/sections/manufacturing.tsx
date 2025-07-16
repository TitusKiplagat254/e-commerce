import Image from "next/image";

const ManufacturingSection = () => {
	const manufacturingItems = [
		{
			title: "Energy Efficiency",
			description:
				"Our production facilities utilize energy-efficient equipment and renewable energy sources where possible.",
		},
		{
			title: "Water Conservation",
			description:
				"We implement water recycling systems and low-water manufacturing processes.",
		},
		{
			title: "Waste Reduction",
			description:
				"We minimize waste through efficient cutting patterns, recycling production scraps, and using biodegradable packaging.",
		},
		{
			title: "Fair Labor",
			description:
				"All our partners adhere to strict labor standards, providing safe working conditions and fair compensation.",
		},
	];

	return (
		<section className="py-16 md:py-24 bg-secondary">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<Image
						src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1000&auto=format&fit=crop"
						alt="Craftsperson working in a sustainable workshop"
						height={500}
						width={500}
						className="rounded-lg w-full h-auto shadow-lg"
					/>
					<div>
						<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
							{"Ethical Manufacturing"}
						</h2>
						<div className="space-y-6 text-muted-foreground">
							<p>
								We partner with manufacturers and artisans who share our
								commitment to environmental responsibility and fair labor
								practices. Our production processes prioritize:
							</p>
							<ul className="space-y-3">
								{manufacturingItems.map((item, index) => (
									<li key={index} className="flex items-start">
										<span className="bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
											{index + 1}
										</span>
										<div>
											<h3 className="font-medium">{item.title}</h3>
											<p className="text-sm mt-1">{item.description}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ManufacturingSection;
