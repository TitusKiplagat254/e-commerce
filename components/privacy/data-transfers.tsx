const DataTransfers = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				7. International Data Transfers
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					EldoShop is based in the United States, and we process and store
					information on servers located in the United States and potentially
					other countries. As such, we may transfer your personal information to
					countries outside your country of residence, which may have different
					data protection rules.
				</p>

				<p>
					When we transfer personal data from the European Economic Area (EEA),
					United Kingdom, or Switzerland to countries that have not received an
					adequacy decision, we implement appropriate safeguards such as:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						Standard Contractual Clauses approved by the European Commission
					</li>
					<li>Binding Corporate Rules</li>
					<li>Approved certification mechanisms or codes of conduct</li>
				</ul>

				<p className="mt-4">
					By using our services, you consent to the transfer of your information
					to countries outside your country of residence, including the United
					States, which may have different data protection rules.
				</p>
			</div>
		</div>
	);
};

export default DataTransfers;
