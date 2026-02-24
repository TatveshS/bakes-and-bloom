import Link from "next/link";

export default function Home() {
  const bestSellers = [
    {
      name: "Banana Walnut Cake",
      price: "₹500",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyvH-TcK3W-NbpaphWvVPBOZQjhRF1e9ahiRgkqMsKgPzv-7zElKb98pMO4rEGKWo4lEVYGZVKdTZNFhhBMxE5FHimjjLDhzDuj8IcPLfCNTJg711Jp4hnV-3xrFXHg69msnEMzFTgPVwzSbhPmbBWIGhe_skfmSl_itfvu4bm9JKf3nRJFBluF1Is6WAw-ByTgH-rY4u1QUMYnP3zpejNBAoL4KKzXkL2ptm06cFA8d74Ie77p4rlkjyauDMWdJZDD70PNqTB9eN5",
    },
    {
      name: "Rose Tres Leches",
      price: "₹350",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ygCXfkqML0_An2e1ALf9s77t615pGEw4lxyHyWsyiARIb43RPAWP_Ms65PwO9MUldUHy9i6eeMNd3Ttc5ci4kQA4Jg-vzniStvYy4x189xi_suEyHjsAhOGF6avovhn_zZxqSgIX4kfbuYxBehars25yNZMdb3LnT9JSntvLBsUQ0JfUzSH2a7-qnzcXJWCtK5OUSSydaFwNx-TZg3U55K5ny4SUbeFG0lhopM4RhWCHIGyZUIhgf8g31115h58wc50JSfNwXYMn",
    },
    {
      name: "Choco Chip Muffins",
      price: "₹450",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnv_o6J5QvU2jXPUsvgHNruRahcNZ8Xm818B26igFMakqFX5T53q2GGtVBJW_7rFNDa4uqN_r2c3BYeDpX8JHLpxQvLlZSghKp1NrXXFt1rtKKks0ZmVwbGnfEQhajbsDMu9LFn1mPjcxZYc8e30qNNZVca2MXgW1nI5FazEd3YO-3wxjw3wW4gCdNxKb7EZ4PJeiKIsnssFg3FkR4JWz4v8PeAsdiIqpNiB4vvuefUAW_uXu-Z67H8JPVCupJwbPGLNDx1Ai_Rzc5",
    },
  ];

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <header className="pt-24 pb-16 px-6 text-center border-b border-charcoal/5">
        <div className="mb-6">
          <span className="material-symbols-outlined text-primary text-5xl">flare</span>
        </div>
        <h1 className="font-script text-[8rem] md:text-[12rem] text-primary logo-glow leading-none mb-4">
          Bakes & Bloom
        </h1>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="h-[2px] w-16 bg-primary"></div>
          <p className="font-playfair text-lg font-black tracking-[0.5em] text-primary">BY AMMU</p>
          <div className="h-[2px] w-16 bg-primary"></div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="px-8 pt-20 pb-20 text-center">
        <h2 className="font-playfair font-black text-4xl md:text-5xl mb-8 text-charcoal leading-tight uppercase tracking-tight max-w-2xl mx-auto">
          Exquisite Eggless Bakes <br />
          <span className="text-primary italic normal-case tracking-normal block mt-2">• Made at Home •</span>
        </h2>
        <p className="font-source font-medium text-xl leading-relaxed mb-12 text-charcoal/80 max-w-[400px] mx-auto">
          100% Egg-Free, Luxurious Treats Freshly Baked with the finest ingredients.
        </p>
        <Link
          href="/menu"
          className="inline-block w-full max-w-sm py-6 bg-charcoal text-primary font-lato font-bold tracking-[0.3em] text-lg hover:bg-black transition-all shadow-2xl active:scale-[0.98] rounded-sm"
        >
          VIEW MENU
        </Link>
      </section>

      {/* Story Section */}
      <section className="px-10 py-24 bg-white/40 border-y border-charcoal/5">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-10">
            <span className="material-symbols-outlined text-primary text-4xl">eco</span>
          </div>
          <h3 className="font-playfair font-black text-2xl tracking-[0.3em] text-charcoal mb-10 uppercase">Our Story</h3>
          <p className="font-libre font-bold italic text-2xl md:text-3xl leading-relaxed text-charcoal">
            &quot;Crafting sweetness with a dash of soul. Our bakes are designed for celebrations that demand elegance and home-made warmth.&quot;
          </p>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h3 className="font-playfair font-black text-2xl tracking-[0.3em] text-charcoal uppercase">Best Sellers</h3>
          <div className="h-[4px] w-24 bg-primary mt-6"></div>
        </div>

        <div className="flex overflow-x-auto gap-10 pb-12 scroll-hide snap-x px-4">
          {bestSellers.map((item) => (
            <div key={item.name} className="min-w-[320px] snap-center group">
              <div className="aspect-[3/4] relative overflow-hidden shadow-2xl mb-6 bg-charcoal/5">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={item.image}
                />
              </div>
              <div className="text-center">
                <h4 className="font-libre font-black text-2xl text-charcoal mb-2">{item.name}</h4>
                <p className="text-primary font-lato font-bold text-xl">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Whatsapp Orders Banner - Background Removed */}
      <section className="mx-6 mb-20 py-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="relative z-10">
          <h4 className="font-lato font-bold text-sm tracking-[0.4em] text-primary mb-6 uppercase">Whatsapp Orders</h4>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">chat_bubble</span>
            <span className="font-playfair font-black text-3xl md:text-4xl text-charcoal">+91 6301488587</span>
          </div>
          <p className="text-[12px] font-source font-bold tracking-[0.4em] text-charcoal/50 uppercase whitespace-nowrap">Advance Booking Required</p>
        </div>
      </section>
    </div>
  );
}
