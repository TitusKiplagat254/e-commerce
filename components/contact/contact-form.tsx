import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight space-y-6">
				Send Us a Message
			</h2>
			<form className="space-y-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="space-y-2">
						<label htmlFor="name" className="text-sm font-medium">
							Your Name
						</label>
						<Input id="name" name="name" placeholder="John Doe" required />
					</div>
					<div className="space-y-2">
						<label htmlFor="email" className="text-sm font-medium">
							Email Address
						</label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="john@example.com"
							required
						/>
					</div>
				</div>

				<div className="space-y-2">
					<label htmlFor="subject" className="text-sm font-medium">
						Subject
					</label>
					<Input
						id="subject"
						name="subject"
						placeholder="How can we help you?"
						required
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="message" className="text-sm font-medium">
						Message
					</label>
					<Textarea
						id="message"
						name="message"
						placeholder="Tell us more about your inquiry..."
						rows={6}
						required
					/>
				</div>

				<Button type="submit" className="w-full sm:w-auto capitalize">
					{"send message"}
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
