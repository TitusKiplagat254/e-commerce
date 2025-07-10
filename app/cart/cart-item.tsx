import Image from "next/image";
import Link from "next/link";

import { Minus, Plus, Trash } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemProps } from "@/lib/data";
import { cn } from "@/lib/utils";

const CartItem = ({ item }: { item: CartItemProps }) => {
	const isLoading = false;
	const compact = false;
	const subtotal = 256;
	return (
		<div
			className={cn(
				"flex items-start gap-4 py-4",
				!compact && "border-b border-border",
				compact && "pr-2",
			)}
		>
			{/* Product image */}
			<div className="relative bg-secondary rounded-md overflow-hidden">
				{isLoading && (
					<div
						className={cn(
							"absolute inset-0 bg-muted animate-pulse",
							compact ? "w-16 h-16" : "w-24 h-24",
						)}
					/>
				)}
				<Link href={`/products/${item.product.id}`}>
					<Image
						src={item.product.image}
						alt={item.product.name}
						height={500}
						width={500}
						className={cn(
							"object-cover transition-opacity duration-300 hover:opacity-90",
							compact ? "w-16 h-16" : "w-24 h-24",
							isLoading ? "opacity-0" : "opacity-100",
						)}
					/>
				</Link>
			</div>

			{/* Product details */}
			<div className="flex-1 min-w-0">
				<div className="flex flex-col">
					<Link
						href={`/products/${item.product.id}`}
						className="font-medium hover:text-primary transition-colors line-clamp-1"
					>
						{item.product.name}
					</Link>
					{!compact && (
						<p className="text-sm text-muted-foreground mt-1 line-clamp-1">
							{item.product.category}
						</p>
					)}

					<div
						className={cn(
							"flex items-center mt-2",
							compact
								? "flex-col items-start space-y-2"
								: "justify-between flex-wrap gap-2",
						)}
					>
						{/* Price */}
						<div className="flex items-baseline gap-2">
							<span className="font-medium">
								${item.product.price.toFixed(2)}
							</span>
							{!compact && item.quantity > 1 && (
								<span className="text-sm text-muted-foreground">
									Subtotal: ${subtotal.toFixed(2)}
								</span>
							)}
						</div>

						{/* Quantity controls */}
						<div className="flex items-center">
							{!compact && (
								<Button
									variant="outline"
									size="icon"
									className="h-8 w-8 rounded-md"
									disabled={item.quantity <= 1}
								>
									<Minus className="h-3 w-3" />
									<span className="sr-only">Decrease quantity</span>
								</Button>
							)}
							<span
								className={cn(
									"mx-2 select-none",
									compact ? "text-sm" : "text-sm font-medium w-8 text-center",
								)}
							>
								{compact ? `Qty: ${item.quantity}` : item.quantity}
							</span>
							{!compact && (
								<Button
									variant="outline"
									size="icon"
									className="h-8 w-8 rounded-md"
									disabled={item.quantity >= item.product.stock}
								>
									<Plus className="h-3 w-3" />
									<span className="sr-only">Increase quantity</span>
								</Button>
							)}

							{/* Remove button */}
							{!compact && (
								<Button
									variant="outline"
									size="icon"
									className="h-8 w-8 ml-2 text-muted-foreground hover:text-destructive"
								>
									<Trash className="h-4 w-4" />
									<span className="sr-only">Remove</span>
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
