import Image from "next/image";

const Materials = () => {
	const materialsItems = [
		{
			title: "Renewable Resources",
			description:
				"We use FSC-certified wood, organic cotton, and other materials from responsibly managed sources.",
		},
		{
			title: "Recycled Materials",
			description:
				"Many of our products incorporate recycled metals, glass, and plastics, reducing waste and resource consumption.",
		},
		{
			title: "Non-Toxic Finishes",
			description:
				"We use water-based, low-VOC finishes and dyes to ensure indoor air quality and worker safety.",
		},
		{
			title: "Quality Over Quantity",
			description:
				"By creating durable products designed to last, we reduce the need for frequent replacements and minimize waste.",
		},
	];

	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="order-2 lg:order-1 animate-slide-up">
						<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
							{"Responsible Materials"}
						</h2>
						<div className="space-y-6 text-muted-foreground">
							<p>
								{
									"We carefully select materials that minimize environmental impact without compromising on quality or longevity. This means prioritizing:"
								}
							</p>
							<ul className="space-y-3">
								{materialsItems.map((item, index) => (
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
					<div className="order-1 lg:order-2">
						<Image
							src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1000&auto=format&fit=crop"
							alt="Sustainable materials samples"
							height={500}
							width={500}
							className="rounded-lg w-full h-auto shadow-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Materials;
