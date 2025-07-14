import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
	question: string;
	answer: string;
}

interface Props {
	title: string;
	items: FaqItem[];
}

const FAQContainer = ({ title, items }: Props) => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight mb-6">{title}</h2>
			<Accordion type="single" collapsible className="w-full">
				{items.map((item, index) => (
					<AccordionItem key={index} value={`item-${index}`}>
						<AccordionTrigger>{item.question}</AccordionTrigger>
						<AccordionContent>
							<p className="text-muted-foreground">{item.answer}</p>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FAQContainer;
