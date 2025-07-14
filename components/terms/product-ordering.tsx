const ProductOrdering = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				3. Product Information & Ordering
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					We strive to display our products and their features as accurately as
					possible. However:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						The colors you see will depend on your monitor and may not be
						accurate
					</li>
					<li>All dimensions and weights are approximate</li>
					<li>
						All features, content, and specifications are subject to change
					</li>
					<li>
						We do not warrant that product descriptions or other content are
						accurate, complete, or error-free
					</li>
				</ul>

				<h3 className="text-lg font-medium text-foreground mt-6">
					Availability & Pricing
				</h3>
				<p>
					All products are subject to availability. We reserve the right to:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Limit quantities of any product</li>
					<li>Discontinue any product at any time</li>
					<li>Change pricing or promotions</li>
					<li>Correct pricing errors that may inadvertently occur</li>
				</ul>
				<p className="mt-2">
					Prices and availability are subject to change without notice. The
					price charged for an item will be the price in effect at the time the
					order is placed.
				</p>

				<h3 className="text-lg font-medium text-foreground mt-6">
					Order Acceptance
				</h3>
				<p>
					Your receipt of an order confirmation does not constitute our
					acceptance of your order. We reserve the right to accept or decline
					your order for any reason until the order has been shipped. If we
					cancel an order after you have already been charged, we will issue a
					refund.
				</p>
			</div>
		</div>
	);
};

export default ProductOrdering;
