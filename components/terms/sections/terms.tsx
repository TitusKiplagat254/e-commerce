import { Separator } from "@/components/ui/separator";
import AccountRegistration from "../account-registration";
import ContactInfo from "../contact-info";
import GoverningLaw from "../governing-law";
import Indemnification from "../indemnification";
import IntellectualProperty from "../intellectual-property";
import Intro from "../intro";
import LimitationOfLiability from "../limitation-of-liability";
import Miscellaneous from "../miscellaneous";
import PaymentTerms from "../payment-terms";
import ProductOrdering from "../product-ordering";
import ReturnsRefunds from "../returns-refunds";
import ShippingDelivery from "../shipping-delivery";
import UserGeneratedContent from "../user-generated-content";

const TermsSection = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4 md:px-6 max-w-4xl">
				<div className="space-y-12">
					<Intro />
					<Separator />
					<AccountRegistration />
					<Separator />
					<ProductOrdering />
					<Separator />
					<PaymentTerms />
					<Separator />
					<ShippingDelivery />
					<Separator />
					<ReturnsRefunds />
					<Separator />
					<IntellectualProperty />
					<Separator />
					<UserGeneratedContent />
					<Separator />
					<LimitationOfLiability />
					<Separator />
					<Indemnification />
					<Separator />
					<GoverningLaw />
					<Separator />
					<Miscellaneous />
					<Separator />
					<ContactInfo />
				</div>
			</div>
		</section>
	);
};

export default TermsSection;
