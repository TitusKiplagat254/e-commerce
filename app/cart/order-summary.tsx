import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";

const OrderSummary = () => {
	const subtotal = 100;
	const shipping = 100;
	const total = 100;

	return (
		<div>
			<div className="bg-card rounded-lg shadow-sm border border-border p-6 sticky top-24 space-y-6">
				<h2 className="text-lg font-semibold">Order Summary</h2>

				<div className="space-y-3">
					<div className="flex justify-between items-center">
						<span className="text-muted-foreground">Subtotal</span>
						<span>${subtotal.toFixed(2)}</span>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-muted-foreground">Shipping</span>
						<span>${shipping.toFixed(2)}</span>
					</div>
					<div className="border-t border-border pt-3 flex justify-between items-center font-semibold">
						<span>Total</span>
						<span>${total.toFixed(2)}</span>
					</div>
				</div>

				<div className="space-y-3">
					<Button className="w-full btn-hover" size="lg" asChild>
						<Link href="/checkout">
							<>
								Proceed to Checkout
								<ArrowRight size={16} className="ml-2" />
							</>
						</Link>
					</Button>
					<Button variant="outline" className="w-full btn-hover" asChild>
						<Link href="/products">Continue Shopping</Link>
					</Button>
				</div>

				<div className="pt-6 border-t border-border space-y-2">
					<h3 className="text-sm font-medium">We Accept</h3>
					<div className="flex gap-2">
						{["Visa", "MasterCard", "Amex", "PayPal"].map((text, index) => (
							<div
								key={index}
								className="bg-secondary rounded-md px-2 py-1 text-xs"
							>
								{text}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
