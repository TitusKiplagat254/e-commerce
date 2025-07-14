const DataSecurity = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				4. Data Security
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					We implement appropriate technical and organizational measures to
					protect your personal information against unauthorized access,
					accidental loss, alteration, or destruction, including:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Encryption of sensitive data</li>
					<li>Secure socket layer (SSL) technology for all transactions</li>
					<li>Regular security assessments and monitoring</li>
					<li>Access controls and authentication procedures</li>
					<li>Employee training on data protection practices</li>
				</ul>
				<p className="mt-4">
					While we strive to protect your personal information, no method of
					transmission over the Internet or electronic storage is 100% secure.
					We cannot guarantee absolute security but commit to promptly notify
					you in the event of a breach affecting your personal data.
				</p>
			</div>
		</div>
	);
};

export default DataSecurity;
