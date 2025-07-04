import { Facebook, Instagram, Mail, Twitter } from "@/components/icons";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-auto border-t border-border bg-background text-foreground">
			<div className="container mx-auto px-4 md:px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
					{/* Brand */}
					<div className="space-y-4">
						<Link
							href="/"
							className="inline-block text-xl font-semibold tracking-tight"
						>
							EldoShop
						</Link>
						<p className="text-sm text-muted-foreground">
							Curated minimalist designs for modern living. Quality
							craftsmanship and timeless aesthetics for the discerning customer.
						</p>
						<div className="flex items-center gap-4">
							<a
								href="#"
								aria-label="Instagram"
								className="text-foreground/70 hover:text-foreground transition-colors"
							>
								<Instagram size={20} />
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="text-foreground/70 hover:text-foreground transition-colors"
							>
								<Twitter size={20} />
							</a>
							<a
								href="#"
								aria-label="Facebook"
								className="text-foreground/70 hover:text-foreground transition-colors"
							>
								<Facebook size={20} />
							</a>
							<a
								href="#"
								aria-label="Email"
								className="text-foreground/70 hover:text-foreground transition-colors"
							>
								<Mail size={20} />
							</a>
						</div>
					</div>

					{/* Shop Links */}
					<FooterColumn title="Shop">
						<FooterLink to="/products">All Products</FooterLink>
						<FooterLink to="/products?category=lighting">Lighting</FooterLink>
						<FooterLink to="/products?category=kitchen">Kitchen</FooterLink>
						<FooterLink to="/products?category=home">Home</FooterLink>
						<FooterLink to="/products?category=office">Office</FooterLink>
					</FooterColumn>

					{/* Company Links */}
					<FooterColumn title="Company">
						<FooterLink to="/about">About Us</FooterLink>
						<FooterLink to="/contact">Contact</FooterLink>
						<FooterLink to="/careers">Careers</FooterLink>
						<FooterLink to="/sustainability">Sustainability</FooterLink>
						<FooterLink to="/press">Press</FooterLink>
					</FooterColumn>

					{/* Customer Service Links */}
					<FooterColumn title="Customer Service">
						<FooterLink to="/faq">FAQ</FooterLink>
						<FooterLink to="/shipping">Shipping & Returns</FooterLink>
						<FooterLink to="/warranty">Warranty</FooterLink>
						<FooterLink to="/privacy">Privacy Policy</FooterLink>
						<FooterLink to="/terms">Terms & Conditions</FooterLink>
					</FooterColumn>
				</div>

				{/* Bottom section */}
				<div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {currentYear} EldoShop. All rights reserved.
					</p>
					<div className="flex items-center gap-4">
						<a
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Privacy
						</a>
						<a
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Terms
						</a>
						<a
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

const FooterColumn = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<div>
		<h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
			{title}
		</h3>
		<ul className="space-y-2 text-sm">{children}</ul>
	</div>
);

const FooterLink = ({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) => (
	<li>
		<Link
			href={to}
			className="text-muted-foreground hover:text-foreground transition-colors"
		>
			{children}
		</Link>
	</li>
);
