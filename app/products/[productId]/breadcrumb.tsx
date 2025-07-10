import Link from "next/link";

const Breadcrumb = ({ name }: { name: string }) => {
	return (
		<div className="mb-6">
			<nav className="flex text-sm text-muted-foreground">
				<Link href="/" className="hover:text-foreground">
					Home
				</Link>
				<span className="mx-2">/</span>
				<Link href="/products" className="hover:text-foreground">
					Products
				</Link>
				<span className="mx-2">/</span>
				<span className="text-foreground">{name}</span>
			</nav>
		</div>
	);
};

export default Breadcrumb;
