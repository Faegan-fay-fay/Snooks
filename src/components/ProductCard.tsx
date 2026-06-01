import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, Search, ShoppingBag } from 'lucide-react';
import { getFallbackProductImage } from '../data';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onQuickAdd: (product: Product, size: string, color: any) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
  onQuickAdd,
  isWishlisted,
  onToggleWishlist,
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [sizeSelection, setSizeSelection] = useState<string>(product.sizes[0] || '');
  const [colorSelection, setColorSelection] = useState<any>(product.colors[0] || null);

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-white border border-[#E2DED5] rounded-none overflow-hidden transition-all duration-500 hover:border-zinc-400"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickAdd(false);
      }}
    >
      {/* Absolute Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.onSale && (
          <span className="bg-rose-600 text-white text-[9px] font-mono tracking-[0.15em] uppercase py-1 px-2.5 shadow-sm font-bold">
            SALE
          </span>
        )}
        {product.isNewArrival && (
          <span className="bg-[#8C7A5F] text-[#FAF9F6] text-[9px] font-mono tracking-[0.15em] uppercase py-1 px-2.5 shadow-sm">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-[#1A1A1A] text-[#FAF9F6] text-[9px] font-mono tracking-[0.15em] uppercase py-1 px-2.5 shadow-sm">
            CLASSIC
          </span>
        )}
        {!product.inStock && (
          <span className="bg-zinc-400 text-white text-[9px] font-mono tracking-[0.15em] uppercase py-1 px-2.5 shadow-sm">
            SOLD OUT
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        id={`wish-btn-${product.id}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleWishlist(product);
        }}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/95 backdrop-blur-xs border border-zinc-100 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 shadow-xs"
        aria-label="Toggle Wishlist"
      >
        <Heart
          id={`wish-icon-${product.id}`}
          className="w-4 h-4"
          fill={isWishlisted ? '#8C7A5F' : 'transparent'}
          color={isWishlisted ? '#8C7A5F' : 'currentColor'}
        />
      </button>

      {/* Image Container with cross-fade */}
      <div
        id={`product-image-container-${product.id}`}
        className="relative overflow-hidden aspect-[4/5] bg-[#F5F4F0] cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = getFallbackProductImage(product.category);
          }}
        />

        {/* Action icons shown on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            id={`quick-preview-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="p-3 bg-white hover:bg-[#8C7A5F] hover:text-white rounded-none border border-zinc-200 shadow-md text-[#1A1A1A] transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            title="Quick View"
          >
            <Search className="w-4 h-4" />
          </button>
          
          {product.inStock && (
            <button
              id={`quick-add-${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
                setShowQuickAdd(true);
              }}
              className={`p-3 bg-white hover:bg-[#1A1A1A] hover:text-white rounded-none border border-zinc-200 shadow-md text-[#1A1A1A] transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-50 ${showQuickAdd ? 'bg-[#1A1A1A] text-white' : ''}`}
              title="Quick Add Options"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Simplified Quick-Add Interactive Selector Overlay */}
        {product.inStock && showQuickAdd && (
          <div
            id={`quick-add-overlay-${product.id}`}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md border-t border-[#E2DED5] p-3 flex flex-col justify-between z-20 shadow-lg transition-all duration-300 select-none"
          >
            {/* Header Area */}
            <div className="flex justify-between items-center mb-1.5 pb-1 border-b border-[#E2DED5]/40">
              <span className="text-[8px] font-mono tracking-widest text-[#8C7A5F] uppercase font-bold">
                QUICK SPECIFICATIONS
              </span>
              <button
                id={`close-quick-add-${product.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQuickAdd(false);
                }}
                className="text-zinc-400 hover:text-black hover:scale-110 p-0.5 text-[9px] font-mono"
                title="Cancel Quick-Add"
              >
                ✕
              </button>
            </div>

            {/* Selected Color Section */}
            <div className="mb-1.5 flex flex-col">
              <div className="flex justify-between text-[8px] font-mono tracking-widest text-zinc-500 mb-1">
                <span>SHADE:</span>
                <span className="text-zinc-800 font-bold uppercase">{colorSelection?.name}</span>
              </div>
              <div className="flex gap-1.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColorSelection(c)}
                    className={`w-3.5 h-3.5 rounded-full ring-offset-1 transition-all duration-200 ${
                      colorSelection?.name === c.name
                        ? `ring-1 ring-[#8C7A5F] border border-white scale-110`
                        : `ring-0 hover:scale-105 border border-zinc-200`
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Selected Size Section */}
            <div className="mb-2.5 flex flex-col">
              <div className="flex justify-between text-[8px] font-mono tracking-widest text-zinc-500 mb-1">
                <span>SIZE:</span>
                <span className="text-zinc-800 font-bold uppercase">{sizeSelection}</span>
              </div>
              <div className="flex flex-wrap gap-1 max-h-[50px] overflow-y-auto pr-0.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSizeSelection(s)}
                    className={`h-5 min-w-[32px] px-1 text-[8px] font-mono border transition-all duration-200 flex items-center justify-center ${
                      sizeSelection === s
                        ? 'border-zinc-950 bg-zinc-950 text-white font-semibold'
                        : 'border-[#E2DED5] text-zinc-650 hover:border-zinc-950 hover:text-black bg-white'
                    }`}
                  >
                    {s.replace('UK ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag Direct CTA */}
            <button
              id={`submit-quick-add-${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd(product, sizeSelection, colorSelection);
                setShowQuickAdd(false);
              }}
              className="w-full bg-[#1A1A1A] hover:bg-[#8C7A5F] text-white text-[8px] font-mono tracking-widest uppercase py-2 transition-colors duration-300 font-semibold"
            >
              ADD TO BAG (${product.price}.00)
            </button>
          </div>
        )}

        {/* List of sizes overlay at bottom (shown when not quick adding) */}
        {product.inStock && !showQuickAdd && (
          <div className="absolute bottom-0 left-0 right-0 py-2 bg-white/90 backdrop-blur-xs text-center border-t border-zinc-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-[9px] font-mono tracking-widest text-[#8C7A5F] block mb-1">SIZES AVAILABLE</span>
            <div className="flex justify-center flex-wrap gap-1 px-2">
              {product.sizes.map((s) => (
                <span key={s} className="text-[9px] font-mono font-medium text-zinc-700 hover:text-black transition-colors">
                  {s.replace('UK ', '')}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Info Content Section */}
      <div id={`product-info-${product.id}`} className="p-5 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-start mb-1 gap-1">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-mono font-bold text-rose-700 tracking-wider uppercase mb-0.5">
              ✦ {product.brand}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#8C7A5F] uppercase">
              {product.subCategory}
            </span>
          </div>
          <div className="flex items-center text-xs text-amber-500 font-mono">
            <span>★</span>
            <span className="text-[10px] font-mono text-zinc-500 ml-0.5">{product.rating}</span>
          </div>
        </div>

        <h3
          id={`product-title-${product.id}`}
          onClick={() => onViewDetails(product)}
          className="text-base font-serif font-semibold tracking-wide text-zinc-900 mb-1.5 hover:text-[#8C7A5F] cursor-pointer transition-colors line-clamp-1"
        >
          {product.name}
        </h3>

        <p className="text-xs text-zinc-500 mb-3.5 line-clamp-2 h-8 leading-relaxed">
          {product.description}
        </p>

        {/* Colors option indicator & Price */}
        <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
          <div className="flex gap-1.5">
            {product.colors.map((c) => (
              <span
                key={c.name}
                className="w-2.5 h-2.5 rounded-full ring-1 ring-zinc-300"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2 font-mono">
            {product.onSale && product.originalPrice && (
              <span className="text-[11px] text-zinc-400 line-through">
                ${product.originalPrice}.00
              </span>
            )}
            <span className={`text-sm font-semibold tracking-wider ${product.onSale ? 'text-rose-600 font-bold' : 'text-[#1A1A1A]'}`}>
              ${product.price}.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
