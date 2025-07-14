import Link from "next/link";

import { Button } from "@/components/ui/button";
import { faqData } from "@/lib/data/faq";
import FAQContainer from "./faq-container";

const FAQSection = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16">
				{faqData.map((section) => (
					<FAQContainer
						key={section.title}
						title={section.title}
						items={section.items}
					/>
				))}

				{/* CTA */}
				<div className="text-center">
					<h2 className="text-2xl font-bold tracking-tight mb-4">
						Still Have Questions?
					</h2>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						Our customer service team is ready to assist you with any questions
						or concerns not addressed in our FAQ.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button asChild>
							<Link href="/contact">Contact Us</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="mailto:support@eldoshop.com">Email Support</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
