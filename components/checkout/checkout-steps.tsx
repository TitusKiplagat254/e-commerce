import { cn } from "@/lib/utils";

interface StepProps {
	stepNumber: number;
	stepLabel: string;
	isComplete: boolean;
}

const Step = ({ stepNumber, stepLabel, isComplete }: StepProps) => {
	return (
		<div className="flex items-center">
			<div
				className={cn(
					"w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-2",
					isComplete
						? "bg-primary text-primary-foreground"
						: "bg-secondary text-muted-foreground",
				)}
			>
				{stepNumber}
			</div>
			<span className={isComplete ? "font-medium" : "text-muted-foreground"}>
				{stepLabel}
			</span>
		</div>
	);
};

const CheckoutSteps = ({
	currentStepNumber,
}: { currentStepNumber: number }) => {
	return (
		<div className="mb-8">
			<div className="flex items-center justify-between">
				<Step
					stepNumber={1}
					stepLabel="Information"
					isComplete={currentStepNumber >= 1}
				/>
				<div className="w-12 h-0.5 bg-border" />
				<Step
					stepNumber={2}
					stepLabel="Shipping"
					isComplete={currentStepNumber >= 2}
				/>
				<div className="w-12 h-0.5 bg-border" />
				<Step
					stepNumber={3}
					stepLabel="Payment"
					isComplete={currentStepNumber >= 3}
				/>
			</div>
		</div>
	);
};

export default CheckoutSteps;
