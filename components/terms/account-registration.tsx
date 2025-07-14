const AccountRegistration = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				2. Account Registration
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					To access certain features of the Site or to place orders, you may
					need to register for an account. When you register, you agree to:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Provide accurate, current, and complete information</li>
					<li>Maintain and promptly update your account information</li>
					<li>Keep your password confidential and secure</li>
					<li>
						Be responsible for all activities that occur under your account
					</li>
					<li>Notify us immediately of any unauthorized use of your account</li>
				</ul>
				<p className="mt-4">
					We reserve the right to terminate accounts, refuse service, or cancel
					orders at our discretion, including if we believe that user conduct
					violates applicable law or is harmful to our interests.
				</p>
			</div>
		</div>
	);
};

export default AccountRegistration;
