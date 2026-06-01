import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Star, ShoppingBag, ChevronDown, ChevronUp, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product, Color } from '../types';
import { getFallbackProductImage } from '../data';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToBag: (product: Product, size: string, color: Color, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
  onAddToBag,
  isWishlisted,
  onToggleWishlist,
}: ProductModalProps) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState<Color>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'materials' | 'sizing' | 'returns'>('materials');
  const [expandedSection, setExpandedSection] = useState<string | null>('story');
  const [isAddedSuccessfully, setIsAddedSuccessfully] = useState(false);
  const [errorText, setErrorText] = useState('');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleAdd = () => {
    if (!selectedSize) {
      setErrorText('PLEASE SELECT A SPECIFIC SIZE BEFORE PROCEEDING');
      return;
    }
    setErrorText('');
    onAddToBag(product, selectedSize, selectedColor, quantity);
    setIsAddedSuccessfully(true);
    setTimeout(() => {
      setIsAddedSuccessfully(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 z-50 cursor-pointer backdrop-blur-xs"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
            <motion.div
              id="modal-panel"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="bg-[#FAF9F6] border border-[#E2DED5] w-full max-w-5xl rounded-none shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row relative max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/95 border border-[#E2DED5] text-zinc-800 hover:bg-black hover:text-white transition-all duration-300 z-10 rounded-none shadow-sm cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image Gallery switcher */}
              <div id="modal-gallery-side" className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-white border-r border-[#E2DED5] flex flex-col justify-between overflow-y-auto">
                <div className="relative aspect-[3/4] bg-[#F5F4F0] border border-[#E2DED5] overflow-hidden">
                  <img
                    src={product.images[activeImageIndex] || product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = getFallbackProductImage(product.category);
                    }}
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 border border-[#E2DED5] py-1 px-3 text-[10px] font-mono tracking-wider flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span className="font-bold text-zinc-900">{product.rating}</span>
                    <span className="text-zinc-400">({product.reviewsCount} Reviews)</span>
                  </div>
                </div>

                {/* Thumbnails switcher row */}
                {product.images && product.images.length > 1 && (
                  <div id="modal-thumbnails" className="flex gap-2.5 mt-4 overflow-x-auto pb-2">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        id={`thumbnail-selector-${idx}`}
                        className={`relative w-20 aspect-[3/4] border-2 overflow-hidden hover:opacity-100 transition-all cursor-pointer ${
                          activeImageIndex === idx ? 'border-[#8C7A5F] opacity-100' : 'border-[#E2DED5] opacity-60'
                        }`}
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <img
                          src={img}
                          alt={`${product.name} alternate view ${idx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = getFallbackProductImage(product.category);
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Information Catalog Details */}
              <div id="modal-detail-side" className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-start overflow-y-auto">
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C7A5F] uppercase block">
                      SNOOKS ARCHIVE COLLECTION • {product.category}
                    </span>
                    <span className="inline-block px-2 py-0.5 bg-rose-50 border border-rose-200 text-rose-800 text-[9px] font-mono font-bold tracking-widest rounded-none uppercase">
                      BRAND: {product.brand}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-serif font-bold text-zinc-950 mb-2 leading-tight">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-3">
                    {product.onSale && product.originalPrice && (
                      <>
                        <span className="text-sm font-mono text-zinc-400 line-through">
                          ${product.originalPrice}.00
                        </span>
                        <span className="text-xl font-mono tracking-wider text-rose-600 font-black">
                          ${product.price}.00
                        </span>
                        <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-600 text-white animate-pulse">
                          ARCHIVE SALE
                        </span>
                      </>
                    )}
                    {(!product.onSale || !product.originalPrice) && (
                      <span className="text-xl font-mono tracking-wider text-zinc-900 font-bold">
                        ${product.price}.00
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-px bg-[#E2DED5] my-4" />

                {/* Main mini descriptive story */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {product.longDescription}
                </p>

                {/* Selectors Form */}
                <div className="space-y-6">
                  {/* COLORS Custom Palette Swatches */}
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 block mb-2.5 uppercase">
                      SELECTED SHADE: <span className="font-bold text-zinc-900">{selectedColor.name}</span>
                    </span>
                    <div className="flex gap-3">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c)}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                            selectedColor.name === c.name
                              ? 'border-[#8C7A5F] ring-2 ring-[#8C7A5F]/25 scale-105'
                              : 'border-zinc-300 hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {selectedColor.name === c.name && (
                            <Check className="w-4.5 h-4.5 text-white filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SIZES Custom Squares List */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase block">
                        CHOOSE SIZE: <span className="font-bold text-zinc-900">{selectedSize || 'NOT SELECTED'}</span>
                      </span>
                      <button
                        onClick={() => {
                          setExpandedSection('accordion-sizing');
                          const pricingElem = document.getElementById('accordion-sizing-trigger');
                          if (pricingElem) pricingElem.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-[10px] font-mono text-[#8C7A5F] underline tracking-wider hover:text-[#1A1A1A] transition-colors"
                      >
                        VIEW SIZING CHART
                      </button>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setSelectedSize(s);
                            setErrorText('');
                          }}
                          className={`py-2 px-1 text-xs font-mono border text-center transition-all ${
                            selectedSize === s
                              ? 'border-zinc-950 bg-zinc-900 text-[#FAF9F6] font-semibold'
                              : 'border-[#E2DED5] bg-white text-zinc-800 hover:border-zinc-500 hover:bg-zinc-50'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    {errorText && (
                      <p className="text-[10px] font-mono text-red-600 font-semibold tracking-wider mt-2.5">
                        ⚠ {errorText}
                      </p>
                    )}
                  </div>

                  {/* QUANTITY COUNTER slider */}
                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
                      QUANTITY:
                    </span>
                    <div className="flex items-center border border-[#E2DED5] bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="py-1.5 px-3 hover:bg-zinc-100 font-semibold text-zinc-800 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 text-xs font-mono text-zinc-800 font-bold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="py-1.5 px-3 hover:bg-zinc-100 font-semibold text-zinc-800 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Bags & Wishlist buttons combo */}
                  <div className="grid grid-cols-4 gap-3.5 pt-4">
                    <button
                      id="modal-add-tobag-btn"
                      onClick={handleAdd}
                      className={`col-span-3 py-4 text-center cursor-pointer text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2.5 ${
                        isAddedSuccessfully
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#1A1A1A] hover:bg-[#8C7A5F] text-[#FAF9F6]'
                      }`}
                    >
                      {isAddedSuccessfully ? (
                        <>
                          <Check className="w-4 h-4" />
                          SUCCESSFULLY ADDED
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4.5 h-4.5" />
                          ADD TO ARCHIVE BAG
                        </>
                      )}
                    </button>
                    
                    <button
                      id="modal-wishlist-toggle"
                      onClick={() => onToggleWishlist(product)}
                      className={`py-4 flex items-center justify-center border transition-colors ${
                        isWishlisted
                          ? 'border-[#8C7A5F] bg-[#FAF7F0] text-[#8C7A5F]'
                          : 'border-[#E2DED5] bg-white hover:border-zinc-500 text-zinc-800'
                      }`}
                      title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart
                        className="w-5 h-5"
                        fill={isWishlisted ? '#8C7A5F' : 'transparent'}
                        color={isWishlisted ? '#8C7A5F' : 'currentColor'}
                      />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-[#E2DED5] my-6" />

                {/* Dynamic Accordions Sections (Detailed metadata details, shipping) */}
                <div id="modal-accordions-group" className="divide-y divide-[#E2DED5] text-xs">
                  {/* STORY ACCORDION */}
                  <div className="py-3">
                    <button
                      id="accordion-story-trigger"
                      onClick={() => toggleSection('story')}
                      className="w-full flex justify-between items-center text-left font-serif font-bold text-zinc-950 hover:text-[#8C7A5F] py-1"
                    >
                      <span className="tracking-wide">EXQUISITE MATERIALS & DESIGN CRAFT</span>
                      {expandedSection === 'story' ? <ChevronUp className="w-4.5 h-4.5" /> : <ChevronDown className="w-4.5 h-4.5" />}
                    </button>
                    {expandedSection === 'story' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-2 text-zinc-650 leading-relaxed font-sans space-y-2 pl-1"
                      >
                        <p>Constructed in harmony with ethical, circular fashion standards.</p>
                        <ul className="list-disc pl-4 space-y-1 text-[11px] font-mono text-zinc-500">
                          {product.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* SIZING ACCORDION */}
                  <div className="py-3" id="accordion-sizing">
                    <button
                      id="accordion-sizing-trigger"
                      onClick={() => toggleSection('sizing')}
                      className="w-full flex justify-between items-center text-left font-serif font-bold text-zinc-950 hover:text-[#8C7A5F] py-1"
                    >
                      <span className="tracking-wide">SIZING COMPLEMENTARY SCALE</span>
                      {expandedSection === 'sizing' ? <ChevronUp className="w-4.5 h-4.5" /> : <ChevronDown className="w-4.5 h-4.5" />}
                    </button>
                    {expandedSection === 'sizing' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-2 text-zinc-650 font-sans leading-relaxed pl-1"
                      >
                        <p className="mb-2">This collection runs true to traditional European scale dimensions. If you are half-size, we recommend ordering one unit up for premium fit comfort.</p>
                        <div className="border border-zinc-200 bg-white grid grid-cols-3 divide-x divide-y divide-zinc-200 mt-2 text-center text-[10px] font-mono">
                          <div className="py-1 col-span-1 bg-zinc-50 font-bold">UK SIZE</div>
                          <div className="py-1 col-span-1 bg-zinc-50 font-bold">EU SIZE</div>
                          <div className="py-1 col-span-1 bg-zinc-50 font-bold">US SIZE</div>
                          
                          <div className="py-1">UK 6</div><div className="py-1 font-sans">40</div><div className="py-1">US 7</div>
                          <div className="py-1">UK 7</div><div className="py-1 font-sans">41</div><div className="py-1">US 8</div>
                          <div className="py-1">UK 8</div><div className="py-1 font-sans">42</div><div className="py-1">US 9</div>
                          <div className="py-1">UK 9</div><div className="py-1 font-sans">43</div><div className="py-1">US 10</div>
                          <div className="py-1">UK 10</div><div className="py-1 font-sans">44</div><div className="py-1">US 11</div>
                          <div className="py-1">UK 11</div><div className="py-1 font-sans">45</div><div className="py-1">US 12</div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* DELIVERY AND RETURNS ACCORDION */}
                  <div className="py-3">
                    <button
                      id="accordion-delivery-trigger"
                      onClick={() => toggleSection('delivery')}
                      className="w-full flex justify-between items-center text-left font-serif font-bold text-zinc-950 hover:text-[#8C7A5F] py-1"
                    >
                      <span className="tracking-wide">COMPLIMENTARY SHIPPING & COMPREHENSIVE RETURNS</span>
                      {expandedSection === 'delivery' ? <ChevronUp className="w-4.5 h-4.5" /> : <ChevronDown className="w-4.5 h-4.5" />}
                    </button>
                    {expandedSection === 'delivery' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-2 text-zinc-650 leading-relaxed font-sans pl-1 gap-2 grid grid-cols-1 md:grid-cols-3 text-[11px]"
                      >
                        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                          <Truck className="w-5 h-5 text-[#8C7A5F] mb-1" />
                          <h5 className="font-bold text-zinc-900">Complimentary Shipping</h5>
                          <p className="text-zinc-500">Free courier shipping on order subtotals exceeding $150.</p>
                        </div>
                        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                          <ShieldCheck className="w-5 h-5 text-[#8C7A5F] mb-1" />
                          <h5 className="font-bold text-zinc-900">Secure Dispatch</h5>
                          <p className="text-zinc-500">Shipped with signature required verification to avoid delivery discrepancies.</p>
                        </div>
                        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                          <RefreshCw className="w-5 h-5 text-[#8C7A5F] mb-1" />
                          <h5 className="font-bold text-zinc-900">30-Day Circular Refund</h5>
                          <p className="text-zinc-500">Return items in crisp, uncreased condition within 30 days of arrival.</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
