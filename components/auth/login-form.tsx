"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
	return (
		<form className="space-y-4">
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
				<div className="flex items-center justify-between">
					<Label htmlFor="password">Password</Label>
					<Link
						href="/forgot-password"
						className="text-xs text-primary hover:underline"
					>
						Forgot password?
					</Link>
				</div>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="••••••••"
					className="focus-visible:ring-0"
					required
				/>
			</div>
			<Button type="submit" className="w-full btn-hover">
				{"Sign In"}
			</Button>
		</form>
	);
};

export default LoginForm;
