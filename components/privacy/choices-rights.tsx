const ChoicesRights = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				5. Your Choices and Rights
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					Depending on your location, you may have various rights regarding your
					personal information, including:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>Access:</strong> Request information about the personal data
						we hold about you.
					</li>
					<li>
						<strong>Correction:</strong> Request correction of inaccurate or
						incomplete data.
					</li>
					<li>
						<strong>Deletion:</strong> Request deletion of your personal data in
						certain circumstances.
					</li>
					<li>
						<strong>Restriction:</strong> Request restriction of processing in
						certain circumstances.
					</li>
					<li>
						<strong>Data portability:</strong> Request transfer of your data to
						you or a third party.
					</li>
					<li>
						<strong>Objection:</strong> Object to processing based on legitimate
						interests or for direct marketing.
					</li>
					<li>
						<strong>Withdraw consent:</strong> Withdraw previously given consent
						for data processing.
					</li>
				</ul>

				<p className="mt-4">
					To exercise any of these rights, please contact us at
					privacy@eldoshop.com. We will respond to your request within 30 days.
					For your protection, we may need to verify your identity before
					implementing your request.
				</p>

				<h3 className="text-lg font-medium text-foreground mt-6">
					Marketing Communications
				</h3>
				<p>
					You can opt out of receiving marketing communications from us at any
					time by:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>{'Clicking the "unsubscribe" link in any marketing email'}</li>
					<li>
						Updating your communication preferences in your account settings
					</li>
					<li>Contacting our customer service team</li>
				</ul>
				<p>
					Please note that even if you opt out of marketing communications, we
					will still send you transactional messages related to your account and
					orders.
				</p>
			</div>
		</div>
	);
};

export default ChoicesRights;
