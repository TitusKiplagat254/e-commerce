const ContactInfo = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				13. Contact Information
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					If you have any questions about these Terms, please contact us at:
				</p>
				<div className="bg-secondary p-6 rounded-lg border border-border mt-4">
					<p className="font-medium text-foreground">
						EldoShop Legal Department
					</p>
					<p>123 Design Avenue</p>
					<p>abc, ABC 00000</p>
					<p>Kenya</p>
					<p className="mt-2">Email: legal@eldoshop.com</p>
					<p>Phone: +254 (800) 555-1234</p>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
