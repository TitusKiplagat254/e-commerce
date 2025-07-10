import { ProductCard } from "@/components/product";
import { getFeaturedProducts } from "@/lib/data";

const RelatedProducts = () => {
	const featuredProducts = getFeaturedProducts();
	const relatedProducts = featuredProducts.slice(0, 4);
	return (
		<>
			{relatedProducts.length > 0 && (
				<section className="mt-16">
					<h2 className="text-2xl font-bold tracking-tight mb-6">
						You Might Also Like
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{relatedProducts.map((product) => (
							<div key={product.id}>
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default RelatedProducts;
