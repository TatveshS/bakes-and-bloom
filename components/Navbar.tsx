"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "MENU", href: "/menu" },
        { name: "CONTACT", href: "/contact" },
    ];

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-6 flex items-center justify-between ${isScrolled
                ? "bg-cream/90 dark:bg-black backdrop-blur-md border-b border-charcoal/5 dark:border-white/10"
                : "bg-transparent dark:bg-black"
                }`}
        >
            <Link href="/" className="font-script text-3xl text-primary logo-glow leading-none">
                Bakes & Bloom
            </Link>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-display text-[11px] font-black tracking-[0.3em] transition-all hover:tracking-[0.4em] ${pathname === link.href
                                ? "text-primary dark:text-primary"
                                : "text-charcoal dark:text-white hover:text-primary"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button
                    onClick={toggleDarkMode}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal dark:text-white border border-charcoal/10 dark:border-white/20 hover:bg-charcoal/5 dark:hover:bg-white/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">brightness_medium</span>
                </button>
            </div>
        </nav>
    );
}
