import {
	CategoryShowcase,
	FeaturedProducts,
	Hero,
} from "@/components/sections";

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedProducts />
			<CategoryShowcase />
		</>
	);
}
