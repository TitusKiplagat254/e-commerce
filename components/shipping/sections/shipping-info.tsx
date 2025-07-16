const ShippingInfoSection = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4 md:px-6 max-w-4xl">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
					Shipping Information
				</h2>

				<div className="space-y-12">
					<div className="animate-slide-up">
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							Order Processing
						</h3>
						<div className="space-y-4 text-muted-foreground">
							<p>
								We process orders promptly to ensure you receive your items as
								quickly as possible:
							</p>
							<ul className="list-disc pl-5 space-y-2">
								<li>
									In-stock items typically process within 1-2 business days.
								</li>
								<li>Made-to-order items require 2-3 weeks for production.</li>
								<li>
									{"You'll receive order and shipping confirmation emails."}
								</li>
								<li>
									Orders after 2:00 PM PST begin processing next business day.
								</li>
							</ul>
						</div>
					</div>

					<div className="animate-slide-up [animation-delay:100ms]">
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							Shipping Methods & Timeframes
						</h3>
						<div className="space-y-4 text-muted-foreground">
							<p>We offer several shipping options to meet your needs:</p>
							<div className="relative overflow-x-auto rounded-lg border border-border">
								<table className="w-full text-sm text-left">
									<thead className="bg-secondary text-foreground">
										<tr>
											<th className="px-6 py-3 font-medium">Shipping Method</th>
											<th className="px-6 py-3 font-medium">
												Estimated Delivery
											</th>
											<th className="px-6 py-3 font-medium">Cost</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-border">
											<td className="px-6 py-4">Standard</td>
											<td className="px-6 py-4">5-7 business days</td>
											<td className="px-6 py-4">
												Free for goods over $100 <br /> $9.95 for goods under
												$100
											</td>
										</tr>
										<tr className="border-b border-border">
											<td className="px-6 py-4">Expedited</td>
											<td className="px-6 py-4">2-3 business days</td>
											<td className="px-6 py-4">$14.95</td>
										</tr>
										<tr className="border-b border-border">
											<td className="px-6 py-4">Express</td>
											<td className="px-6 py-4">1-2 business days</td>
											<td className="px-6 py-4">$24.95</td>
										</tr>
										<tr>
											<td className="px-6 py-4">International</td>
											<td className="px-6 py-4">7-14 business days</td>
											<td className="px-6 py-4">Calculated at checkout</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p>
								Timeframes may vary due to customs, weather, or other factors.
							</p>
						</div>
					</div>

					<div className="animate-slide-up [animation-delay:200ms]">
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							International Shipping
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
							<li>Delivery typically 7-14 business days.</li>
							<li>Customers are responsible for customs duties and fees.</li>
							<li>Not all products eligible for international shipping.</li>
							<li>Additional verification may be required.</li>
						</ul>
					</div>

					<div className="animate-slide-up [animation-delay:300ms]">
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							Order Tracking
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
							<li>Confirmation email with tracking info after shipment.</li>
							<li>Track via your account order history.</li>
							<li>Multiple shipments receive separate tracking numbers.</li>
							<li>Contact support with your order number for help.</li>
						</ul>
					</div>

					<div className="animate-slide-up [animation-delay:400ms]">
						<h3 className="text-xl font-medium mb-4 border-b pb-2">
							Shipping Restrictions
						</h3>
						<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
							<li>No P.O. boxes for large items.</li>
							<li>Some items need special delivery arrangements.</li>
							<li>{"We can't ship to all countries."}</li>
							<li>Contact us before placing uncertain orders.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShippingInfoSection;
