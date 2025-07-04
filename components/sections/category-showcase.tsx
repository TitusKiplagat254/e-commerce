import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "@/components/icons";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const categories = [
	{
		name: "Lighting",
		href: "/products?category=lighting",
		image:
			"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop",
		delay: "0ms",
	},
	{
		name: "Kitchen",
		href: "/products?category=kitchen",
		image:
			"https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1000&auto=format&fit=crop",
		delay: "200ms",
	},
	{
		name: "Home",
		href: "/products?category=home",
		image:
			"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000&auto=format&fit=crop",
		delay: "400ms",
	},
];

const CategoryShowcase = () => {
	return (
		<section className="py-16 bg-secondary">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight">
						Browse Categories
					</h2>
					<p className="mt-2 text-muted-foreground">
						Explore our collections by category
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{categories.map((category) => (
						<div
							key={category.name}
							className={cn(
								"relative overflow-hidden rounded-lg aspect-square group",
								`[animation-delay:${category.delay}]`,
							)}
						>
							<Image
								src={category.image}
								alt={category.name}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
								<h3 className="text-xl font-medium text-white mb-2">
									{category.name}
								</h3>
								<Button variant="outline" size="sm" className="w-fit" asChild>
									<Link href={category.href}>
										Shop Now
										<ChevronRight size={16} className="ml-1" />
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryShowcase;
