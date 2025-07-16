const WarrantyAdditionalInfoSection = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-6">
				<h2 className="text-2xl font-bold tracking-tight mb-6">
					Additional Information
				</h2>
				<div className="text-muted-foreground space-y-6">
					<div className="rounded-lg border border-border p-6">
						<h3 className="font-medium mb-3">Shipping for Warranty Claims</h3>
						<p>
							If a return is required, we’ll provide shipping instructions.
							EldoShop covers return shipping for approved claims. Customers
							bear costs for non-covered items.
						</p>
					</div>
					<div className="rounded-lg border border-border p-6">
						<h3 className="font-medium mb-3">Repaired or Replaced Items</h3>
						<p>
							Repairs or replacements are covered for the remainder of the
							original warranty or 90 days from service, whichever is longer.
						</p>
					</div>
					<div className="rounded-lg border border-border p-6">
						<h3 className="font-medium mb-3">Refund Policy</h3>
						<p>
							{
								"If we can't repair or replace, a refund or store credit may be offered. Refunds may be prorated based on product age and condition."
							}
						</p>
					</div>
					<div className="rounded-lg border border-border p-6">
						<h3 className="font-medium mb-3">Limitation of Liability</h3>
						<p>
							Our liability is limited to repair, replacement, or refund. We’re
							not liable for indirect or consequential damages.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WarrantyAdditionalInfoSection;
