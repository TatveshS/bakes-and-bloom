export default function Menu() {
    const categories = [
        {
            name: "Eggless Tea Cakes",
            items: [
                { name: "Banana Walnut Cake", price: "₹500" },
                { name: "Banana Choco Chip Cake", price: "₹550" },
                { name: "Dry Fruit Cake", price: "₹550" },
                { name: "Mawa Dry Fruit Cake", price: "₹600" },
                { name: "Chocolate Cake", price: "₹600" },
                { name: "Double Chocolate Cake", price: "₹650" },
                { name: "Coconut Rose Cake", price: "₹550" },
                { name: "Butter Cake", price: "₹500" },
                { name: "Butter Choco Chip Cake", price: "₹550" },
                { name: "Rava Dry Fruit Cake", price: "₹550" },
            ],
        },
        {
            name: "Eggless Tres Leches Tubs",
            items: [
                { name: "Rabdi Tres Leches", price: "₹350" },
                { name: "Rose Tres Leches", price: "₹350" },
                { name: "Rasmalai Tres Leches", price: "₹350" },
                { name: "Mango Tres Leches", price: "₹350" },
            ],
        },
        {
            name: "Eggless Muffins (6 pcs)",
            items: [
                { name: "Banana Choco Chip Muffins", price: "₹400" },
                { name: "Dry Fruit Muffins", price: "₹400" },
                { name: "Butter Choco Chip Muffins", price: "₹450" },
                { name: "Chocolate Muffins", price: "₹400" },
                { name: "Buttery Muffins", price: "₹400" },
            ],
        },
        {
            name: "Eggless Cookies (10 pcs)",
            items: [
                { name: "Butter Cookies", price: "₹250" },
                { name: "Atta Cookies", price: "₹250" },
                { name: "Oats & Jaggery Cookies", price: "₹250" },
                { name: "Butter Choco Chip Cookies", price: "₹300" },
                { name: "Indian Pure Ghee Nankhatai", price: "₹250" },
            ],
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-6 py-20 bg-cream min-h-screen">
            <header className="pt-12 pb-20 text-center relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <h1 className="font-script text-[6rem] md:text-[8rem] text-charcoal leading-none logo-glow">
                            Bakes & Bloom
                        </h1>
                        <div className="h-px w-48 bg-charcoal mx-auto mt-6"></div>
                    </div>
                </div>
                <p className="font-libre italic text-2xl text-charcoal/70 mb-10">by Ammu</p>
                <div className="inline-block border-y-2 border-charcoal/10 py-4 px-10">
                    <h2 className="font-playfair text-lg tracking-[0.4em] uppercase font-black text-charcoal">
                        Exquisite Eggless Bakes <span className="mx-4 text-primary">•</span> Made at Home
                    </h2>
                </div>
            </header>

            <main className="relative z-10 space-y-24">
                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 max-w-3xl mx-auto">
                    <div className="aspect-square rounded-full overflow-hidden border-8 border-charcoal/5 shadow-2xl">
                        <img
                            alt="Tea Cake"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJhQ0I4EI4Si7AUy5DpGuWbLVXkMe9OAypOycipJ-N5rP2rNbD6wwIPyvf69YQDKt3CR-AIVQhEB7KJ1bp5MeYgvskcONTnBPoiDC5MYyD5eVYCsmJHQTylKo0cj2gUVBLLsdXQC3jLJdvXhL0Jn5TLF8-HFYJeVga_Fg4xSq-O9-KIef_KWU2fB1VWVpYreoJRjzbZdUbAA-bL2vFzsuW7lSULz306WykCKLcvxN4XFijOcVSHBWdk_QZ0DJ-bWPMnqMPokBSmCYt"
                        />
                    </div>
                    <div className="aspect-square rounded-full overflow-hidden border-8 border-charcoal/5 shadow-2xl">
                        <img
                            alt="Chocolate Cake"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz8zOlszY12bDT-FL-owzvqTmGn2Uu1EUTDzi3mjpmzkfEXaiQgwmDFD-pVywPBZntnXz5UBBf7MomlcDQqmIIgp5yWqDLam5xqFvVXc_8onxtcR9DWTLwIw4g6bRFQLhHyHHg09zyimWw1PCiXsnL5LwWpqVs1ELzq1chN-wE2In-ooOETNHyJfHTwJpQ3gLcZocXn0QZ08___KHB-7kWb3vCXoqUkbhjZ4nEYvkZvodU964V8nhDgRkX-Ns90tvNFTKI3cU5PlsK"
                        />
                    </div>
                </div>

                {/* Menu Categories */}
                <section className="space-y-20 max-w-2xl mx-auto">
                    {categories.map((category) => (
                        <div key={category.name}>
                            <div className="text-center mb-12">
                                <h3 className="font-playfair text-4xl font-black uppercase tracking-tight text-charcoal inline-block border-b-4 border-primary/20 pb-2">
                                    {category.name}
                                </h3>
                            </div>
                            <ul className="space-y-6">
                                {category.items.map((item) => (
                                    <li key={item.name} className="flex justify-between items-baseline group">
                                        <span className="font-lato text-2xl font-black pr-4 text-charcoal group-hover:text-primary transition-colors">
                                            {item.name}
                                        </span>
                                        <div className="flex-grow mx-4 border-b border-charcoal/10 border-dotted mb-2"></div>
                                        <span className="font-lato font-black text-xl text-primary">
                                            {item.price}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Minimal Order Section */}
                <div className="bg-white/40 p-10 text-center border border-charcoal/10 rounded-[2.5rem] shadow-sm relative max-w-lg mx-auto transition-all duration-300 hover:shadow-md">
                    <div className="flex justify-center mb-6">
                        <svg className="w-10 h-10 text-charcoal/80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.437 2.503 1.144 3.483L6.474 18.5l3.197-1.049a5.727 5.727 0 002.36.52c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm2.843 8.169c-.198.297-.471.516-.84.629-.36.11-.913.14-1.57-.042-.656-.182-1.3-.434-1.996-1.054a6.4 6.4 0 01-1.636-2.185c-.149-.297-.123-.591.018-.84.14-.249.272-.361.372-.472.1-.11.137-.186.198-.297a.384.384 0 000-.372c-.062-.124-.555-1.343-.761-1.841-.2-.486-.407-.423-.556-.431h-.472c-.161 0-.422.062-.644.31-.223.248-.854.85-.854 2.074 0 1.225.892 2.41 1.017 2.571.124.161 1.758 2.684 4.258 3.76.593.255 1.056.408 1.417.525.597.19 1.14.163 1.567.099.477-.07 1.472-.601 1.678-1.182.203-.58.203-1.077.142-1.182-.062-.105-.224-.165-.472-.289zM12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0zm0 21.848a9.87 9.87 0 01-5.035-1.381l-.361-.214-3.741.983.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
                        </svg>
                    </div>
                    <p className="font-playfair text-xl mb-4 tracking-[0.2em] uppercase font-black text-charcoal/80">Order via WhatsApp</p>
                    <div className="flex items-center justify-center mb-8">
                        <span className="font-lato text-4xl font-black tracking-tight text-charcoal">+91 63014 88587</span>
                    </div>
                    <div className="bg-charcoal text-cream py-3 px-8 inline-block rounded-full shadow-lg">
                        <p className="font-source font-bold text-xs uppercase tracking-[0.3em]">Advance Booking Required</p>
                    </div>
                </div>

            </main>
        </div>
    );
}
