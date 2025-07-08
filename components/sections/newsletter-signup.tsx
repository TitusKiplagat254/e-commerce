import Link from "next/link";

import { Button } from "@/components/ui/button";

const NewsletterSignup = () => {
	return (
		<section className="py-16 bg-secondary">
			<div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
				<div className="space-y-4">
					<h2 className="text-3xl font-bold tracking-tight">
						Join Our Community
					</h2>
					<p className="text-muted-foreground">
						Subscribe to our newsletter for exclusive offers, design
						inspiration, and new product announcements.
					</p>

					<form className="mt-6 flex flex-col sm:flex-row gap-2">
						<input
							type="email"
							placeholder="Enter your email"
							required
							className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
						/>
						<Button type="submit" className="sm:w-auto w-full">
							Subscribe
						</Button>
					</form>

					<p className="text-xs text-muted-foreground mt-2">
						By subscribing, you agree to our{" "}
						<Link href="/privacy" className="underline hover:text-foreground">
							Privacy Policy
						</Link>{" "}
						and consent to receive updates.
					</p>
				</div>
			</div>
		</section>
	);
};

export default NewsletterSignup;
