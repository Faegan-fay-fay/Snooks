import React from 'react';
import { ShieldCheck, Leaf, Heart } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="elara-journal-story" className="py-20 md:py-28 bg-[#FAF6F0] border-t border-b border-[#E2DED5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left Side: Large typography / editorial intro */}
        <div className="flex flex-col space-y-6">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#8C7A5F] uppercase block">
            THE ARCHIVE MANIFESTO
          </span>
          
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] leading-[1.15] font-light">
            Slow clothing, tailored footwear, <span className="italic font-normal">made for decades.</span>
          </h2>
          
          <p className="text-sm font-sans text-zinc-650 leading-relaxed">
            At Snooks, we reject the high-volume velocity of modern commercial schedules. 
            We organize our production chronologies directly with heritage workshops in Porto, Lisbon, and Milan, 
            producing only what is requested in numbered, low-impact batches.
          </p>
          
          <p className="text-sm font-sans text-zinc-650 leading-relaxed">
            Every sole is stitched with Goodyear welts. Every garment is woven from zero-pesticide organic linens and high-grade Mongolian cashmines, 
            crafted to soften and mold gracefully to your journey with each passing year.
          </p>

          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E2DED5]">
            <div className="flex flex-col space-y-2">
              <span className="text-xl md:text-2xl font-serif text-zinc-950 font-bold">100%</span>
              <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">ETHICAL DISPATCH</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-xl md:text-2xl font-serif text-zinc-950 font-bold">280gsm</span>
              <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">HEAVYWEIGHT COTTONS</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-xl md:text-2xl font-serif text-zinc-950 font-bold">Porto</span>
              <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">HERITAGE ATELIERS</span>
            </div>
          </div>
        </div>

        {/* Right Side: Split grid image presentation with hover styling */}
        <div id="story-visuals" className="grid grid-cols-12 gap-4 relative">
          <div className="col-span-8 overflow-hidden aspect-[4/5] bg-zinc-200 border border-[#E2DED5] shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=400&auto=format&fit=crop"
              alt="Artisanal leather shoemaking tools"
              className="w-full h-full object-cover transition-transform duration-[1500s] ease-out group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="col-span-4 self-end overflow-hidden aspect-[3/4] bg-zinc-100 border border-[#E2DED5] absolute -right-4 -bottom-4 md:-right-8 shadow-2xl group w-44 md:w-56 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=300&auto=format&fit=crop"
              alt="High fashion garment folding detailed view"
              className="w-full h-full object-cover transition-transform duration-[1200s] ease-out group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Trust factors highlights bar */}
      <div id="trust-factors-row" className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 md:mt-24 pt-12 border-t border-[#E2DED5]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white border border-[#E2DED5] text-[#8C7A5F] rounded-none">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">UNCOMPROMISING TRANSPARENCY</h4>
            <p className="text-[11px] font-sans text-zinc-500 leading-relaxed">
              We list the exact origins of fiber crops, chemical-free dye batches, and the wages paid to the craftsmen who compiled your piece.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-white border border-[#E2DED5] text-[#8C7A5F] rounded-none">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">CLIMATE RESPONSIBLE DISPATCH</h4>
            <p className="text-[11px] font-sans text-zinc-500 leading-relaxed">
              Our packaging is entirely plastic-free, water-soluble, and compostable. We actively offset all flight and logistic routes twice over.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-white border border-[#E2DED5] text-[#8C7A5F] rounded-none">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">LIFETIME REPAIR ARCHIVE</h4>
            <p className="text-[11px] font-sans text-zinc-500 leading-relaxed">
              All Goodyear-welted footwear and structured coats are eligible for complimentary in-house resoling or stitch repair for 30 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
