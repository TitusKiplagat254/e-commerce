import {
	HeroSection,
	ReturnsPolicySection,
	ShippingInfoSection,
	SupportCTASection,
} from "@/components/shipping";

function Shipping() {
	return (
		<>
			<HeroSection />
			<ShippingInfoSection />
			<ReturnsPolicySection />
			<SupportCTASection />
		</>
	);
}

export default Shipping;
