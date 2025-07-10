import Image from "next/image";

import avatar from "@/public/avatar.png";

const Team = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
						Our Team
					</h2>
					<p className="text-muted-foreground">
						EldoShop is a collective of designers, curators, and makers united
						by a shared vision for mindful living through design.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
							<Image
								src={avatar}
								alt="Emma Chen - Founder & Creative Director"
								height={500}
								width={500}
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-lg font-medium">Emma Chen</h3>
						<p className="text-sm text-muted-foreground">
							Founder & Creative Director
						</p>
					</div>

					<div className="text-center">
						<div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
							<Image
								src={avatar}
								alt="David Park - Head of Product Design"
								height={500}
								width={500}
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-lg font-medium">David Park</h3>
						<p className="text-sm text-muted-foreground">
							Head of Product Design
						</p>
					</div>

					<div className="text-center">
						<div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
							<Image
								src={avatar}
								alt="Sara Jensen - Sustainability Lead"
								height={500}
								width={500}
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-lg font-medium">Sara Jensen</h3>
						<p className="text-sm text-muted-foreground">Sustainability Lead</p>
					</div>

					<div className="text-center">
						<div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
							<Image
								src={avatar}
								alt="Marcus Kim - Operations Director"
								height={500}
								width={500}
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-lg font-medium">Marcus Kim</h3>
						<p className="text-sm text-muted-foreground">Operations Director</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
