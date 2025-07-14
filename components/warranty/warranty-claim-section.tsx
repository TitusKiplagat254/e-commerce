const WarrantyClaimSection = () => (
	<section className="py-16">
		<div className="container mx-auto px-4 md:px-6 max-w-4xl">
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				Making a Warranty Claim
			</h2>
			<ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
				<li>
					<strong>Contact Customer Service:</strong>
					<p>
						Reach out to our customer service at warranty@eldoshop.com or
						1-800-555-1234 with your order number and issue description.
					</p>
				</li>
				<li>
					<strong>Documentation:</strong>
					<p>
						Include clear photos/videos of the defect and proof of purchase.
					</p>
				</li>
				<li>
					<strong>Evaluation:</strong>
					<p>We may request more info or schedule a product inspection.</p>
				</li>
				<li>
					<strong>Resolution:</strong>
					<p>
						If approved, we’ll offer repair, replacement, or a suitable
						resolution.
					</p>
				</li>
			</ol>
			<p className="text-muted-foreground mt-4">
				We aim to process warranty claims within 5–7 business days upon
				receiving all required documentation.
			</p>
		</div>
	</section>
);

export default WarrantyClaimSection;
