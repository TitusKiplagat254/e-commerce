const WhatsCoveredSection = () => (
	<section className="py-16">
		<div className="container mx-auto px-4 md:px-6 max-w-4xl">
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				{"What's Covered"}
			</h2>
			<p className="text-muted-foreground mb-4">
				Our warranty covers defects in materials and workmanship that occur
				under normal use, including:
			</p>
			<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
				<li>Structural defects that impact functionality or safety</li>
				<li>Premature deterioration of materials beyond normal wear</li>
				<li>Failure of mechanical or electronic components</li>
				<li>Significant flaws in finishes that affect appearance</li>
				<li>
					Manufacturing errors that impact the form or function of the product
				</li>
			</ul>
			<p className="text-muted-foreground mt-4">
				For covered issues, we will repair or replace the defective product or
				component at our discretion. If the exact product is no longer
				available, we may replace it with a similar item of equal or greater
				value.
			</p>
		</div>
	</section>
);

export default WhatsCoveredSection;
