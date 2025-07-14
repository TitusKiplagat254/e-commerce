import Link from "next/link";

const Hero = () => (
	<section className="bg-secondary">
		<div className="container mx-auto px-4 md:px-6 py-16">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
					Press & Media
				</h1>
				<p className="text-muted-foreground leading-relaxed">
					Resources and information for journalists, bloggers, and media
					professionals. For press inquiries, please contact{" "}
					<Link
						href="mailto:press@eldoshop.com"
						className="text-primary hover:underline"
					>
						press@eldoshop.com
					</Link>
					.
				</p>
			</div>
		</div>
	</section>
);

export default Hero;
