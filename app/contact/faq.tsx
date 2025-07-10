import Link from "next/link";

import { Button } from "@/components/ui/button";

const FAQ = () => {
	return (
		<section className="py-16 bg-secondary">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-2xl font-bold tracking-tight mb-8 text-center">
						Frequently Asked Questions
					</h2>

					<div className="space-y-6">
						<div className="bg-background rounded-lg p-6">
							<h3 className="text-lg font-medium mb-2">
								What is your return policy?
							</h3>
							<p className="text-muted-foreground">
								We offer a 30-day return policy for most items. Products must be
								in their original condition with tags attached. Please visit our{" "}
								<Link href="/shipping" className="text-primary hover:underline">
									Shipping & Returns
								</Link>{" "}
								page for full details.
							</p>
						</div>

						<div className="bg-background rounded-lg p-6">
							<h3 className="text-lg font-medium mb-2">
								How long does shipping take?
							</h3>
							<p className="text-muted-foreground">
								Standard shipping typically takes 3-7 business days within the
								continental US. International shipping times vary by location,
								generally 7-14 business days.
							</p>
						</div>

						<div className="bg-background rounded-lg p-6">
							<h3 className="text-lg font-medium mb-2">
								Do you offer wholesale opportunities?
							</h3>
							<p className="text-muted-foreground">
								Yes, we partner with select retailers who share our aesthetic
								and values. Please contact our wholesale team at{" "}
								<a
									href="mailto:wholesale@eldoshop.com"
									className="text-primary hover:underline"
								>
									wholesale@eldoshop.com
								</a>{" "}
								for more information.
							</p>
						</div>
					</div>

					<div className="text-center mt-8">
						<Button variant="outline" asChild>
							<a href="/faq">View All FAQs</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
