import { ArrowDownToLine } from "@/components/icons";
import { Button } from "@/components/ui/button";

interface Props {
	date: string;
	title: string;
	description: string;
}

const PressReleaseCard = ({ date, title, description }: Props) => {
	return (
		<div className="border border-border rounded-lg p-6 hover:border-primary">
			<div className="flex flex-col sm:flex-row gap-4 justify-between">
				<div>
					<span className="text-xs text-muted-foreground">{date}</span>
					<h3 className="text-lg font-medium mt-1">{title}</h3>
					<p className="text-muted-foreground mt-2">{description}</p>
				</div>
				<div className="flex-shrink-0">
					<Button
						variant="outline"
						size="sm"
						className="flex items-center gap-2"
					>
						<ArrowDownToLine size={16} />
						Download
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PressReleaseCard;
