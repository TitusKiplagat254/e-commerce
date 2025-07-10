const Hero = () => {
	return (
		<section className="bg-secondary">
			<div className="container mx-auto px-4 md:px-6 py-16">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
						Get In Touch
					</h1>
					<p className="text-muted-foreground leading-relaxed">
						{
							"We'd love to hear from you. Whether you have a question about our products, need support, or are interested in collaborating, our team is here to help."
						}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
