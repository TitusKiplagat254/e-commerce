import {
	CategoryShowcase,
	DesignPhilosophy,
	FeaturedProducts,
	Hero,
	NewsletterSignup,
} from "@/components/sections";

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedProducts />
			<CategoryShowcase />
			<DesignPhilosophy />
			<NewsletterSignup />
		</>
	);
}
