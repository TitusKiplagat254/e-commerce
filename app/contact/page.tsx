import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import FAQ from "./faq";
import Hero from "./hero";

function Contact() {
	return (
		<>
			<Hero />
			<section className="py-16">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<ContactForm />
						<ContactInfo />
					</div>
				</div>
			</section>
			<FAQ />
		</>
	);
}

export default Contact;
