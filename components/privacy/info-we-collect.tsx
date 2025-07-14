const InformationWeCollect = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				1. Information We Collect
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<h3 className="text-lg font-medium text-foreground">
					Personal Information
				</h3>
				<p>
					When you create an account, place an order, sign up for our
					newsletter, or interact with our website, we may collect the following
					personal information:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						Contact information (name, email, phone, shipping/billing addresses)
					</li>
					<li>Account information (username, password)</li>
					<li>Payment info (credit card details - not stored)</li>
					<li>Order history and preferences</li>
					<li>Customer service interactions</li>
				</ul>

				<h3 className="text-lg font-medium text-foreground mt-6">
					Automatically Collected Information
				</h3>
				<p>We collect certain technical data when you visit our site:</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>IP address and location</li>
					<li>Device and browser details</li>
					<li>Pages viewed and interactions</li>
					<li>Referral source</li>
					<li>Cookies and tracking technologies</li>
				</ul>
			</div>
		</div>
	);
};

export default InformationWeCollect;
