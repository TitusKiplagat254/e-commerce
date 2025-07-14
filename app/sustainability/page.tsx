import {
	Commitments,
	Hero,
	Manufacturing,
	Materials,
	Packaging,
} from "@/components/sustainability";

function Sustainability() {
	return (
		<>
			<Hero />
			<Materials />
			<Manufacturing />
			<Packaging />
			<Commitments />
		</>
	);
}

export default Sustainability;
