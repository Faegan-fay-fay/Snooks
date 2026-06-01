import React, { useState } from 'react';
import { Sparkles, Mail, ShieldCheck, Award, Ticket, Check, Gift } from 'lucide-react';

interface MembershipWidgetProps {
  isMember: boolean;
  setIsMember: (val: boolean) => void;
  membershipEmail: string;
  setMembershipEmail: (email: string) => void;
}

export default function MembershipWidget({
  isMember,
  setIsMember,
  membershipEmail,
  setMembershipEmail,
}: MembershipWidgetProps) {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [animateBadge, setAnimateBadge] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      setErrorMsg('⚠ PLEASE ROTATE A VALID COURIER EMAIL CODES ADDRESS.');
      return;
    }
    setErrorMsg('');
    setMembershipEmail(emailInput);
    setIsMember(true);
    setAnimateBadge(true);
  };

  const handleLeave = () => {
    setIsMember(false);
    setMembershipEmail('');
    setEmailInput('');
    setNameInput('');
  };

  return (
    <div id="retro-membership-portal" className="w-full max-w-4xl mx-auto my-12 relative select-none">
      {!isMember ? (
        /* Sign Up Interactive State Card */
        <div className="bg-[#FAF7F0] border-2 border-zinc-950 p-6 sm:p-8 shadow-[6px_6px_0px_rgba(140,122,95,1)] transition-all">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Promo & Visual Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest bg-amber-500 text-zinc-950 border border-zinc-950 uppercase">
                  ✦ COLLECTORS EXCLUSIVE ✦
                </span>
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest bg-[#1A1A1A] text-white border border-zinc-950 uppercase">
                  VIP PASS
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-zinc-900 leading-none">
                JOIN THE SNOOKS COLLECTIVE CLUB
              </h2>
              
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-sans max-w-lg">
                Unlock early notification of drop archives, premium garment releases, and receive <b className="text-rose-600 font-mono">15% OFF DISCOUNT ON ALL BAG TOTALS</b> automatically applied at checkouts! Free to join for global retro fashion curators.
              </p>

              {/* VIP Benefits horizontal tag row */}
              <div className="flex flex-wrap gap-2.5 pt-1 text-[10px] font-mono text-[#8C7A5F] font-bold">
                <span className="flex items-center gap-1">✔ 15% INSTANT SAVINGS</span>
                <span>•</span>
                <span className="flex items-center gap-1">✔ COMPLIMENTARY EXPEDITED SHIPPING</span>
                <span>•</span>
                <span className="flex items-center gap-1">✔ MEMBERS-ONLY CORNERS</span>
              </div>
            </div>

            {/* Form Input Submit Column */}
            <form onSubmit={handleJoin} className="md:col-span-5 bg-white border-2 border-zinc-950 p-5 space-y-3 shadow-[4px_4px_0px_rgba(26,26,26,1)]">
              <div className="text-center font-mono text-[10px] tracking-wider text-zinc-400 uppercase pb-1 border-b border-zinc-100 mb-1">
                LOBBY REGISTER ACCESS PASS
              </div>

              <div>
                <label className="block text-[9px] font-mono font-bold text-zinc-650 uppercase mb-1">CURATOR NAME:</label>
                <input
                  type="text"
                  placeholder="e.g. Jean snooks"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-zinc-50 border border-zinc-300 focus:border-zinc-950 focus:outline-hidden font-sans"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono font-bold text-zinc-650 text-rose-700 uppercase mb-1">COURIER EMAIL *</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2.5 text-zinc-400">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="curator@vintage-archive.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full text-xs pl-8 pr-3 py-2 bg-zinc-50 border border-zinc-300 focus:border-zinc-950 focus:outline-hidden font-mono"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="text-[10px] text-rose-600 font-mono tracking-wide font-medium mt-1">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-zinc-950 hover:bg-[#8C7A5F] active:scale-[0.98] text-white text-xs font-mono font-bold tracking-[0.15em] uppercase border border-zinc-950 transition-all cursor-pointer shadow-sm mt-2 flex items-center justify-center gap-1.5"
              >
                JOIN THE LOBBY ⚡
              </button>
            </form>

          </div>
        </div>
      ) : (
        /* Joined Platinum VIP Credentials holographic card display */
        <div className="relative overflow-hidden bg-white border-2 border-zinc-950 p-6 sm:p-8 shadow-[8px_8px_0px_rgba(251,191,36,1)] transition-all animate-fadeIn">
          {/* Neon Retro Background Accents */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-100/40 via-yellow-100/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Holographic simulated Loyalty Golden Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[1.6/1] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border-2 border-amber-400 p-5 p-y-4 flex flex-col justify-between text-white shadow-xl hover:scale-103 transition-transform duration-300 rounded-lg">
                
                {/* Gold chip ornament */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] font-mono tracking-widest text-amber-400 font-bold uppercase">
                      SNOOKS LOYALTY CLUB
                    </span>
                    <span className="text-[10px] font-serif font-black tracking-wide text-zinc-100">
                      PLATINUM COLLECTOR
                    </span>
                  </div>
                  <div className="w-7 h-5 bg-gradient-to-tr from-amber-400 to-amber-200 border border-amber-300 rounded-sm opacity-90 relative overflow-hidden" />
                </div>

                <div className="text-center py-2">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">LOYALTY PASS DISPATCH CODE:</div>
                  <div className="text-xs font-mono font-bold text-amber-300 tracking-widest">SN-2026-{Math.abs(membershipEmail.length * 37)}VIP</div>
                </div>

                {/* Card footer details */}
                <div className="flex justify-between items-end border-t border-zinc-800 pt-2">
                  <div>
                    <span className="block text-[7px] font-mono text-zinc-400 uppercase">VIP EMAIL CODES:</span>
                    <span className="block text-[9px] font-mono text-amber-200 font-medium truncate max-w-[180px]">{membershipEmail}</span>
                  </div>
                  <div className="px-2 py-0.5 bg-amber-400 text-zinc-950 text-[8px] font-mono font-black rounded-xs">
                    ACTIVE 15% OFF
                  </div>
                </div>

              </div>
            </div>

            {/* Member Benefits activated notification column */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-mono border border-emerald-300 rounded-none font-bold uppercase animate-bounce">
                <Check className="w-4 h-4 text-emerald-600 font-black" /> Loyalty Membership Credentials Activated Successfully!
              </div>

              <h3 className="text-2xl font-serif font-black tracking-tight text-zinc-950">
                WELCOME BACK TO THE ARCHIVE, {nameInput ? nameInput.toUpperCase() : 'FELLOW CURATOR'}!
              </h3>

              <p className="text-xs text-zinc-650 leading-relaxed max-w-lg">
                Your permanent membership unlocks access to our vintage archive vaults. An active <b className="text-rose-600 font-mono">15% VIP discount is automatically operational</b> for any items inside your Archive Bag at checkout! No coupon entry required.
              </p>

              {/* Action utilities buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1">
                <div className="text-[10px] font-mono text-zinc-500">
                  Logged in via <span className="font-bold text-zinc-800">{membershipEmail}</span>
                </div>
                <button
                  onClick={handleLeave}
                  className="text-[10px] font-mono text-zinc-400 hover:text-red-600 font-bold underline cursor-pointer"
                  title="Disconnect your loyalty account"
                >
                  DEACTIVATE PASS
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
