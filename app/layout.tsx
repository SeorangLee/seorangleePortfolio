import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seorang Lee — Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, Next.js, and Django. Building SaaS products and real-world web applications. Open to US remote roles.",
  keywords: ["full-stack developer", "React", "Next.js", "Django", "remote", "SaaS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} antialiased bg-white text-gray-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
