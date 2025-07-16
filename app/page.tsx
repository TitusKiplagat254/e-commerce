import {
	CategoryShowcase,
	DesignPhilosophy,
	FeaturedProducts,
	Hero,
	NewsletterSignup,
} from "@/components/home";

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
