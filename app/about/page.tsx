import {
	CTASection,
	HeroSection,
	MissionSection,
	TeamSection,
	ValuesSection,
} from "@/components/about/sections";

function About() {
	return (
		<>
			<HeroSection />
			<MissionSection />
			<ValuesSection />
			<TeamSection />
			<CTASection />
		</>
	);
}

export default About;
