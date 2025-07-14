const Indemnification = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				10. Indemnification
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					{`You agree to indemnify, defend, and hold harmless Aesthete, its
					affiliates, officers, directors, employees, agents, and suppliers from
					and against any and all claims, liabilities, damages, losses, costs,
					expenses, or fees (including reasonable attorneys' fees) that arise
					from or relate to:`}
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Your use or misuse of the Site</li>
					<li>Your violation of these Terms</li>
					<li>Your violation of any rights of another person or entity</li>
					<li>Your user-generated content</li>
				</ul>
				<p className="mt-4">
					We reserve the right, at your expense, to assume the exclusive defense
					and control of any matter for which you are required to indemnify us,
					and you agree to cooperate with our defense of these claims.
				</p>
			</div>
		</div>
	);
};

export default Indemnification;
