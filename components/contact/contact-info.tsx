import { Clock, Mail, MapPin, Phone } from "@/components/icons";

const ContactInfo = () => {
	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				Contact Information
			</h2>

			<div className="space-y-6">
				<div className="flex items-start">
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
						<MapPin size={20} />
					</div>
					<div>
						<h3 className="font-medium">Our Location</h3>
						<address className="not-italic text-muted-foreground mt-1">
							123 Design Avenue
							<br />
							abc, ABC 00000
							<br />
							Kenya
						</address>
					</div>
				</div>

				<div className="flex items-start">
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
						<Phone size={20} />
					</div>
					<div>
						<h3 className="font-medium">Phone</h3>
						<div className="text-muted-foreground mt-1">
							<p>
								Customer Service:{" "}
								<a href="tel:+25472345678" className="hover:text-primary">
									+254 72 345 678
								</a>
							</p>
							<p>
								General Inquiries:{" "}
								<a href="tel:+25472345678" className="hover:text-primary">
									+254 72 345 678
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="flex items-start">
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
						<Mail size={20} />
					</div>
					<div>
						<h3 className="font-medium">Email</h3>
						<div className="text-muted-foreground mt-1">
							<p>
								Customer Support:{" "}
								<a
									href="mailto:support@eldoshop.com"
									className="hover:text-primary"
								>
									support@eldoshop.com
								</a>
							</p>
							<p>
								Press Inquiries:{" "}
								<a
									href="mailto:press@eldoshop.com"
									className="hover:text-primary"
								>
									press@eldoshop.com
								</a>
							</p>
							<p>
								Wholesale:{" "}
								<a
									href="mailto:wholesale@eldoshop.com"
									className="hover:text-primary"
								>
									wholesale@eldoshop.com
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="flex items-start">
					<div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
						<Clock size={20} />
					</div>
					<div>
						<h3 className="font-medium">Hours</h3>
						<div className="text-muted-foreground mt-1">
							<p>Monday - Friday: 9:00 AM - 6:00 PM PT</p>
							<p>Saturday: 10:00 AM - 4:00 PM PT</p>
							<p>Sunday: Closed</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
