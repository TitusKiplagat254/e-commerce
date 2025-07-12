import { CreditCard } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PaymentStep = ({ currentStepNumber }: { currentStepNumber: number }) => {
	const total = 100;

	return (
		<>
			{currentStepNumber === 3 && (
				<div className="bg-card rounded-lg shadow-sm border border-border p-6">
					<h2 className="text-xl font-semibold mb-6">Payment</h2>

					<form className="space-y-6">
						<RadioGroup defaultValue="credit-card" className="space-y-4">
							<div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
								<RadioGroupItem
									value="credit-card"
									id="credit-card"
									className="mt-1"
								/>
								<div className="space-y-1.5 w-full">
									<div className="flex items-center gap-2">
										<Label htmlFor="credit-card" className="font-medium">
											Credit Card
										</Label>
										<CreditCard size={16} />
									</div>

									<div className="space-y-4 mt-4">
										<div className="space-y-2">
											<Label htmlFor="cardNumber">Card Number</Label>
											<Input
												id="cardNumber"
												name="cardNumber"
												placeholder="1234 5678 9012 3456"
												className="focus-visible:ring-0"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="cardName">Name on Card</Label>
											<Input
												id="cardName"
												name="cardName"
												placeholder="John Doe"
												className="focus-visible:ring-0"
											/>
										</div>

										<div className="grid grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label htmlFor="expiryDate">Expiry Date</Label>
												<Input
													id="expiryDate"
													name="expiryDate"
													placeholder="MM/YY"
													className="focus-visible:ring-0"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="cvv">CVV</Label>
												<Input
													id="cvv"
													name="cvv"
													placeholder="123"
													className="focus-visible:ring-0"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="flex items-start space-x-3 rounded-lg border border-border p-4 hover:bg-secondary/50 cursor-pointer">
								<RadioGroupItem value="paypal" id="paypal" className="mt-1" />
								<div className="space-y-1.5">
									<Label htmlFor="paypal" className="font-medium">
										PayPal
									</Label>
									<span className="text-sm text-muted-foreground">
										You will be redirected to PayPal to complete your purchase.
									</span>
								</div>
							</div>
						</RadioGroup>

						<div className="pt-2 flex gap-3">
							<Button type="button" variant="outline">
								Back
							</Button>
							<Button type="submit">Place Order (${total.toFixed(2)})</Button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default PaymentStep;
