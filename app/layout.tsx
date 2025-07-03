import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/layout";

import "@/styles/globals.css";

const inter = Inter({
	variable: "--font-poppins",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "EldoShop – Your One-Stop Online Store",
	description:
		"Discover the best deals on electronics, fashion, home goods, and more. EldoShop delivers quality and convenience right to your door.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>
				<Header />
				<main className="mt-16">{children}</main>
				{/* footer */}
			</body>
		</html>
	);
}
