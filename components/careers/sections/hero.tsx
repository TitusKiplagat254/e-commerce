const HeroSection = () => {
	return (
		<section className="bg-secondary">
			<div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
						Join Our Team
					</h1>
					<p className="text-muted-foreground leading-relaxed">
						{
							"We're looking for passionate individuals who share our vision for thoughtful design and sustainable living."
						}
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
