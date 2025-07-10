const Values = () => {
	return (
		<section className="py-16 md:py-24 bg-secondary">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
						Our Values
					</h2>
					<p className="text-muted-foreground">
						These principles guide every decision we make, from design to
						delivery.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-background p-6 rounded-lg border border-border">
						<div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<path d="m16 10-4 4-2-2"></path>
							</svg>
						</div>
						<h3 className="text-xl font-medium mb-3">Quality Craftsmanship</h3>
						<p className="text-muted-foreground">
							We partner with skilled artisans and ethical manufacturers who
							share our commitment to excellence and attention to detail.
						</p>
					</div>

					<div className="bg-background p-6 rounded-lg border border-border">
						<div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
								<path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
								<circle cx="12" cy="12" r="2"></circle>
								<path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
								<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
							</svg>
						</div>
						<h3 className="text-xl font-medium mb-3">Sustainable Design</h3>
						<p className="text-muted-foreground">
							We believe in responsible production and consumption, prioritizing
							materials and processes that minimize environmental impact.
						</p>
					</div>

					<div className="bg-background p-6 rounded-lg border border-border">
						<div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M17 6.1H3"></path>
								<path d="M21 12.1H3"></path>
								<path d="M15.1 18H3"></path>
							</svg>
						</div>
						<h3 className="text-xl font-medium mb-3">Simplicity & Function</h3>
						<p className="text-muted-foreground">
							We embrace clean lines and thoughtful design that solves problems
							without unnecessary complexity or ornamentation.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
