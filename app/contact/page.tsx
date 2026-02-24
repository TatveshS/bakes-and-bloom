export default function Contact() {

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-cream">
            {/* Top Decoration */}
            <div className="absolute top-0 left-0 w-full h-32 opacity-10 pointer-events-none">
                <svg className="w-full h-full fill-primary" viewBox="0 0 100 20">
                    <path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="0.1"></path>
                </svg>
            </div>

            <header className="pt-24 pb-12 px-6 text-center z-10">
                <div className="inline-block relative">
                    <img
                        alt="Bakes & Bloom Logo Flourish"
                        className="w-24 h-24 mx-auto mb-6 opacity-80"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwdagWOlRAR9iZJ2tbZYo_wHZfyUeRIpMI5rU8nywdhMqbhxHjxbOsnfaqORYsEqZWhY55nbQteAjY-I_wg1I8QdF9UCQwP5rYRd1JZZfQGHiMHF9TvxbE-na3-Y0PUkZxKyzaRFPmPR0Gr7xxva5b3tZqyfsGEEwd1aR8DvY-KeFUjxIi9U7VUK9pBKmQkyVRd0NCIlBhhwos7h7TiqkrNg98kv0AL_A6ZzHvVSpIQFTeMSDBwtbVYl2_vrKQIyFZlKoQSwqCEKle"
                    />
                    <h1 className="font-script text-7xl md:text-8xl text-charcoal mb-4 logo-glow">Bakes & Bloom</h1>
                    <p className="font-playfair tracking-[0.5em] text-[12px] md:text-sm text-charcoal/40 uppercase font-black">Luxury Botanical Bakery</p>
                </div>
            </header>

            <main className="flex-grow px-6 pb-20 z-10 max-w-2xl mx-auto w-full space-y-20">
                {/* Contact info grid-like focus */}
                <section className="text-center space-y-16">
                    <a className="flex flex-col items-center group transition-transform hover:scale-105" href="tel:6301488587">
                        <span className="material-symbols-outlined text-primary mb-4 text-4xl font-light">call</span>
                        <span className="font-libre font-black text-3xl tracking-tight text-charcoal group-hover:text-primary transition-colors">+91 63014 88587</span>
                        <span className="font-source text-[11px] uppercase tracking-[0.4em] text-primary/60 mt-2 font-black">Advance Booking Required</span>
                    </a>

                    <a className="flex flex-col items-center group transition-transform hover:scale-105" href="mailto:orders@bakesandbloom.com">
                        <span className="material-symbols-outlined text-primary mb-4 text-4xl font-light">mail</span>
                        <span className="font-libre font-black text-2xl text-charcoal tracking-wide group-hover:text-primary transition-colors">orders@bakesandbloom.com</span>
                    </a>

                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-primary mb-4 text-4xl font-light">location_on</span>
                        <address className="not-italic font-source font-medium text-lg md:text-xl leading-relaxed text-charcoal max-w-[320px]">
                            24/B, Lavelle Road,<br />
                            Near Bangalore Club, Ashok Nagar,<br />
                            Bengaluru - 560001
                        </address>
                    </div>
                </section>


                {/* Instagram focus */}
                <section className="pt-16 border-t border-charcoal/5">
                    <div className="thin-line mb-12"></div>
                    <a className="flex flex-col items-center group" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg className="w-10 h-10 text-charcoal mb-6 opacity-80 group-hover:text-primary group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                        <span className="font-playfair text-[13px] tracking-[0.6em] text-charcoal uppercase font-black">Follow us on Instagram</span>
                    </a>
                    <div className="thin-line mt-12"></div>
                </section>
            </main>

            {/* Decorative Ornaments */}
            <div className="fixed top-0 left-0 p-6 pointer-events-none opacity-[0.05]">
                <img alt="Decoration" className="w-32 h-32" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN27zjNmdPZO5OO-Wpevqb7cvLwbyPBrPLyCfVkCv4hsq0ODye0ZB4J1T7oCsR9C_nnuomrliYA2_Fxrkkxca3TT4xUS-rGBsSEnwbkbjUwrWYl6fV_VdtJWAUxPO1YJ7WsrX-T06wZnlLHJV2RA2MXfrXPCqIMhp9KO-D7lOUMvk6w7BBGalZAWZzmEwOm87K5jLZRvWMARi1zUIlscWzE902YksufR7U4wc_IgjYIXzdjJITYouopwppgO70qfWGNh1N0dbuGppI" />
            </div>
            <div className="fixed bottom-0 right-0 p-6 pointer-events-none opacity-[0.05]">
                <img alt="Decoration" className="w-32 h-32 -scale-x-100 rotate-180" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY999gOpXuqaq_fmeBxGlXfayhHSlheZQ9JIts5_wJjKn761nWNFAUrNAGVDs-GKnR4BbqWgTLg4D8fgzvPZ-SALwRAe0ZUf-sOTZ2jI64Juv6Q7WKW2y-sg9k_8Ucojj9UpZZKhCHn13zRqHXXKt0yKB1xvJ7ZwT3mB7ZQbX-x-avFWJocsKdXE-VJen1LGpb_zqJ2sKysozT6d8SFBdx2BmJzBCo3IAu_tHhVX6a95yBkgWkSBeGEWhNXg7mQtDB2u8AdtZlS3f0" />
            </div>
        </div>
    );
}
