import { LoginForm } from "@/components/auth";

function Login() {
	return (
		<div className="container mx-auto px-4 md:px-6 py-8">
			<div className="max-w-md mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold">Sign In</h1>
					<p className="text-muted-foreground mt-2">
						Access your account securely.
					</p>
				</div>
				<div className="bg-card p-6 rounded-lg shadow-sm border border-border">
					<LoginForm />
				</div>
				<p className="text-sm text-center mt-4 text-muted-foreground">
					Don’t have an account?{" "}
					<a href="/sign-up" className="text-primary hover:underline">
						Create one
					</a>
				</p>
			</div>
		</div>
	);
}

export default Login;
