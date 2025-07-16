import Link from "next/link";

import { CartItems, OrderSummary } from "@/components/cart";
import { ArrowRight, ShoppingBag } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cartItems } from "@/lib/data";

function Cart() {
	return (
		<div className="container mx-auto px-4 md:px-6 py-8">
			<h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
				Your Cart
			</h1>

			{cartItems.length > 0 ? (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<CartItems cartItems={cartItems} />
					<OrderSummary />
				</div>
			) : (
				<div className="text-center py-16 max-w-md mx-auto">
					<div className="bg-secondary inline-flex rounded-full p-4 mb-4">
						<ShoppingBag size={24} />
					</div>
					<h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
					<p className="text-muted-foreground mb-6">
						{"Looks like you haven't added anything to your cart yet."}
					</p>
					<Button className="hover-lift" asChild>
						<Link href="/products">
							Start Shopping
							<ArrowRight size={16} className="ml-2" />
						</Link>
					</Button>
				</div>
			)}
		</div>
	);
}

export default Cart;
