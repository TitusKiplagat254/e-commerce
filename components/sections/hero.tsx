import Link from "next/link";

import { ChevronRight } from "@/components/icons";
import { Button } from "@/components/ui";

const Hero = () => {
	return (
		<section className="bg-hero-image bg-cover bg-center w-full h-full">
			<div className="bg-black/60 backdrop-blur-none">
				<div className="container min-h-[80vh] mx-auto px-4 md:px-6 py-24 sm:py-32 md:py-40">
					<div className="max-w-2xl">
						<div>
							<span className="inline-block px-3 py-1 mb-5 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
								Minimalist Design Collection
							</span>
						</div>

						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
							Elevate Your Space With Timeless Design
						</h1>

						<p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
							Curated minimalist products that combine form and function for
							modern living. Discover pieces that inspire and endure.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								asChild
								className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
							>
								<Link href="/products">
									Shop Collection
									<ChevronRight size={16} className="ml-2" />
								</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/about">Our Story</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
