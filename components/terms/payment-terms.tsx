const PaymentTerms = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				4. Payment Terms
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					We accept various payment methods as indicated on the Site. By
					providing payment information, you represent and warrant that you have
					the legal right to use the payment method.
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						All prices are displayed in US Dollars unless otherwise specified
					</li>
					<li>Payment for orders is required at the time of purchase</li>
					<li>
						Taxes will be calculated based on your shipping address and the tax
						rates in effect at the time of shipment
					</li>
					<li>
						International customers are responsible for all duties, customs
						fees, and taxes
					</li>
				</ul>
				<p className="mt-4">
					You agree that we may charge your payment method for any orders placed
					through your account. We use third-party payment processors and do not
					store complete payment information on our servers.
				</p>
			</div>
		</div>
	);
};

export default PaymentTerms;
