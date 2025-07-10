import Image from "next/image";

const Mission = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="order-2 lg:order-1">
						<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
							Our Mission
						</h2>
						<div className="space-y-6 text-muted-foreground">
							<p>
								At Aesthete, we believe that living spaces should be as
								intentional as they are beautiful. Our mission is to create and
								curate products that combine form and function, designed to
								bring harmony to modern living.
							</p>
							<p>
								We draw inspiration from the principles of minimalism — not as
								an austere aesthetic, but as a thoughtful approach to design
								that celebrates quality over quantity, purpose over excess, and
								timelessness over trends.
							</p>
							<p>
								{
									"Every item in our collection is chosen with intention, designed to endure both in construction and in style. We're committed to creating pieces that you'll cherish for years to come."
								}
							</p>
						</div>
					</div>
					<div className="order-1 lg:order-2">
						<Image
							src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop"
							alt="Modern minimalist interior with natural light"
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

export default Mission;
