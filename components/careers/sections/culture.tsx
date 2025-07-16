import Image from "next/image";

const CultureSection = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<Image
						src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
						alt="Team members collaborating"
						height={500}
						width={500}
						className="rounded-lg w-full max-h-[400px] shadow-lg object-cover"
					/>
					<div>
						<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
							Our Culture
						</h2>
						<div className="space-y-6 text-muted-foreground">
							<p>
								{
									"At EldoShop, we believe that great design emerges from collaborative, creative environments where diverse perspectives are valued and innovative thinking is encouraged."
								}
							</p>
							<p>
								{
									"We're a team of designers, makers, writers, and strategists who are passionate about creating products that enhance everyday living through thoughtful design and sustainable practices."
								}
							</p>
							<p>
								{
									"Our values of simplicity, quality, and sustainability aren't just reflected in our products—they inform how we work together, the decisions we make, and the company culture we're building."
								}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CultureSection;
