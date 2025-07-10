import Link from "next/link";

import { Minus, Plus, ShoppingBag, Star } from "@/components/icons";
import { ProductImage } from "@/components/product";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";

const ProductDetails = ({ product }: { product: Product }) => {
	const {
		image,
		name,
		featured,
		rating,
		reviews,
		description,
		category,
		price,
		stock,
	} = product;

	const quantity = 0;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
			<div className="relative bg-secondary rounded-lg overflow-hidden">
				{/* Product Image */}
				<ProductImage src={image} alt={name} />

				{/* Featured badge */}
				{featured && (
					<div className="absolute top-4 left-4">
						<span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
							Featured
						</span>
					</div>
				)}
			</div>

			<div className="flex flex-col">
				<h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
					{name}
				</h1>

				{/* Rating */}
				<div className="flex items-center gap-2 mb-4">
					<div className="flex items-center">
						<Star className="h-4 w-4 fill-primary text-primary" />
						<span className="ml-1 font-medium">{rating}</span>
					</div>
					<span className="text-sm text-muted-foreground">
						({reviews} reviews)
					</span>
				</div>

				{/* Price */}
				<p className="text-2xl font-semibold mb-4">
					${price.toLocaleString("en-IN")}
				</p>

				{/* Description */}
				<div className="prose prose-sm mb-6 text-muted-foreground">
					<p>{description}</p>
				</div>

				{/* Category */}
				<div className="mb-6">
					<p className="text-sm text-muted-foreground">
						Category:{" "}
						<Link
							href={`/products?category=${category.toLowerCase()}`}
							className="text-primary hover:underline"
						>
							{category}
						</Link>
					</p>
				</div>
				{/* StockStatus */}
				<div className="mb-6">
					{stock > 0 ? (
						<p className="text-sm">
							<span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
							In Stock
							{product.stock <= 5 && (
								<span className="text-orange-500 ml-1">
									(Only {stock} left)
								</span>
							)}
						</p>
					) : (
						<p className="text-sm text-destructive">
							<span className="inline-block w-2 h-2 bg-destructive rounded-full mr-2"></span>
							Out of Stock
						</p>
					)}
				</div>
				{/* Quantity & addToCart */}
				{product.stock > 0 && (
					<div className="mt-2 space-y-4">
						<div className="flex items-center">
							<span className="mr-4 text-sm font-medium">Quantity</span>
							<div className="flex items-center">
								<Button
									variant="outline"
									size="icon"
									className="h-8 w-8 rounded-md"
								>
									<Minus className="h-3 w-3" />
									<span className="sr-only">Decrease quantity</span>
								</Button>
								<span className="mx-3 text-sm font-medium w-8 text-center">
									{quantity}
								</span>
								<Button
									variant="outline"
									size="icon"
									className="h-8 w-8 rounded-md"
								>
									<Plus size={12} />
									<span className="sr-only">Increase quantity</span>
								</Button>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="flex-1 btn-hover">
								<ShoppingBag size={16} className="mr-2" />
								Add to Cart
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="flex-1 btn-hover"
								asChild
							>
								<Link href="/checkout">Buy Now</Link>
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
