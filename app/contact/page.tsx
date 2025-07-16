import { ContactForm, ContactInfo } from "@/components/contact";
import { FAQSection, HeroSection } from "@/components/contact/sections";

function Contact() {
	return (
		<>
			<HeroSection />
			<section className="py-16">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<ContactForm />
						<ContactInfo />
					</div>
				</div>
			</section>
			<FAQSection />
		</>
	);
}

export default Contact;
