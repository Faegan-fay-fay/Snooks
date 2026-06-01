import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Sparkles, Sliders, ArrowUpRight, Award } from 'lucide-react';
import { Product } from '../types';
import { getFallbackProductImage } from '../data';

interface SearchToolProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  products: Product[];
  onViewProductDetails: (product: Product) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function SearchTool({
  searchQuery,
  setSearchQuery,
  products,
  onViewProductDetails,
  selectedCategory,
  setSelectedCategory,
}: SearchToolProps) {
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close suggestions card if user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Quick retro tags containing brands, vibes, types
  const SUGGESTED_TAGS = [
    { label: 'NeonWave ⚡', query: 'NeonWave' },
    { label: 'DiscoDaisy 🌸', query: 'DiscoDaisy' },
    { label: 'GroovyThreads ✌️', query: 'GroovyThreads' },
    { label: 'Retro Sneakers 👟', query: 'Sneakers' },
    { label: 'Accessories 🕶️', query: 'Accessories' },
    { label: 'Windbreakers 🧥', query: 'Windbreaker' },
    { label: 'Velvet Bell Bottoms ✨', query: 'Velvet' },
    { label: 'Suede 🐏', query: 'Suede' },
    { label: 'Mustard Gold 🟡', query: 'Mustard' },
    { label: 'Checkerboard 🏁', query: 'Checkerboard' },
  ];

  // Derive filtered live predictions for autocomplete
  const isTyping = searchQuery.trim().length > 0;
  const autocompleteResults = isTyping
    ? products
        .filter((p) => {
          const q = searchQuery.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.subCategory.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
          );
        })
        .slice(0, 6)
    : [];

  const handleTagClick = (query: string) => {
    setSearchQuery(query);
    setIsFocused(false);
    
    // Auto shift category to All if they seek shoes or accessories generally so they see it
    if (query === 'Accessories') {
      setSelectedCategory('Accessories');
    } else if (query === 'Sneakers') {
      setSelectedCategory('Footwear');
    }

    // Scroll slightly to products section to bring results into preview
    const catalogElem = document.getElementById('collection-catalog-head');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="retro-search-tool-widget" className="relative w-full max-w-4xl mx-auto mb-10 mt-4 select-none">
      {/* Container Card with strong 90s retro sticker shadow */}
      <div className="relative bg-white border-2 border-zinc-950 p-4 sm:p-6 shadow-[6px_6px_0px_rgba(26,26,26,1)] transition-all">
        
        {/* Top vibrant Header Badge row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-[9px] font-mono font-bold tracking-[0.2em] bg-rose-500 text-white uppercase border border-zinc-950 animate-pulse">
              LIVE ARCHIVE DETECTOR ⚡
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[8px] font-mono text-zinc-650 bg-amber-100 uppercase border border-amber-300">
              {products.length} Casual Retro Items Loaded
            </span>
          </div>

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[10px] font-mono text-rose-600 hover:text-rose-800 flex items-center gap-1 font-bold underline transition-colors"
            >
              CLEAR QUERY <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Input Bar Section */}
        <div className="flex items-stretch relative border-2 border-zinc-950 bg-zinc-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#8C7A5F]/25 transition-all">
          <div className="p-3.5 flex items-center justify-center bg-yellow-300 border-r-2 border-zinc-950 text-zinc-900">
            <Search className="w-5 h-5 stroke-[2.5]" />
          </div>
          
          <input
            type="text"
            placeholder="Search by brand (e.g. NeonWave, DiscoDaisy), category, color, or style..."
            value={searchQuery}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsFocused(true);
            }}
            className="flex-grow px-4 py-3 bg-transparent text-sm text-zinc-900 placeholder-zinc-500 focus:outline-hidden font-sans font-medium"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-3.5 hover:bg-zinc-100 transition-colors flex items-center justify-center border-l border-zinc-200 text-zinc-400 hover:text-black"
              title="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dynamic Matched Counter underbar */}
        {isTyping && (
          <div className="mt-2 text-[10px] font-mono font-bold text-teal-700 flex items-center gap-1.5 animate-fadeIn">
            <Sparkles className="w-3 h-3 fill-teal-500 text-teal-600" />
            DETECTOR FOUND {products.filter(p => {
              const q = searchQuery.toLowerCase();
              return p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.subCategory.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
            }).length} PERFECT RETRO MATCHES OUT OF {products.length} AVAILABLE ITEMS!
          </div>
        )}

        {/* Quick Style Tags selection (vibrant retro chips) */}
        <div id="retro-quick-tags" className="mt-4 pt-4 border-t border-dashed border-zinc-200">
          <span className="text-[10px] font-mono tracking-wider text-zinc-400 block mb-2 uppercase">
            ⚡ CLICK INSTANT DETECT FILTER TAGS:
          </span>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_TAGS.map((tag) => {
              const isActive = searchQuery.toLowerCase() === tag.query.toLowerCase();
              return (
                <button
                  key={tag.label}
                  onClick={() => handleTagClick(tag.query)}
                  className={`px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-zinc-950 text-white border-2 border-zinc-950 scale-105 shadow-[2px_2px_0px_rgba(239,68,68,1)]'
                      : 'bg-zinc-100 border border-zinc-300 text-zinc-800 hover:bg-yellow-100 hover:border-zinc-950 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Autocomplete suggestions dropdown overlay */}
        {isFocused && isTyping && autocompleteResults.length > 0 && (
          <div
            ref={dropdownRef}
            className="absolute left-0 right-0 top-full mt-2.5 bg-white border-2 border-zinc-950 p-3 shadow-[8px_8px_0px_rgba(0,0,0,1)] z-40 animate-fadeIn"
          >
            <div className="flex items-center justify-between border-b pb-2 mb-2 border-dashed border-zinc-200">
              <span className="text-[10px] font-mono tracking-widest text-[#8C7A5F] font-bold uppercase flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5 text-[#8C7A5F]" /> DYNAMIC SUGGESTIONS
              </span>
              <span className="text-[9px] font-mono text-zinc-400">
                CLICK ITEM TO EXPLORE DIRECTLY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {autocompleteResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onViewProductDetails(product);
                    setIsFocused(false);
                  }}
                  className="flex items-center gap-3 p-2 bg-zinc-50 hover:bg-rose-50/55 border border-zinc-200 hover:border-[#8C7A5F] cursor-pointer transition-all duration-200 group"
                >
                  <div className="w-10 h-12 bg-zinc-200 border border-zinc-300 flex-shrink-0 overflow-hidden relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = getFallbackProductImage(product.category);
                      }}
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-baseline justify-between gap-1">
                      <span className="text-[9px] font-mono font-bold text-rose-700 tracking-wider hover:underline uppercase block">
                        ✦ {product.brand}
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-900 whitespace-nowrap">
                        ${product.price}
                      </span>
                    </div>
                    <span className="block text-xs font-serif font-bold text-zinc-950 group-hover:text-[#8C7A5F] transition-colors line-clamp-1">
                      {product.name}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400 block uppercase">
                      {product.category} • {product.subCategory}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-rose-600 transition-colors flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* Quick redirect tag helper */}
            <div className="mt-3 pt-2 border-t border-dashed border-zinc-200 text-center ">
              <span className="text-[9px] font-mono text-zinc-500">
                Don&apos;t see what you want? Try pressing <b className="text-zinc-900">ENTER</b> to see the entire grid filtered instantly.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
