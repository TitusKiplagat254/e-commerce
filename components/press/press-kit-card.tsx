import { Button } from "@/components/ui/button";

interface Props {
	title: string;
	description: string;
	cta: string;
}

const PressKitCard = ({ title, description, cta }: Props) => {
	return (
		<div className="border border-border rounded-lg p-6">
			<h3 className="font-medium mb-3">{title}</h3>
			<p className="text-muted-foreground text-sm mb-4">{description}</p>
			<Button variant="outline" size="sm" className="w-full">
				{cta}
			</Button>
		</div>
	);
};

export default PressKitCard;
