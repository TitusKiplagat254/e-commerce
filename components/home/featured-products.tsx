import Link from "next/link";

import { ChevronRight } from "@/components/icons";
import { ProductCard } from "@/components/product";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data";

const FeaturedProducts = () => {
	const featuredProducts = getFeaturedProducts();

	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
					<div className="mb-4 md:mb-0">
						<h2 className="text-3xl font-bold tracking-tight">
							Featured Collection
						</h2>
						<p className="mt-2 text-muted-foreground">
							Discover our most popular minimalist designs
						</p>
					</div>
					<div className="transition-all duration-700 delay-200 transform">
						<Button variant="ghost" asChild>
							<Link href="/products" className="group">
								View All Products
								<ChevronRight
									size={16}
									className="ml-1 transition-transform group-hover:translate-x-0.5"
								/>
							</Link>
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{featuredProducts.map((product) => (
						<div
							key={product.id}
							className="transition-all duration-700 transform"
						>
							<ProductCard product={product} featured />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
