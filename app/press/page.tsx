import {
	Hero,
	MediaContact,
	MediaCoverage,
	PressKit,
	PressReleases,
} from "@/components/press";

function Press() {
	return (
		<>
			<Hero />
			<PressReleases />
			<MediaCoverage />
			<PressKit />
			<MediaContact />
		</>
	);
}

export default Press;
