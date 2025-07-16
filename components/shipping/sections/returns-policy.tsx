const ReturnsPolicySection = () => {
	return (
		<section className="py-16 bg-secondary">
			<div className="container mx-auto px-4 md:px-6 max-w-4xl">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
					Returns Policy
				</h2>

				<div className="space-y-12">
					<div>
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							General Return Policy
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
							<li>30-day window from delivery for unused items.</li>
							<li>Must be in original condition with packaging/tags.</li>
							<li>Some items are final sale or non-returnable.</li>
							<li>Customer pays return shipping unless due to error.</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							How to Return an Item
						</h3>
						<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
							<li>Login and select the order to return.</li>
							<li>Follow return steps or contact support.</li>
							<li>Receive return auth and shipping label.</li>
							<li>Pack item in original packaging with all parts.</li>
							<li>Attach label and drop at the carrier location.</li>
							<li>Track the return with proof of shipment.</li>
						</ol>
					</div>

					<div>
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							Refunds & Exchanges
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
							<li>Returns inspected upon receipt.</li>
							<li>Refunds issued to original payment within 3-5 days.</li>
							<li>Bank processing may take 5-10 days.</li>
							<li>Shipping charges are non-refundable unless our error.</li>
							<li>Exchanges available if in stock.</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							Damaged or Defective Items
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
							<li>Contact us within 48 hours with photos.</li>
							<li>Replacements or refunds will be arranged.</li>
							<li>Return may not be needed for some items.</li>
							<li>Refer to warranty policy for post-use damage.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReturnsPolicySection;
