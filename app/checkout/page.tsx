import Link from "next/link";

import {
	CheckoutSteps,
	InfoStep,
	OrderSummary,
	PaymentStep,
	ShippingStep,
	TrustBadges,
} from "@/components/checkout";
import { ArrowLeft } from "@/components/icons";

function Checkout() {
	const currentStepNumber = 3;
	return (
		<div>
			<div className="container mx-auto px-4 md:px-6 py-8">
				<Link
					href="/cart"
					className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
				>
					<ArrowLeft size={16} className="mr-2" />
					Back to Cart
				</Link>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
					<div className="lg:col-span-3">
						<CheckoutSteps currentStepNumber={currentStepNumber} />
						<InfoStep currentStepNumber={currentStepNumber} />
						<ShippingStep currentStepNumber={currentStepNumber} />
						<PaymentStep currentStepNumber={currentStepNumber} />
						<TrustBadges />
					</div>
					<OrderSummary />
				</div>
			</div>
		</div>
	);
}

export default Checkout;
