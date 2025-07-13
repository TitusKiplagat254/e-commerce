import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
	return (
		<form className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="name">Full Name</Label>
				<Input
					id="name"
					name="name"
					placeholder="John Doe"
					className="focus-visible:ring-0"
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="you@example.com"
					className="focus-visible:ring-0"
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="••••••••"
					className="focus-visible:ring-0"
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="confirmPassword">Confirm Password</Label>
				<Input
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					placeholder="••••••••"
					className="focus-visible:ring-0"
					required
				/>
			</div>
			<Button type="submit" className="w-full btn-hover">
				{"Create Account"}
			</Button>
			<p className="text-xs text-center text-muted-foreground mt-2">
				By creating an account, you agree to our{" "}
				<Link href="/terms" className="text-primary hover:underline">
					Terms
				</Link>{" "}
				and{" "}
				<Link href="/privacy" className="text-primary hover:underline">
					Privacy
				</Link>
				.
			</p>
		</form>
	);
};

export default RegisterForm;
