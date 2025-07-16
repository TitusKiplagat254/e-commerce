const WhatsNotCoveredSection = () => (
	<section className="py-16">
		<div className="container mx-auto px-4 md:px-6 max-w-4xl">
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				{"What's Not Covered"}
			</h2>
			<p className="text-muted-foreground mb-4">
				The following are not covered under our warranty:
			</p>
			<ul className="list-disc pl-5 space-y-2 text-muted-foreground">
				<li>Normal wear and tear expected with use over time</li>
				<li>Damage resulting from improper use, misuse, or abuse</li>
				<li>Damage from accidents, drops, or impacts</li>
				<li>Improper cleaning or maintenance contrary to care instructions</li>
				<li>Environmental damage (extreme temperatures, humidity, etc.)</li>
				<li>
					Natural variations in color, grain, or texture of natural materials
				</li>
				<li>Changes in appearance due to aging or sunlight exposure</li>
				<li>Damage from modifications or unauthorized repairs</li>
				<li>
					Use in commercial settings unless designated as commercial-grade
				</li>
				<li>{'"Products sold " as is, " clearance, or floor samples"'}</li>
			</ul>
		</div>
	</section>
);

export default WhatsNotCoveredSection;
