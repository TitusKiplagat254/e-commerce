const Cookies = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				6. Cookies and Tracking Technologies
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>
					We use cookies and similar tracking technologies to collect
					information about your browsing activities and to improve your
					experience on our website. Cookies are small text files that are
					stored on your device when you visit a website.
				</p>

				<p>We use the following types of cookies:</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>Essential cookies:</strong> Necessary for the website to
						function properly.
					</li>
					<li>
						<strong>Preference cookies:</strong> Enable the website to remember
						your preferences.
					</li>
					<li>
						<strong>Analytics cookies:</strong> Help us understand how visitors
						interact with our website.
					</li>
					<li>
						<strong>Marketing cookies:</strong> Used to track visitors across
						websites to display relevant advertisements.
					</li>
				</ul>

				<p className="mt-4">
					You can manage your cookie preferences through your browser settings.
					Please note that disabling certain cookies may impact your experience
					on our website.
				</p>

				<p>
					For more detailed information, please refer to our separate Cookie
					Policy.
				</p>
			</div>
		</div>
	);
};

export default Cookies;
