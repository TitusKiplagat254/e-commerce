import Link from "next/link";

import { Button } from "@/components/ui/button";

const SupportCTASection = () => {
	return (
		<section className="py-16 bg-secondary">
			<div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
				<h3 className="text-xl font-medium mb-4">
					Questions About Our Warranty?
				</h3>
				<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
					For any questions about our warranty policy or to submit a warranty
					claim, please contact our customer service team.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button asChild>
						<Link href="/contact">Contact Warranty Support</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="mailto:warranty@eldoshop.com">
							Email Warranty Department
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SupportCTASection;
