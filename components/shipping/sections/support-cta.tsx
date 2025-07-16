import Link from "next/link";
import { Button } from "../../ui/button";

const SupportCTASection = () => {
	return (
		<section className="py-16 bg-secondary">
			<div className="container mx-auto px-4 md:px-6 max-w-4xl">
				<div className="mt-16 text-center">
					<h3 className="text-xl font-medium mb-4">
						Questions About Shipping or Returns?
					</h3>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						Our customer service team is ready to assist you with any questions
						or concerns about shipping, tracking, returns, or exchanges.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button asChild>
							<Link href="/contact">Contact Support</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="/faq">View FAQ</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SupportCTASection;
