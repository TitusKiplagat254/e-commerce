import {
	CommitmentsSection,
	HeroSection,
	ManufacturingSection,
	MaterialsSection,
	PackagingSection,
} from "@/components/sustainability/sections";

function Sustainability() {
	return (
		<>
			<HeroSection />
			<MaterialsSection />
			<ManufacturingSection />
			<PackagingSection />
			<CommitmentsSection />
		</>
	);
}

export default Sustainability;
