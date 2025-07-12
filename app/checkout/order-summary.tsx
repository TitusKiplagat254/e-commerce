import { CartItem } from "@/components/shared";
import { Separator } from "@/components/ui/separator";
import { cartItems } from "@/lib/data";

const OrderSummary = () => {
	const subtotal = 100;
	const shipping = 100;
	const total = 100;
	const tax = 30;

	return (
		<div className="lg:col-span-2">
			<div className="bg-card rounded-lg shadow-sm border border-border p-6 sticky top-24">
				<h2 className="text-lg font-semibold mb-4">Order Summary</h2>

				<div className="space-y-4 max-h-[320px] overflow-y-auto mb-6">
					{cartItems.map((item) => (
						<CartItem key={item.product.id} item={item} compact />
					))}
				</div>

				<Separator className="my-4" />

				<div className="space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Subtotal</span>
						<span>${subtotal.toFixed(2)}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Shipping</span>
						<span>${shipping.toFixed(2)}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Tax (7%)</span>
						<span>${tax.toFixed(2)}</span>
					</div>
					<Separator className="my-2" />
					<div className="flex justify-between font-medium">
						<span>Total</span>
						<span>${total.toFixed(2)}</span>
					</div>
				</div>

				<div className="mt-6 pt-4 border-t border-border">
					<p className="text-xs text-muted-foreground mb-2">We Accept</p>
					<div className="flex gap-2">
						{["Visa", "MasterCard", "Amex", "PayPal"].map((paymentMethod) => (
							<div
								key={paymentMethod}
								className="bg-secondary rounded-md px-2 py-1 text-xs"
							>
								{paymentMethod}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
