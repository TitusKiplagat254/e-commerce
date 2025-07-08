import Link from "next/link";

import { ShoppingBag, Star } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import ProductImage from "./product-image";

interface ProductCardProps {
	product: Product;
	featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
	return (
		<div>
			<Link
				href={`/products/${product.id}`}
				className={cn("group rounded-lg", featured ? "h-full" : "")}
			>
				{/* Product image with skeleton */}
				<div className="relative overflow-hidden rounded-lg bg-secondary aspect-square">
					<ProductImage src={product.image} alt={product.name} />
					{/* Quick add button overlay */}
					<div
						className={cn(
							"absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
						)}
					>
						<Button
							className="w-full shadow-lg hover:shadow-xl"
							variant="secondary"
						>
							<ShoppingBag size={16} className="mr-2" />
							Quick Add
						</Button>
					</div>

					{/* Featured badge */}
					{product.featured && (
						<div className="absolute top-2 left-2">
							<span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
								Featured
							</span>
						</div>
					)}
				</div>

				{/* Product information */}
				<div className="flex flex-col gap-1.5 p-3">
					<div className="space-y-1">
						<h3 className="font-medium text-base leading-tight group-hover:text-primary transition-colors">
							{product.name}
						</h3>
						<div className="flex items-center gap-2">
							<div className="flex items-center">
								<Star className="h-3.5 w-3.5 fill-primary text-primary" />
								<span className="ml-1 text-sm font-medium">
									{product.rating}
								</span>
							</div>
							<span className="text-xs text-muted-foreground">
								({product.reviews} reviews)
							</span>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<p className="font-semibold">
							${product.price.toLocaleString("en-IN")}
						</p>
						{product.stock <= 5 && product.stock > 0 && (
							<p className="text-xs text-orange-500 font-medium">
								Only {product.stock} left
							</p>
						)}
						{product.stock === 0 && (
							<p className="text-xs text-destructive font-medium">
								Out of stock
							</p>
						)}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
