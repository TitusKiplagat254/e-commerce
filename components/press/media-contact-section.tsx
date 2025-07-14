import Link from "next/link";

import { Button } from "@/components/ui/button";

const MediaContact = () => {
	return (
		<section className="py-16 bg-secondary text-secondary-foreground">
			<div className="container mx-auto px-4 md:px-6 text-center">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
					Media Inquiries
				</h2>
				<p className="max-w-2xl mx-auto mb-8">
					For interview requests, additional information, or to arrange a press
					visit to our showroom, please contact our media relations team.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button variant="default" asChild>
						<Link href="mailto:press@eldoshop.com">Email Press Team</Link>
					</Button>
					<Button
						variant="outline"
						className="border-primary-foreground/20 hover:bg-primary-foreground/10"
					>
						+254 (415) 555-7890
					</Button>
				</div>
			</div>
		</section>
	);
};

export default MediaContact;
