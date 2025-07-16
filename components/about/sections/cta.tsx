import Link from "next/link";

import { Button } from "@/components/ui/button";

const CTA = () => {
	return (
		<section className="py-16 md:py-24 bg-secondary text-muted-foreground">
			<div className="container mx-auto px-4 md:px-6 text-center">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
					Join Our Journey
				</h2>
				<p className="max-w-2xl mx-auto mb-8">
					{
						"We're always looking for talented individuals who share our passion for design and our vision for a more mindful way of living. Explore opportunities to be part of our growing team."
					}
				</p>
				<Button size="lg" variant="default" asChild>
					<Link href="/careers">View Careers</Link>
				</Button>
			</div>
		</section>
	);
};

export default CTA;
