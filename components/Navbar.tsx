"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-gray-900">
          Seorang Lee
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:22seorang@gmail.com"
          className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
