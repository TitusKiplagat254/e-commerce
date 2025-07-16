import { CheckCircle } from "@/components/icons";

const TrustBadges = () => {
	return (
		<div className="mt-8 text-center">
			<p className="text-sm text-muted-foreground mb-4">Secure Checkout</p>
			<div className="flex justify-center gap-4 flex-wrap">
				{["secure payment", "fast shipping", "easy returns"].map(
					(trustBadge) => (
						<div
							key={trustBadge}
							className="flex items-center gap-1 text-xs text-muted-foreground capitalize"
						>
							<CheckCircle size={16} />
							Secure Payment
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default TrustBadges;
