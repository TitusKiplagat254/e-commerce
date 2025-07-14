const WarrantyCoverageSection = () => (
	<section className="py-16">
		<div className="container mx-auto px-4 md:px-6 max-w-4xl">
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				Warranty Coverage
			</h2>
			<p className="text-muted-foreground mb-6">
				All EldoShop products are covered by a warranty against defects in
				materials and workmanship when used under normal conditions and for
				their intended purpose.
			</p>
			<div className="relative overflow-x-auto rounded-lg border border-border">
				<table className="w-full text-sm text-left">
					<thead className="bg-secondary text-foreground">
						<tr>
							<th className="px-6 py-3 font-medium">Product Category</th>
							<th className="px-6 py-3 font-medium">Warranty Period</th>
							<th className="px-6 py-3 font-medium">Coverage Details</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-border">
							<td className="px-6 py-4">Furniture</td>
							<td className="px-6 py-4">5 Years</td>
							<td className="px-6 py-4">
								Structural integrity, joints, hardware
							</td>
						</tr>
						<tr className="border-b border-border">
							<td className="px-6 py-4">Lighting</td>
							<td className="px-6 py-4">3 Years</td>
							<td className="px-6 py-4">
								Electrical components, fixtures, finishes
							</td>
						</tr>
						<tr className="border-b border-border">
							<td className="px-6 py-4">Textiles</td>
							<td className="px-6 py-4">1 Year</td>
							<td className="px-6 py-4">
								Stitching, fabric defects, color fastness
							</td>
						</tr>
						<tr className="border-b border-border">
							<td className="px-6 py-4">Kitchenware</td>
							<td className="px-6 py-4">2 Years</td>
							<td className="px-6 py-4">
								Material defects, functional components
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4">Decorative Objects</td>
							<td className="px-6 py-4">1 Year</td>
							<td className="px-6 py-4">
								Material defects, structural integrity
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p className="text-muted-foreground mt-6">
				The warranty period begins on the date of purchase as shown on your
				receipt. Please retain your proof of purchase, as it will be required
				for warranty claims.
			</p>
		</div>
	</section>
);

export default WarrantyCoverageSection;
