import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InfoStep = ({ currentStepNumber }: { currentStepNumber: number }) => {
	return (
		<>
			{currentStepNumber === 1 && (
				<div className="bg-card rounded-lg shadow-sm border border-border p-6">
					<h2 className="text-xl font-semibold mb-6">
						Contact & Shipping Information
					</h2>

					<form className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="your@email.com"
								className="focus-visible:ring-0"
								required
							/>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="firstName">First Name</Label>
								<Input
									id="firstName"
									name="firstName"
									placeholder="John"
									className="focus-visible:ring-0"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="lastName">Last Name</Label>
								<Input
									id="lastName"
									name="lastName"
									placeholder="Doe"
									className="focus-visible:ring-0"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="address">Address</Label>
							<Input
								id="address"
								name="address"
								placeholder="123 Main St"
								className="focus-visible:ring-0"
								required
							/>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							<div className="space-y-2">
								<Label htmlFor="city">City</Label>
								<Input
									id="city"
									name="city"
									placeholder="New York"
									className="focus-visible:ring-0"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="state">State</Label>
								<Input
									id="state"
									name="state"
									placeholder="NY"
									className="focus-visible:ring-0"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="zipCode">ZIP Code</Label>
								<Input
									id="zipCode"
									name="zipCode"
									placeholder="10001"
									className="focus-visible:ring-0"
									required
								/>
							</div>
						</div>

						<div>
							<Button type="submit" className="w-full sm:w-auto mt-4">
								Continue to Shipping
							</Button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default InfoStep;
