import {
	HeroSection,
	MediaContactSection,
	MediaCoverageSection,
	PressKitSection,
	PressReleasesSection,
} from "@/components/press/sections";

function Press() {
	return (
		<>
			<HeroSection />
			<PressReleasesSection />
			<MediaCoverageSection />
			<PressKitSection />
			<MediaContactSection />
		</>
	);
}

export default Press;
