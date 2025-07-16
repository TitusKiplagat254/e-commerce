const HeroSection = () => {
	return (
		<section className="bg-secondary">
			<div className="container mx-auto px-4 md:px-6 py-16">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
						Shipping & Returns
					</h1>
					<p className="text-muted-foreground leading-relaxed">
						{
							"We want your EldoShop experience to be seamless from purchase to delivery. Below you'll find detailed information about our shipping processes and return policies."
						}
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
