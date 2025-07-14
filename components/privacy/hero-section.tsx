const HeroSection = () => {
	return (
		<section className="bg-secondary">
			<div className="container mx-auto px-4 md:px-6 py-16">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
						Privacy Policy
					</h1>
					<p className="text-muted-foreground leading-relaxed">
						{
							"At EldoShop, we're committed to protecting your privacy and ensuring the security of your personal information. This policy explains our practices regarding the collection, use, and disclosure of your data."
						}
					</p>
					<p className="text-sm text-muted-foreground mt-4">
						Last Updated: May 15, 2023
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
