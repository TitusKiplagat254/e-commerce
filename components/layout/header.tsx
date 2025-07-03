"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { Menu, Search, ShoppingBag, User, X } from "@/components/icons";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
	{ name: "home", to: "/" },
	{ name: "shop", to: "/shop" },
	{ name: "about", to: "/about" },
	{ name: "contact", to: "/contact" },
];

const Header = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = useCallback(() => setIsMenuOpen(false), []);

	const cartCount = 1;

	return (
		<header className="bg-white/80 backdrop-blur-md border-b border-white/20 py-3 transition-all duration-300">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex justify-between items-center">
					<Link
						href="/"
						className="text-xl md:text-2xl font-semibold tracking-tight hover:opacity-80"
					>
						EldoShop
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-1">
						{navLinks.map(({ name, to }) => (
							<NavLink key={name} href={to} active={pathname === to}>
								{name}
							</NavLink>
						))}
					</nav>

					{/* Desktop icons */}
					<div className="hidden md:flex items-center gap-1">
						<Button variant="ghost" size="icon" aria-label="Search">
							<Search className="h-5 w-5" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							asChild
							aria-label="User account"
						>
							<Link href="/login">
								<User className="h-5 w-5" />
							</Link>
						</Button>
						<CartButton count={cartCount} />
					</div>

					{/* Mobile menu toggler */}
					<div className="flex md:hidden items-center gap-2">
						<CartButton count={cartCount} />
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsMenuOpen((prev) => !prev)}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && <MobileMenu onClose={closeMenu} pathname={pathname} />}
		</header>
	);
};

const NavLink = ({
	href,
	children,
	active,
}: {
	href: string;
	children: React.ReactNode;
	active: boolean;
}) => (
	<Link
		href={href}
		className={cn(
			"px-3 py-2 text-sm font-medium capitalize rounded-md transition-colors",
			active
				? "text-primary"
				: "text-foreground/80 hover:text-foreground hover:bg-secondary",
		)}
		aria-current={active ? "page" : undefined}
	>
		{children}
	</Link>
);

const MobileMenu = ({
	pathname,
	onClose,
}: {
	pathname: string;
	onClose: () => void;
}) => (
	<div className="fixed top-14 inset-x-0 md:hidden bg-white border border-white/20 backdrop-blur-md animate-fade-in z-50">
		<nav className="container px-4 py-4 flex flex-col gap-2">
			{navLinks.map(({ name, to }) => (
				<Link
					key={name}
					href={to}
					onClick={onClose}
					className={cn(
						"px-3 py-3 text-base font-medium capitalize rounded-md transition-colors",
						pathname === to
							? "bg-secondary text-primary"
							: "text-foreground/80 hover:text-foreground hover:bg-secondary",
					)}
					aria-current={pathname === to ? "page" : undefined}
				>
					{name}
				</Link>
			))}
			<div className="pt-4 mt-4 border-t border-border">
				<Button className="w-full" variant="default" asChild>
					<Link href="/login" onClick={onClose}>
						Sign In
					</Link>
				</Button>
			</div>
		</nav>
	</div>
);

const CartButton = ({ count }: { count: number }) => (
	<Button
		variant="ghost"
		size="icon"
		className="relative"
		asChild
		aria-label="Shopping cart"
	>
		<Link href="/cart">
			<ShoppingBag className="h-5 w-5" />
			{count > 0 && (
				<span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
					{count}
				</span>
			)}
		</Link>
	</Button>
);

export default Header;
