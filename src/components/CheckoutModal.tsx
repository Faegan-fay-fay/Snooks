import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, Shield, Truck, Sparkles, ShoppingBag, ArrowLeft, CheckCircle2, Copy } from 'lucide-react';
import { CartItem } from '../types';
import { getFallbackProductImage } from '../data';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onClearCart: () => void;
  isMember?: boolean;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
  isMember = false,
}: CheckoutModalProps) {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation, 4: Success
  const [orderId, setOrderId] = useState('');

  // Form states
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : 15;
  const memberSavings = isMember ? subtotal * 0.15 : 0;
  const discountedSubtotal = subtotal - memberSavings;
  const estimatedTax = discountedSubtotal * 0.08;
  const total = discountedSubtotal + shippingCost + estimatedTax;

  // Formatting helpers
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    const matches = value.match(/\d{1,4}/g);
    const formatted = matches ? matches.join(' ') : '';
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 2) {
      setCardExpiry(`${value.slice(0, 2)}/${value.slice(2)}`);
    } else {
      setCardExpiry(value);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) value = value.slice(0, 3);
    setCardCvv(value);
  };

  const validateShippingForm = () => {
    if (!email || !firstName || !lastName || !address || !city || !postalCode) {
      setErrorMsg('PLEASE COMPLETE ALL MANDATORY DISPATCH FIELDS');
      return false;
    }
    if (!email.includes('@')) {
      setErrorMsg('PLEASE PROVIDE A VALID COUTURIER EMAIL PATHWAY');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const validatePaymentForm = () => {
    if (!cardName || cardNumber.length < 19 || cardExpiry.length < 5 || cardCvv.length < 3) {
      setErrorMsg('INVALID CREDENTIALS PROVIDED FOR BILLING DISPATCH');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const triggerPaymentProcessing = () => {
    if (!validatePaymentForm()) return;
    setStep(3); // Go to final confirmation preview
  };

  const finalizePurchase = () => {
    const randomReceipt = `ELR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(randomReceipt);
    setStep(4); // Order Success!
  };

  const completeAndExit = () => {
    onClearCart();
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="checkout-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={step === 4 ? completeAndExit : onClose}
            className="fixed inset-0 bg-neutral-950/85 z-50 cursor-pointer"
          />

          {/* Checkout Frame */}
          <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
            <motion.div
              id="checkout-panel"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 30, stiffness: 220 }}
              className="bg-[#FAF9F6] border border-[#E2DED5] w-full max-w-4xl rounded-none shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close button - hidden in success screen to force proper exit hook */}
              {step !== 4 && (
                <button
                  id="checkout-close"
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/95 border border-[#E2DED5] text-zinc-800 hover:bg-black hover:text-white transition-all duration-300 z-10 rounded-none cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Main functional form side */}
              <div id="checkout-form-column" className="w-full md:w-[58%] p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-start">
                {/* Steps Headers Indicators */}
                {step !== 4 && (
                  <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#8C7A5F] mb-6 select-none uppercase">
                    <span className={step === 1 ? 'font-bold text-zinc-950 underline' : 'text-zinc-400'}>01 DISPATCH</span>
                    <span>/</span>
                    <span className={step === 2 ? 'font-bold text-zinc-950 underline' : 'text-zinc-400'}>02 PAYMENT</span>
                    <span>/</span>
                    <span className={step === 3 ? 'font-bold text-zinc-950 underline' : 'text-zinc-400'}>03 ARCHIVE SUMMARY</span>
                  </div>
                )}

                {/* ERROR NOTIFIER */}
                {errorMsg && (
                  <div className="mb-5 p-3.5 bg-red-50/90 border border-red-200 text-red-700 text-[10px] font-mono font-semibold uppercase tracking-wider">
                    ⚠ {errorMsg}
                  </div>
                )}

                {/* STEP 1: SHIPPING */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-serif font-bold text-zinc-950 mb-1.5">
                      Dispatch Coordinates
                    </h2>
                    <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                      Please enter your shipping coordinates below. We use tracked, signature-required luxury logistics.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">EMAIL PATHWAY *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="vogue@snooks.com"
                          className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-sans placeholder-zinc-350"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">FIRST NAME *</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Alex"
                            className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-sans"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">LAST NAME *</label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Sloane"
                            className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">DELIVERY ADDRESS *</label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="742 Couture Boulevard, Apt 4C"
                          className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-sans"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-1.5">
                          <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">CITY *</label>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="New York"
                            className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-sans"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">POSTAL CODE *</label>
                          <input
                            type="text"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            placeholder="10001"
                            className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">COUNTRY *</label>
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full bg-white border border-[#E2DED5] p-3 text-xs focus:border-zinc-950 focus:outline-hidden font-sans h-[46px]"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Japan</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">CONTACT PHONE (OPTIONAL)</label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 555-0199"
                          className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-mono"
                        />
                      </div>
                    </div>

                    <button
                      id="shipping-next"
                      onClick={() => {
                        if (validateShippingForm()) setStep(2);
                      }}
                      className="w-full mt-8 bg-[#1A1A1A] hover:bg-[#8C7A5F] text-white py-3.5 text-xs font-mono tracking-[0.2em] uppercase transition-colors text-center cursor-pointer"
                    >
                      CONTINUE TO BILLING DETAILS
                    </button>
                  </div>
                )}

                {/* STEP 2: PAYMENT */}
                {step === 2 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={() => setStep(1)}
                        className="p-1 hover:bg-zinc-100 border border-zinc-200"
                        title="Back to shipping"
                      >
                        <ArrowLeft className="w-4 h-4 text-zinc-800" />
                      </button>
                      <h2 className="text-xl font-serif font-bold text-zinc-950">
                        Secure Vault Billing
                      </h2>
                    </div>
                    <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                      Payments are processed through standard premium encrypted pipelines. No physical card files are stored.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">HOLDER NAME *</label>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value.toUpperCase())}
                          placeholder="ALEX SLOANE"
                          className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-mono"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">CARD IDENTIFY NUMBER *</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="4000 1234 5678 9010"
                            className="w-full bg-white border border-[#E2DED5] p-3 pr-10 text-sm focus:border-zinc-950 focus:outline-hidden font-mono"
                          />
                          <CreditCard className="w-4.5 h-4.5 text-zinc-400 absolute right-3.5 top-3.5" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">VALID THRU (MM/YY) *</label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={handleExpiryChange}
                            placeholder="12/28"
                            className="w-full bg-white border border-[#E2DED5] p-3 text-sm focus:border-zinc-950 focus:outline-hidden font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono tracking-widest text-zinc-500 block mb-1 uppercase">CVV SECURITY *</label>
                          <input
                            type="password"
                            value={cardCvv}
                            onChange={handleCvvChange}
                            placeholder="•••"
                            className="w-full bg-white border border-[#E2DED5] p-3 text-xs focus:border-zinc-950 focus:outline-hidden font-mono tracking-[0.3em]"
                          />
                        </div>
                      </div>

                      <div className="p-3 bg-zinc-50 border border-zinc-200 flex items-center gap-2.5 rounded-none text-[10px] text-zinc-400 font-mono">
                        <Shield className="w-4.5 h-4.5 text-[#8C7A5F] flex-shrink-0" />
                        <span>SSL ENCRYPTION • 256-BIT • DATA DISPATCH SECURED BY COUTURIER TRUST</span>
                      </div>
                    </div>

                    <button
                      id="payment-next"
                      onClick={triggerPaymentProcessing}
                      className="w-full mt-8 bg-[#1A1A1A] hover:bg-[#8C7A5F] text-white py-3.5 text-xs font-mono tracking-[0.2em] uppercase transition-colors text-center cursor-pointer"
                    >
                      PREVIEW COMPREHENSIVE ORDER
                    </button>
                  </div>
                )}

                {/* STEP 3: CONFIRM PREVIEW */}
                {step === 3 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={() => setStep(2)}
                        className="p-1 hover:bg-zinc-100 border border-zinc-200"
                        title="Back to payment"
                      >
                        <ArrowLeft className="w-4 h-4 text-zinc-800" />
                      </button>
                      <h2 className="text-xl font-serif font-bold text-zinc-950">
                        Final Integrity Validation
                      </h2>
                    </div>
                    <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                      Please verify your dispatch addresses and totals before finalize. Your card will be simulated to complete the cycle.
                    </p>

                    <div className="space-y-4 border border-[#E2DED5] bg-white p-5 text-xs font-mono divide-y divide-zinc-200">
                      <div>
                        <h4 className="text-[10px] font-bold text-zinc-400 mb-2 uppercase">DISPATCH VECTOR</h4>
                        <div className="text-zinc-700 leading-relaxed font-sans">
                          <p className="font-semibold text-zinc-900">{firstName} {lastName}</p>
                          <p>{address}</p>
                          <p>{city}, {postalCode}</p>
                          <p>{country}</p>
                          <p className="text-zinc-500 font-mono text-[11px] mt-1">Pathway: {email}</p>
                        </div>
                      </div>

                      <div className="pt-3">
                        <h4 className="text-[10px] font-bold text-zinc-400 mb-2 uppercase">BILLING SOURCE</h4>
                        <div className="text-zinc-700 leading-relaxed text-[11px]">
                          <p>CARDHOLDER: <span className="text-zinc-900 font-semibold">{cardName}</span></p>
                          <p>IDENTIFICATION: <span className="text-zinc-900 font-semibold">•••• •••• •••• {cardNumber.slice(-4)}</span></p>
                        </div>
                      </div>

                      <div className="pt-3">
                        <h4 className="text-[10px] font-bold text-zinc-400 mb-2 uppercase">ESTIMATED LOGISTICS</h4>
                        <div className="text-zinc-700 font-sans leading-relaxed">
                          <p>Luxury tracked dispatch carrier</p>
                          <p className="text-[#8C7A5F] font-mono text-[11.5px] font-semibold mt-1">✦ ARRIVING VIA DHL: 3-5 BUSINESS DISPATCHES</p>
                        </div>
                      </div>
                    </div>

                    <button
                      id="checkout-finalize-btn"
                      onClick={finalizePurchase}
                      className="w-full mt-8 bg-emerald-800 hover:bg-emerald-900 text-white py-4 text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 text-center flex items-center justify-center gap-2.5 font-bold cursor-pointer shadow-lg"
                    >
                      <Sparkles className="w-4 h-4" />
                      FINALIZE & PLACE ARCHIVE ORDER
                    </button>
                  </div>
                )}

                {/* STEP 4: SUCCESS RECEIPT */}
                {step === 4 && (
                  <div className="text-center py-6 flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h2 className="text-2xl font-serif font-bold text-zinc-950 mb-1.5 leading-tight">
                      Order Authorized
                    </h2>
                    <p className="text-xs text-[#8C7A5F] font-mono tracking-[0.2em] mb-4 uppercase">
                      MANIFEST SECURED SUCCESSFULLY
                    </p>

                    <div className="bg-white border border-[#E2DED5] p-5 w-full select-all text-left mb-6 font-mono text-xs">
                      <div className="flex justify-between items-center mb-3 text-zinc-400">
                        <span>TRANSACTION RECEIPT</span>
                        <div className="flex items-center gap-1.5 group cursor-pointer text-[#8C7A5F] hover:text-black">
                          <span className="text-[11px] font-semibold underline">{orderId}</span>
                        </div>
                      </div>

                      <div className="space-y-1 text-[11px] text-zinc-500">
                        <p>Date: <span className="text-zinc-800 font-semibold">May 28, 2026</span></p>
                        <p>Carrier: <span className="text-zinc-800 font-semibold">DHL Express High-Logistics</span></p>
                        <p>Destination: <span className="text-zinc-800 font-semibold">{city}, {country}</span></p>
                        <p>Status: <span className="text-emerald-700 font-semibold">★ AUTHORIZED</span></p>
                      </div>

                      <div className="h-px bg-zinc-200 my-3.5" />

                      <div className="space-y-1.5 text-zinc-700">
                        <p className="text-[10px] font-bold text-zinc-400 mb-1">INVOICE SELECTION</p>
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between text-[11px]">
                            <span className="line-clamp-1 flex-1">{item.product.name} (x{item.quantity})</span>
                            <span className="font-semibold text-zinc-900 ml-3">${(item.product.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      {isMember && (
                        <div className="flex justify-between text-[11px] text-rose-600 font-bold mt-2 pt-1 border-t border-dashed border-rose-200">
                          <span>✦ VIP CLUB MEMBER SAVINGS</span>
                          <span>-${memberSavings.toFixed(2)}</span>
                        </div>
                      )}

                      <div className="h-px bg-zinc-200 my-3.5" />

                      <div className="flex justify-between font-serif font-bold text-base text-zinc-900 pt-1">
                        <span>ESTIMATE TOTAL</span>
                        <span className="font-mono">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 max-w-sm mb-8 leading-relaxed font-sans mt-1">
                      A copy of the digital manifest invoice and tracked courier delivery codes was dispatched to <span className="font-semibold text-zinc-700 font-mono">{email}</span>. Thank you for collecting with Snooks.
                    </p>

                    <button
                      id="success-home-btn"
                      onClick={completeAndExit}
                      className="w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] hover:bg-[#8C7A5F] text-white text-xs font-mono tracking-[0.2em] uppercase transition-colors"
                    >
                      RETURN TO CENTRAL LABELS
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar cart overview column */}
              <div id="checkout-spec-column" className="hidden md:flex md:w-[42%] bg-zinc-100/70 border-l border-[#E2DED5] p-8 flex-col justify-between overflow-y-auto">
                <div>
                  <h3 className="text-sm font-serif font-semibold tracking-wider text-zinc-950 mb-4 select-none uppercase">
                    Archive Manifest ({cartItems.reduce((acc, sum) => acc + sum.quantity, 0)})
                  </h3>

                  <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 divide-y divide-zinc-250">
                    {cartItems.map((item, idx) => (
                      <div key={item.id} className={`flex gap-3.5 ${idx > 0 ? 'pt-4' : ''}`}>
                        <div className="w-12 h-16 bg-white border border-[#E2DED5] overflow-hidden flex-shrink-0">
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
                        <div className="flex-grow flex flex-col justify-between text-[11px]">
                          <div>
                            <h4 className="font-serif font-semibold text-zinc-900 line-clamp-1">{item.product.name}</h4>
                            <p className="text-[10px] font-mono text-zinc-500 mt-0.5">Size: {item.selectedSize} • Color: {item.selectedColor.name}</p>
                          </div>
                          <div className="flex justify-between font-mono text-[10px] mt-1 text-zinc-500">
                            <span>Qty: {item.quantity}</span>
                            <span className="font-bold text-zinc-900">${(item.product.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 mt-6 md:mt-0 font-mono text-[11px]">
                  <div className="space-y-1.5 mb-4 text-zinc-500">
                    <div className="flex justify-between">
                      <span>BAG TOTAL</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {isMember && (
                      <div className="flex justify-between text-rose-600 font-bold bg-rose-50 px-1 py-1">
                        <span>✦ VIP MEMBER DISCOUNT (-15%)</span>
                        <span>-${memberSavings.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>DHL CARRIER SHIPPING</span>
                      <span>{shippingCost === 0 ? 'COMPLIMENTARY' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ESTIMATED TAX (8.0%)</span>
                      <span>${estimatedTax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-350 my-3" />

                  <div className="flex justify-between font-serif font-bold text-sm text-zinc-900">
                    <span>COMPILATION TOTAL</span>
                    <span className="font-mono">${total.toFixed(2)}</span>
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
