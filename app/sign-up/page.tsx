import Link from "next/link";

import { RegisterForm } from "@/components/auth";

function Register() {
	return (
		<div className="container mx-auto px-4 md:px-6 py-8">
			<div className="max-w-md mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold">Create Account</h1>
					<p className="text-muted-foreground mt-2">
						Start your journey with EldoShop.
					</p>
				</div>
				<div className="bg-card p-6 rounded-lg shadow-sm border border-border">
					<RegisterForm />
				</div>
				<p className="text-sm text-center mt-4 text-muted-foreground">
					Already have an account?{" "}
					<Link href="/sign-in" className="text-primary hover:underline">
						Sign in
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Register;
