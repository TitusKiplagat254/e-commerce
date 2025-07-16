import {
	HeroSection,
	ReturnsPolicySection,
	ShippingInfoSection,
	SupportCTASection,
} from "@/components/shipping/sections";

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
