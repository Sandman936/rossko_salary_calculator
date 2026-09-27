import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Rossko | Калькулятор стоимости выполнения операций",
	description: "Калькулятор стоимости выполнения операций на складе Rossko г.Подольск",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} h-full`}>
			<body className="h-full flex flex-col flex-start">{children}</body>
		</html>
	);
}
