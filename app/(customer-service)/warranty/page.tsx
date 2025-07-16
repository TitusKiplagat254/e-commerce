import {
	HeroSection,
	SupportCTASection,
	WarrantyAdditionalInfoSection,
	WarrantyClaimSection,
	WarrantyCoverageSection,
	WhatsCoveredSection,
	WhatsNotCoveredSection,
} from "@/components/warranty/sections";

function Warranty() {
	return (
		<>
			<HeroSection />
			<WarrantyCoverageSection />
			<WhatsCoveredSection />
			<WhatsNotCoveredSection />
			<WarrantyClaimSection />
			<WarrantyAdditionalInfoSection />
			<SupportCTASection />
		</>
	);
}

export default Warranty;
