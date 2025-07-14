import Link from "next/link";

const ReturnsRefunds = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				6. Returns & Refunds
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					We want you to be completely satisfied with your purchase. Our return
					policy allows for returns within 30 days of delivery for most items,
					subject to the following conditions:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						Items must be unused, undamaged, and in their original packaging
					</li>
					<li>
						Certain products may be non-returnable as indicated in their
						description
					</li>
					<li>Custom or personalized orders are generally non-returnable</li>
					<li>
						Return shipping costs are the responsibility of the customer unless
						the return is due to our error
					</li>
				</ul>
				<p className="mt-4">
					For complete details on our return process and refund policies, please
					visit our
					<Link href="/shipping" className="text-primary hover:underline">
						{" "}
						Shipping & Returns
					</Link>{" "}
					page.
				</p>
			</div>
		</div>
	);
};

export default ReturnsRefunds;
