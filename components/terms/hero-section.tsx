const HeroSection = () => {
	return (
		<section className="bg-secondary">
			<div className="container mx-auto px-4 md:px-6 py-16">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">
						Terms & Conditions
					</h1>
					<p className="text-muted-foreground leading-relaxed animate-fade-in [animation-delay:200ms]">
						Please read these terms and conditions carefully before using our
						website or placing an order. By accessing or using our services, you
						agree to be bound by these terms.
					</p>
					<p className="text-sm text-muted-foreground mt-4 animate-fade-in [animation-delay:300ms]">
						Last Updated: May 15, 2023
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
