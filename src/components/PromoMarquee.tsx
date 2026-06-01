import React, { useEffect, useState } from 'react';

export default function PromoMarquee() {
  const [index, setIndex] = useState(0);
  const messages = [
    "COMPLIMENTARY WORLDWIDE ARCHIVE SHIPPING ON ORDERS EXCEEDING $150",
    "THE RESORT 2026 COUTURE APPAREL COLLABORATIVE IS NOW OFFLINE & ONLINE",
    "DESIGNED IN LONDON • MADE IN PORTUGAL • EXQUISITE ORGANIC FIBERS"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="w-full bg-[#1A1A1A] text-[#FAF9F6] py-2 px-4 overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase select-none">
        <div className="hidden md:flex gap-4 items-center text-zinc-400">
          <span>CURRENCY: USD ($)</span>
          <span className="w-1 h-1 bg-zinc-500 rounded-full"></span>
          <span>STUDIO: LONDON, UK</span>
        </div>
        
        <div className="mx-auto md:mx-0 transition-opacity duration-500 text-center flex-1">
          <span className="animate-pulse">{messages[index]}</span>
        </div>

        <div className="hidden md:flex gap-4 items-center text-zinc-400">
          <span className="cursor-pointer hover:text-white transition-colors">OUR JOURNAL</span>
          <span className="w-1 h-1 bg-zinc-500 rounded-full"></span>
          <span className="cursor-pointer hover:text-white transition-colors">HELP</span>
        </div>
      </div>
    </div>
  );
}
