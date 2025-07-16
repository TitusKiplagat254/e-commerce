import { Clock, Truck } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ShippingStep = ({ currentStepNumber }: { currentStepNumber: number }) => {
	return (
		<>
			{currentStepNumber === 2 && (
				<div className="bg-card rounded-lg shadow-sm border border-border p-6">
					<h2 className="text-xl font-semibold mb-6">Shipping Method</h2>

					<form className="space-y-6">
						<RadioGroup defaultValue="standard" className="space-y-4">
							<div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
								<Label
									htmlFor="standard"
									className="font-medium w-full flex items-center gap-4"
								>
									<RadioGroupItem value="standard" id="standard" />
									<div className="space-y-1.5">
										<div className="space-x-2">
											<span>Express Shipping</span>
											<span className="text-sm">$20.00</span>
										</div>
										<div className="flex items-center text-sm text-muted-foreground gap-2">
											<Truck size={16} />
											<span>1-2 business days</span>
										</div>
									</div>
								</Label>
							</div>

							<div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
								<Label
									htmlFor="express"
									className="font-medium w-full flex items-center gap-4"
								>
									<RadioGroupItem value="express" id="express" />
									<div className="space-y-1.5">
										<div className="space-x-2">
											<span>Express Shipping</span>
											<span className="text-sm">$20.00</span>
										</div>
										<div className="flex items-center text-sm text-muted-foreground gap-2">
											<Clock size={16} />
											<span>1-2 business days</span>
										</div>
									</div>
								</Label>
							</div>
						</RadioGroup>

						<div className="pt-2 flex gap-3">
							<Button type="button" variant="outline">
								Back
							</Button>
							<Button type="submit">Continue to Payment</Button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default ShippingStep;
