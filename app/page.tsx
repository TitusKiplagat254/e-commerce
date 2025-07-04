import {
	CategoryShowcase,
	DesignPhilosophy,
	FeaturedProducts,
	Hero,
} from "@/components/sections";

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedProducts />
			<CategoryShowcase />
			<DesignPhilosophy />
		</>
	);
}
