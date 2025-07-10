import CTA from "./cta";
import Hero from "./hero";
import Mission from "./mission";
import Team from "./team";
import Values from "./values";

function About() {
	return (
		<>
			{/* hero section */}
			<Hero />
			{/* mission section */}
			<Mission />
			{/* values section */}
			<Values />
			{/* team section */}
			<Team />
			{/* CTA section */}
			<CTA />
		</>
	);
}

export default About;
