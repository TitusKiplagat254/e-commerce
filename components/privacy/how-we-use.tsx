const HowWeUse = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				2. How We Use Your Information
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					We use the information we collect for various purposes, including:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Processing and fulfilling your orders</li>
					<li>Managing your account and providing customer support</li>
					<li>Personalizing your shopping experience</li>
					<li>
						{
							"Communicating with you about orders, products, and promotional offers (if you've opted in)"
						}
					</li>
					<li>Improving our website, products, and services</li>
					<li>Analyzing usage patterns and trends</li>
					<li>Preventing fraudulent transactions and maintaining security</li>
					<li>Complying with legal obligations</li>
				</ul>
				<p className="mt-4">
					We process your personal data based on one or more of the following
					legal grounds:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						Performance of a contract (when processing is necessary to fulfill
						an order)
					</li>
					<li>Your consent (such as for marketing communications)</li>
					<li>
						Legitimate interests (such as for security and fraud prevention)
					</li>
					<li>Legal obligation (when required by law)</li>
				</ul>
			</div>
		</div>
	);
};

export default HowWeUse;
