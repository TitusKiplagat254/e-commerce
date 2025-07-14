import Link from "next/link";

const ShippingDelivery = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				5. Shipping & Delivery
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					We ship to the addresses provided by customers at the time of
					purchase. Please ensure your shipping information is accurate.
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Shipping times are estimates and not guaranteed</li>
					<li>We are not responsible for delays outside our control</li>
					<li>
						Risk of loss and title for items purchased pass to you upon delivery
						of the items to the carrier
					</li>
					<li>
						You are responsible for inspecting packages upon receipt for any
						damage
					</li>
				</ul>
				<p className="mt-4">
					For more detailed information about our shipping policies, delivery
					timeframes, and shipping rates, please visit our{" "}
					<Link href="/shipping" className="text-primary hover:underline">
						Shipping & Returns
					</Link>{" "}
					page.
				</p>
			</div>
		</div>
	);
};

export default ShippingDelivery;
