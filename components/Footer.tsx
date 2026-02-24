import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-auto pt-20 pb-12 px-8 text-center bg-white/50 dark:bg-black border-t border-charcoal/5 dark:border-white/10 relative transition-colors duration-300">
            <div className="flex justify-center space-x-10 mb-10">
                <Link href="#" className="text-charcoal dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                </Link>
                <Link href="#" className="text-charcoal dark:text-white hover:text-primary dark:hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                </Link>
                <Link href="#" className="text-charcoal dark:text-white hover:text-primary dark:hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-2xl">call</span>
                </Link>
            </div>
            <p className="font-playfair font-bold italic text-base mb-6 text-charcoal dark:text-white">Perfect for Celebrations, Gifting & Sweet Indulgence</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] font-black tracking-widest text-primary uppercase">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">celebration</span> Birthdays
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">featured_seasonal_and_gifts</span> Return Gifts
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">favorite</span> Weddings
                </div>
            </div>
            <div className="mt-12 text-charcoal/40 dark:text-white/20 text-[10px] font-lato font-bold tracking-widest uppercase">
                © 2024 Bakes & Bloom Bakery. All rights reserved.
            </div>

            <div className="absolute top-10 right-10 p-4 opacity-10 dark:opacity-20 pointer-events-none">
                <span className="material-symbols-outlined text-7xl text-charcoal dark:text-white">local_florist</span>
            </div>
            <div className="absolute top-10 left-10 p-4 opacity-10 dark:opacity-20 pointer-events-none">
                <span className="material-symbols-outlined text-7xl text-charcoal dark:text-white">local_florist</span>
            </div>
        </footer>
    );
}
