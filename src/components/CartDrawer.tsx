import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { getFallbackProductImage } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, amount: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  isMember?: boolean;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  isMember = false,
}: CartDrawerProps) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 15;
  
  const memberSavings = isMember ? subtotal * 0.15 : 0;
  const discountedSubtotal = subtotal - memberSavings;
  const estimatedTax = discountedSubtotal * 0.08;
  const total = discountedSubtotal + shippingCost + estimatedTax;

  const awayFromFree = freeShippingThreshold - subtotal;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer panel */}
          <motion.div
            id="cart-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[500px] bg-[#FAF9F6] border-l border-[#E2DED5] shadow-2xl z-50 flex flex-col"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#E2DED5] flex items-center justify-between bg-white">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#8C7A5F]" />
                <h2 className="text-xl font-serif font-semibold tracking-wide text-zinc-900">
                  Your Archive Bag
                </h2>
                <span className="text-xs font-mono bg-[#EFECE6] text-zinc-700 py-0.5 px-2.5 rounded-full">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
                </span>
              </div>
              <button
                id="cart-close-btn"
                onClick={onClose}
                className="p-1.5 hover:bg-zinc-100 rounded-none transition-colors border border-zinc-200"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Shipping Progress Meter */}
            {subtotal > 0 && (
              <div className="bg-[#FAF7F0] border-b border-[#E2DED5] px-6 py-4">
                {isFreeShipping ? (
                  <p className="text-[11px] font-mono tracking-wider text-emerald-700 font-medium">
                    ✦ CONGRATULATIONS! YOU QUALIFY FOR COMPLIMENTARY COUTURIER SHIPPING
                  </p>
                ) : (
                  <div>
                    <p className="text-[11px] font-mono tracking-wider text-[#8C7A5F]">
                      ADD <span className="font-semibold">${awayFromFree.toFixed(2)}</span> MORE FOR FREE ARCHIVE DELIVERY
                    </p>
                    <div className="w-full bg-zinc-200 h-1 mt-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#8C7A5F] h-full transition-all duration-500"
                        style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cart Items Area */}
            <div className="flex-grow overflow-y-auto px-6 py-4 divide-y divide-[#E2DED5]">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center text-zinc-400 select-none">
                  <ShoppingBag className="w-14 h-14 stroke-1 stroke-zinc-300 mb-4 animate-bounce" />
                  <p className="text-lg font-serif">Your cart is currently empty</p>
                  <p className="text-xs font-mono tracking-wide text-zinc-500 mt-1 max-w-xs">
                    Exquisite pieces are awaiting. Add items from the gallery to begin.
                  </p>
                  <button
                    id="cart-shop-now"
                    onClick={onClose}
                    className="mt-6 px-6 py-3 bg-[#1A1A1A] hover:bg-[#8C7A5F] text-[#FAF9F6] text-xs font-mono tracking-[0.2em] uppercase transition-colors"
                  >
                    CONTINUE GALLERY SHOPPING
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="py-5 flex gap-4 bg-transparent">
                    {/* Item Thumbnail */}
                    <div className="w-20 h-24 bg-[#F5F4F0] border border-[#E2DED5] overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = getFallbackProductImage(item.product.category);
                        }}
                      />
                    </div>

                    {/* Meta Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-serif font-semibold text-zinc-950 leading-tight">
                            {item.product.name}
                          </h4>
                          <span className="text-xs font-mono font-bold text-zinc-900 ml-4">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {/* Selected Specs */}
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[11px] font-mono text-zinc-500">
                          <span>Size: <span className="font-semibold text-zinc-800">{item.selectedSize}</span></span>
                          <span className="flex items-center gap-1">
                            Color:
                            <span
                              className="w-2 h-2 rounded-full inline-block"
                              style={{ backgroundColor: item.selectedColor.hex }}
                            />
                            <span className="font-semibold text-zinc-800">{item.selectedColor.name}</span>
                          </span>
                        </div>
                      </div>

                      {/* Controls Row */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E2DED5] bg-white">
                          <button
                            id={`qty-minus-${item.id}`}
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 px-2.5 hover:bg-zinc-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5 text-zinc-500" />
                          </button>
                          <span className="px-3 py-0.5 text-xs font-mono font-medium text-zinc-800 selection:bg-none">
                            {item.quantity}
                          </span>
                          <button
                            id={`qty-plus-${item.id}`}
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 px-2.5 hover:bg-zinc-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5 text-zinc-500" />
                          </button>
                        </div>

                        <button
                          id={`trash-btn-${item.id}`}
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-red-500 p-1.5 hover:bg-red-50 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Calculations & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-[#E2DED5] flex-shrink-0">
                <div id="cart-summary-group" className="space-y-2 mb-6 text-xs font-mono">
                  <div className="flex justify-between text-zinc-500">
                    <span>SELECTION SUBTOTAL</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {isMember && (
                    <div className="flex justify-between text-rose-600 font-bold border-y border-rose-100 py-1.5 bg-rose-50/50 px-1 animate-pulse">
                      <span>✦ VIP CLUB MEMBER (-15%)</span>
                      <span>-${memberSavings.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-zinc-500">
                    <span>COUTURIER SHIPPING</span>
                    <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>ESTIMATED TAX (8.0%)</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                  </div>
                  
                  <div className="h-px bg-[#E2DED5] my-4" />
                  
                  <div className="flex justify-between text-base font-serif font-bold text-zinc-900">
                    <span>TOTAL ESTIMATE</span>
                    <span className="font-mono tracking-wider">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  <button
                    id="cart-checkout-btn"
                    onClick={onCheckout}
                    className="w-full bg-[#1A1A1A] hover:bg-[#8C7A5F] text-[#FAF9F6] py-3.5 text-xs font-mono tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    PROCEED TO SHIPPING
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    id="cart-continue-btn"
                    onClick={onClose}
                    className="w-full bg-transparent hover:bg-zinc-50 border border-[#E2DED5] text-[#1A1A1A] py-2.5 text-xs font-mono tracking-[0.2em] uppercase transition-colors text-center"
                  >
                    CONTINUE GALLERY EXPLORING
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
