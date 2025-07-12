import { Trash2 } from "@/components/icons";
import { CartItem } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemProps } from "@/lib/data";

const CartItems = ({ cartItems }: { cartItems: CartItemProps[] }) => {
	return (
		<div className="lg:col-span-2">
			<div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-4">
				<div className="flex justify-between items-center">
					<h2 className="text-lg font-semibold">
						Cart Items ({cartItems.length})
					</h2>
					<Button
						variant="outline"
						size="sm"
						className="text-muted-foreground hover:text-destructive"
					>
						<Trash2 className="mr-2 h-4 w-4" />
						Clear Cart
					</Button>
				</div>

				<div className="divide-y divide-border">
					{cartItems.map((item) => (
						<CartItem key={item.product.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CartItems;
