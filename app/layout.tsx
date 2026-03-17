import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sierra Lee — Full-Stack Developer",
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
      <body className={`${geist.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
