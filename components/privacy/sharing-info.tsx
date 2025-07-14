const SharingInfo = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				3. Sharing Your Information
			</h2>
			<div className="space-y-4 text-muted-foreground">
				<p>We may share your personal information with:</p>
				<h3 className="text-lg font-medium text-foreground">
					Service Providers
				</h3>
				<p>
					We work with third-party service providers who perform functions on
					our behalf, such as:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Payment processors</li>
					<li>Shipping and fulfillment companies</li>
					<li>Customer service and support providers</li>
					<li>Marketing and analytics partners</li>
					<li>Cloud hosting and storage providers</li>
				</ul>
				<p>
					These providers have access to personal information needed to perform
					their functions but are contractually obligated to maintain the
					confidentiality and security of your data.
				</p>

				<h3 className="text-lg font-medium text-foreground mt-6">
					Legal Requirements
				</h3>
				<p>
					We may disclose your information if required to do so by law or if we
					believe in good faith that such action is necessary to:
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>Comply with legal obligations</li>
					<li>Protect and defend our rights or property</li>
					<li>Prevent or investigate possible wrongdoing</li>
					<li>Protect the personal safety of users or the public</li>
				</ul>

				<h3 className="text-lg font-medium text-foreground mt-6">
					Business Transfers
				</h3>
				<p>
					If EldoShop is involved in a merger, acquisition, or sale of all or a
					portion of its assets, your personal information may be transferred as
					part of that transaction. We will notify you via email and/or a
					prominent notice on our website of any change in ownership or uses of
					your personal information.
				</p>

				<p className="mt-4 italic">
					We do not sell, rent, or lease your personal information to third
					parties for their marketing purposes.
				</p>
			</div>
		</div>
	);
};

export default SharingInfo;
