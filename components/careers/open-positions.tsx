import { Button } from "@/components/ui/button";
import { positions } from "@/lib/data/positions";

const OpenPositions = () => {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
						Open Positions
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						{
							"We're always looking for talented individuals. Browse our openings or send a resume for future opportunities."
						}
					</p>
				</div>

				<div className="max-w-4xl mx-auto space-y-6">
					{positions.map(({ title, location, type, description }) => (
						<div
							key={title}
							className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
						>
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
								<div>
									<h3 className="text-lg font-medium">{title}</h3>
									<div className="flex flex-wrap gap-2 mt-2">
										<span className="text-xs px-2 py-1 bg-secondary rounded-full">
											{type}
										</span>
										<span className="text-xs px-2 py-1 bg-secondary rounded-full">
											{location}
										</span>
									</div>
								</div>
								<Button size="sm">Apply Now</Button>
							</div>
							<p className="text-muted-foreground mt-4">{description}</p>
						</div>
					))}
				</div>

				<div className="text-center mt-16">
					<h3 className="text-xl font-medium mb-4">
						{"Don't see the right fit?"}
					</h3>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						{
							"We're always interested in connecting with passionate people about design and sustainability."
						}
					</p>
					<Button variant="outline" size="lg">
						Submit General Application
					</Button>
				</div>
			</div>
		</section>
	);
};

export default OpenPositions;
