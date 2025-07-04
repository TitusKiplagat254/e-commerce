import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "@/components/icons";
import { Button } from "@/components/ui";

const DesignPhilosophy = () => {
	return (
		<section className="py-20 md:py-32">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<div className="space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">
							Our Design Philosophy
						</h2>
						<p className="text-muted-foreground">
							At Aesthete, we believe that less is more. Our products are
							designed with intention, focusing on quality materials, timeless
							aesthetics, and functional simplicity.
						</p>
						<p className="text-muted-foreground">
							Each piece is carefully selected to bring beauty and purpose to
							your space, creating environments that feel both elegant and
							effortlessly livable.
						</p>
						<Button className="mt-4" asChild>
							<Link href="/about">
								Our Story
								<ChevronRight size={16} className="ml-2" />
							</Link>
						</Button>
					</div>

					{/* Image */}
					<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
						<Image
							src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
							alt="Minimalist interior"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DesignPhilosophy;
