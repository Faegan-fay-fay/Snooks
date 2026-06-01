/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Heart,
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Mail,
  Check,
  ArrowRight,
  RefreshCw,
  LogOut,
  MapPin,
  Sparkles,
  Info
} from 'lucide-react';

import { Product, CartItem, Color } from './types';
import { PRODUCTS, getFallbackProductImage } from './data';

// Component imports
import PromoMarquee from './components/PromoMarquee';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import StorySection from './components/StorySection';
import SearchTool from './components/SearchTool';
import MembershipWidget from './components/MembershipWidget';

export default function App() {
  // State managers
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('elara_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('elara_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // VIP Loyalty Membership States
  const [isMember, setIsMember] = useState<boolean>(() => {
    return localStorage.getItem('snooks_is_member') === 'true';
  });
  const [membershipEmail, setMembershipEmail] = useState<string>(() => {
    return localStorage.getItem('snooks_member_email') || '';
  });

  useEffect(() => {
    localStorage.setItem('snooks_is_member', String(isMember));
  }, [isMember]);

  useEffect(() => {
    localStorage.setItem('snooks_member_email', membershipEmail);
  }, [membershipEmail]);
  
  // Custom interactive animations toggles
  const [cartAnimateTrigger, setCartAnimateTrigger] = useState(false);
  
  // Filtering & Sorting State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(1500);
  const [sortBy, setSortBy] = useState<string>('Featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  // Reset pagination to first page when filtering/sorting attributes shift
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedSubCategory, priceRange, sortBy]);

  // Wishlist slideover drawer (quick access!)
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);

  // Newsletter subscribe
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Save states to local storage
  useEffect(() => {
    localStorage.setItem('elara_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('elara_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Cart operations
  const handleAddToBag = (product: Product, size: string, color: Color, quantity: number) => {
    const itemId = `${product.id}-${size}-${color.name}`;
    
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === itemId);
      if (existing) {
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { id: itemId, product, selectedSize: size, selectedColor: color, quantity }];
      }
    });

    // Trigger cart shake animation
    setCartAnimateTrigger(true);
    setTimeout(() => {
      setCartAnimateTrigger(false);
    }, 1000);
  };

  const handleUpdateQuantity = (itemId: string, amount: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      setNewsletterError('Please provide an email coordinate.');
      return;
    }
    if (!newsletterEmail.includes('@')) {
      setNewsletterError('Please provide a valid email format.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 4000);
  };

  // Filter products based on state
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const matchesSubCategory =
      selectedSubCategory === 'All' || product.subCategory === selectedSubCategory;

    const matchesPrice = product.price <= priceRange;

    return matchesSearch && matchesCategory && matchesSubCategory && matchesPrice;
  });

  // Sort products based on state
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price: Low to High') {
      return a.price - b.price;
    }
    if (sortBy === 'Price: High to Low') {
      return b.price - a.price;
    }
    if (sortBy === 'Best Sellers') {
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    }
    // Default Featured sorting: BestSellers & New Arrivals first
    const scoreA = (a.isBestSeller ? 2 : 0) + (a.isNewArrival ? 1 : 0);
    const scoreB = (b.isBestSeller ? 2 : 0) + (b.isNewArrival ? 1 : 0);
    return scoreB - scoreA;
  });

  // Slice products for active page
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate SubCategory options based on selection
  const subCategoryOptions = Array.from(
    new Set(
      PRODUCTS.filter((p) => selectedCategory === 'All' || p.category === selectedCategory).map(
        (p) => p.subCategory
      )
    )
  );

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Scroll to grid helper
  const scrollToCollection = () => {
    const gridElem = document.getElementById('collection-catalog-head');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#8C7A5F] selection:text-white flex flex-col justify-between">
      
      {/* 1. Header & Promotional Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E2DED5]">
        <PromoMarquee />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            id="mobile-filters-trigger"
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-1.5 p-1 text-xs font-mono text-[#8C7A5F]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>FILTER</span>
          </button>

          {/* Central Logo */}
          <div className="flex-1 md:flex-none">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory('All');
                setSelectedSubCategory('All');
                setSearchQuery('');
                setPriceRange(1500);
              }}
              className="text-2xl font-bold tracking-normal text-[#1A1A1A] hover:text-[#8C7A5F] transition-colors block select-none text-center md:text-left"
              style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
            >
              Snooks
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-[0.18em] uppercase text-zinc-650 font-medium ml-12">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedSubCategory('All');
                scrollToCollection();
              }}
              className={`hover:text-black transition-colors relative pb-1 ${
                selectedCategory === 'All' ? 'text-black font-semibold' : ''
              }`}
            >
              THE NEW LISTS
              {selectedCategory === 'All' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8C7A5F]" />
              )}
            </button>

            <button
              onClick={() => {
                setSelectedCategory('Apparel');
                setSelectedSubCategory('All');
                scrollToCollection();
              }}
              className={`hover:text-black transition-colors relative pb-1 ${
                selectedCategory === 'Apparel' ? 'text-black font-semibold' : ''
              }`}
            >
              APPAREL
              {selectedCategory === 'Apparel' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8C7A5F]" />
              )}
            </button>

            <button
              onClick={() => {
                setSelectedCategory('Footwear');
                setSelectedSubCategory('All');
                scrollToCollection();
              }}
              className={`hover:text-black transition-colors relative pb-1 ${
                selectedCategory === 'Footwear' ? 'text-black font-semibold' : ''
              }`}
            >
              FOOTWEAR
              {selectedCategory === 'Footwear' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8C7A5F]" />
              )}
            </button>

            <button
              onClick={scrollToCollection}
              className="hover:text-[#8C7A5F] transition-colors"
            >
              CATALOGUE
            </button>
          </nav>

          {/* Right Interface Icons (Search, Wishlist, Bag) */}
          <div className="flex items-center gap-5">
            {/* Search Input inline preview for desktops */}
            <div className="hidden lg:flex items-center relative border border-[#E2DED5] bg-white px-3 py-1.5 focus-within:border-zinc-400">
              <input
                type="text"
                placeholder="Find clothes or shoes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs w-48 text-zinc-800 placeholder-zinc-400 focus:outline-hidden font-sans"
              />
              <Search className="w-4 h-4 text-zinc-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-0.5 ml-1 text-zinc-400 hover:text-black"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Wishlist Icon with badges */}
            <button
              id="top-wishlist-trigger"
              onClick={() => setIsWishlistDrawerOpen(true)}
              className="p-2.5 relative hover:text-[#8C7A5F] transition-colors"
              title="Open Wishlist"
            >
              <Heart className="w-4.5 h-4.5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-[#8C7A5F] text-white text-[8px] font-mono leading-none w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon trigger shakes on item add */}
            <motion.button
              id="top-cart-trigger"
              onClick={() => setIsCartOpen(true)}
              animate={cartAnimateTrigger ? { scale: [1, 1.15, 0.95, 1.05, 1] } : {}}
              transition={{ duration: 0.5 }}
              className={`p-2.5 relative border rounded-none transition-all duration-300 ${
                cart.length > 0 ? 'bg-zinc-950 border-zinc-950 text-white hover:bg-zinc-800' : 'border-[#E2DED5] text-zinc-800 hover:border-zinc-500'
              }`}
              title="View Archive Bag"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartItemsCount > 0 && (
                <span className={`absolute -top-1.5 -right-1.5 text-[8px] font-mono font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-sm leading-none ${
                  cart.length > 0 ? 'bg-[#8C7A5F] text-[#FAF9F6]' : 'bg-[#1A1A1A] text-white'
                }`}>
                  {cartItemsCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* 2. Hero Interactive Presentation Section */}
      <section id="elara-high-fashion-hero" className="relative w-full overflow-hidden bg-zinc-900 text-white py-24 sm:py-32 md:py-48 px-6 lg:px-12">
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Background Image full-screen */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1500&auto=format&fit=crop"
            alt="Editorial Fall coat presentation banner"
            className="w-full h-full object-cover object-center animate-pulse duration-[6000ms]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Panel elements */}
        <div className="max-w-7xl mx-auto relative z-20 flex flex-col items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#EFECE6] uppercase bg-[#8C7A5F]/40 backdrop-blur-xs py-1 px-3 border border-zinc-500/20 rounded-full inline-block">
            AUTHENTIC QUALITY • PORTUGUESE CRAFTSMANSHIP
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif leading-[1.08] font-bold max-w-3xl tracking-wide">
            Clothes and Footwear <br />
            <span className="italic font-light font-serif">refined for daily paths.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-sans leading-relaxed">
            Beautifully curated staples structured from fine ecological linen fibers and full-grain Italian calf leather. Constructed in Portugal to bypass fast fashion volatility.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
            <button
              id="hero-shop-all"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedSubCategory('All');
                scrollToCollection();
              }}
              className="w-full sm:w-auto px-10 py-4 cursor-pointer bg-[#FAF9F6] hover:bg-[#8C7A5F] hover:text-white text-zinc-950 font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300"
            >
              EXPLORE COUTURE
            </button>
            <button
              id="hero-shop-footwear"
              onClick={() => {
                setSelectedCategory('Footwear');
                setSelectedSubCategory('All');
                scrollToCollection();
              }}
              className="w-full sm:w-auto px-8 py-4 cursor-pointer bg-transparent hover:bg-white/15 border border-[#FAF9F6] text-white font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300"
            >
              FOOTWEAR ARCHIVES
            </button>
          </div>
        </div>
      </section>

      {/* 3. Central Brand Focus & Dynamic Product Catalog Grid */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex-grow w-full">
        
        {/* Brand Focus Category Slider tiles */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            onClick={() => {
              setSelectedCategory('Apparel');
              setSelectedSubCategory('All');
              scrollToCollection();
            }}
            className="group relative h-48 cursor-pointer overflow-hidden border border-[#E2DED5] bg-neutral-100"
          >
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-all duration-500 z-10" />
            <img
              src="https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=500&auto=format&fit=crop"
              alt="Tailored Apparel background tile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#EFECE6] tracking-[0.2em] uppercase mb-1">COLLECTION</span>
              <h3 className="text-lg font-serif font-bold text-white tracking-wide">Premium Apparel</h3>
            </div>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('Footwear');
              setSelectedSubCategory('All');
              scrollToCollection();
            }}
            className="group relative h-48 cursor-pointer overflow-hidden border border-[#E2DED5] bg-neutral-100"
          >
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-all duration-500 z-10" />
            <img
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=500&auto=format&fit=crop"
              alt="Crafted shoes backgrounds tile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#EFECE6] tracking-[0.2em] uppercase mb-1">FOOTWEAR</span>
              <h3 className="text-lg font-serif font-bold text-white tracking-wide">Tailored Footwear</h3>
            </div>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('All');
              setSelectedSubCategory('All');
              setSortBy('Best Sellers');
              scrollToCollection();
            }}
            className="group relative h-48 cursor-pointer overflow-hidden border border-[#E2DED5] bg-neutral-100"
          >
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-all duration-500 z-10" />
            <img
              src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=500&auto=format&fit=crop"
              alt="Best sellers collections background"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#EFECE6] tracking-[0.2em] uppercase mb-1">BEST SELLING</span>
              <h3 className="text-lg font-serif font-bold text-white tracking-wide">Signature Classics</h3>
            </div>
          </div>
        </div>

        {/* Retro Search & Brand Style Tool Choice */}
        <SearchTool
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          products={PRODUCTS}
          onViewProductDetails={setSelectedProduct}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* VIP Loyalty Membership Portal Board */}
        <MembershipWidget
          isMember={isMember}
          setIsMember={setIsMember}
          membershipEmail={membershipEmail}
          setMembershipEmail={setMembershipEmail}
        />

        {/* Dynamic Catalog Section Title */}
        <div id="collection-catalog-head" className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b border-[#E2DED5] pb-5">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C7A5F] block mb-1.5 uppercase">
              STUDIO ARCHIVE DIRECTORY
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
              {selectedCategory === 'All' ? 'Complete Core Collection' : `Snooks ${selectedCategory}`}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0 text-xs font-mono">
            {/* Search Input inline preview for tablet/mobile */}
            <div className="flex lg:hidden items-center relative border border-[#E2DED5] bg-white px-3 py-1.5">
              <input
                type="text"
                placeholder="Search code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-xs w-32 focus:outline-hidden"
              />
              <Search className="w-4.5 h-4.5 text-zinc-400" />
            </div>

            {/* Sorting mechanism */}
            <div className="flex items-center gap-1.5 bg-white border border-[#E2DED5] px-3.5 py-1.5 rounded-none">
              <span className="text-[10px] text-zinc-400 uppercase">SORT CHRONO:</span>
              <select
                id="sorting-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-xs font-semibold focus:outline-hidden text-zinc-950 pr-4"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Sellers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Central Layout Split: Filters sidebar on desktop + main cards catalogue grid */}
        <div id="catalog-layout-split" className="flex flex-col md:flex-row gap-10">
          
          {/* A. DESKTOP SIDEBAR FILTERS PANEL */}
          <aside className="hidden md:block w-64 flex-shrink-0 text-xs font-mono space-y-8 select-none">
            {/* 1. Departments options */}
            <div className="space-y-3.5">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#8C7A5F] uppercase border-b border-[#E2DED5] pb-2">
                DEPARTMENTS
              </h4>
              <div className="space-y-2 font-sans font-medium text-zinc-650">
                {['All', 'Apparel', 'Footwear'].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setSelectedCategory(dept);
                      setSelectedSubCategory('All');
                    }}
                    className={`flex justify-between items-center w-full text-left font-sans text-xs hover:text-black transition-colors ${
                      selectedCategory === dept ? 'text-[#8C7A5F] font-bold font-serif italic text-sm' : ''
                    }`}
                  >
                    <span>{dept}</span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      ({dept === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === dept).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Sub-categories options list */}
            <div className="space-y-3.5">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#8C7A5F] uppercase border-b border-[#E2DED5] pb-2">
                SUB-COLLECTIONS
              </h4>
              <div className="space-y-2 font-sans font-medium text-zinc-650 flex flex-col items-start">
                <button
                  onClick={() => setSelectedSubCategory('All')}
                  className={`text-left text-xs hover:text-black transition-colors ${
                    selectedSubCategory === 'All' ? 'text-[#8C7A5F] font-bold font-serif italic text-sm' : ''
                  }`}
                >
                  All Sub-Collections
                </button>
                {subCategoryOptions.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={`text-left text-xs hover:text-black transition-colors leading-relaxed ${
                      selectedSubCategory === sub ? 'text-[#8C7A5F] font-bold font-serif italic text-sm' : ''
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Price Filter Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline border-b border-[#E2DED5] pb-2">
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#8C7A5F] uppercase">
                  INVESTMENT THRESHOLD
                </h4>
                <span className="font-bold text-zinc-900">${priceRange} Max</span>
              </div>
              <input
                type="range"
                min="10"
                max="1500"
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#8C7A5F] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-zinc-400 font-mono">
                <span>$10</span>
                <span>$500</span>
                <span>$1000</span>
                <span>$1500</span>
              </div>
            </div>

            {/* Clear filters trigger button (only shown when filtered) */}
            {(selectedCategory !== 'All' ||
              selectedSubCategory !== 'All' ||
              searchQuery !== '' ||
              priceRange !== 1500) && (
              <button
                id="reset-filters"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedSubCategory('All');
                  setSearchQuery('');
                  setPriceRange(1500);
                }}
                className="w-full border border-[#8C7A5F] text-[#8C7A5F] hover:bg-[#8C7A5F] hover:text-white py-2.5 font-mono text-[10px] tracking-widest uppercase transition-colors"
              >
                CLEAR FILTER MANIFEST
              </button>
            )}

            {/* In-app security pledge */}
            <div className="p-4 bg-white border border-[#E2DED5] text-[10px] space-y-1 text-zinc-500 font-mono">
              <span className="font-bold text-[#8C7A5F] block">✦ ARCHIVE DIRECT PLEDGE</span>
              <p className="leading-relaxed">Shipped directly from our workspace cleanroom boxes. Completely dust-free, boxed in solid cardboard shells.</p>
            </div>
          </aside>

          {/* B. CARDS CATALOGUE CATALOG INDEX */}
          <div id="main-catalog-grid" className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="py-24 text-center text-zinc-400 select-none flex flex-col items-center">
                <SlidersHorizontal className="w-12 h-12 stroke-1 stroke-zinc-300 mb-4 animate-bounce" />
                <p className="text-lg font-serif">No Snooks items matched your coordinates.</p>
                <p className="text-xs font-mono text-zinc-500 max-w-sm mt-1 mb-8">
                  Try clearing some keyword search metrics, scaling up the price slider, or choosing default department directories.
                </p>
                <button
                  id="reset-filters-empty"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedSubCategory('All');
                    setSearchQuery('');
                    setPriceRange(1500);
                  }}
                  className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#8C7A5F] text-white text-xs font-mono tracking-widest uppercase transition-colors"
                >
                  RESET COMPILATION MATRIX
                </button>
              </div>
            ) : (
              <div>
                {/* Micro metrics header count */}
                <div className="text-[10px] font-mono text-zinc-400 mb-4 tracking-wider uppercase select-none flex justify-between">
                  <span>SHOWING RECORD INDEX: {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} OF {sortedProducts.length} ITEMS</span>
                  {searchQuery && (
                    <span>FILTERED BY: &quot;{searchQuery}&quot;</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {currentProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ProductCard
                          product={product}
                          onViewDetails={(prod) => {
                            setSelectedProduct(prod);
                            setIsProductModalOpen(true);
                          }}
                          onQuickAdd={(prod, size, color) => {
                            handleAddToBag(prod, size, color, 1);
                          }}
                          isWishlisted={wishlist.some((w) => w.id === product.id)}
                          onToggleWishlist={handleToggleWishlist}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Minimalist E-Commerce Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between border-t border-[#E2DED5] mt-12 pt-6">
                    {/* Previous Button */}
                    <button
                      onClick={() => {
                        if (currentPage > 1) {
                          setCurrentPage(currentPage - 1);
                          scrollToCollection();
                        }
                      }}
                      disabled={currentPage === 1}
                      className={`px-5 py-2.5 border text-[10px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 ${
                        currentPage === 1
                          ? 'border-[#ECE8DF] text-zinc-350 cursor-not-allowed'
                          : 'border-[#E2DED5] text-zinc-800 hover:border-zinc-950 hover:text-black cursor-pointer bg-white'
                      }`}
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      PREV
                    </button>

                    {/* Numeric Selector */}
                    <div className="hidden sm:flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page);
                            scrollToCollection();
                          }}
                          className={`w-9 h-9 text-xs font-mono transition-all duration-300 flex items-center justify-center border ${
                            currentPage === page
                              ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold'
                              : 'bg-white border-[#E2DED5] text-zinc-500 hover:border-zinc-950 hover:text-black cursor-pointer'
                          }`}
                        >
                          {String(page).padStart(2, '0')}
                        </button>
                      ))}
                    </div>

                    {/* Compact layout for mobile screens */}
                    <div className="sm:hidden text-xs font-mono text-zinc-500">
                      PAGE {currentPage} OF {totalPages}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => {
                        if (currentPage < totalPages) {
                          setCurrentPage(currentPage + 1);
                          scrollToCollection();
                        }
                      }}
                      disabled={currentPage === totalPages}
                      className={`px-5 py-2.5 border text-[10px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 ${
                        currentPage === totalPages
                          ? 'border-[#ECE8DF] text-zinc-350 cursor-not-allowed'
                          : 'border-[#E2DED5] text-zinc-800 hover:border-zinc-950 hover:text-black cursor-pointer bg-white'
                      }`}
                    >
                      NEXT
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 4. Editorial Manifest Brand Section */}
      <StorySection />

      {/* 5. Luxury Newsletter Subscribe Widget Section */}
      <section id="elara-newsletter-subscribe" className="py-16 bg-[#1A1A1A] text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#8C7A5F] uppercase block">
            SNOOKS CHRONOLOGY NOTICES
          </span>
          
          <h2 className="text-2xl md:text-4xl font-serif text-[#FAF9F6]">
            Unlock priority access to seasonal batches <br />
            <span className="italic font-light">and numbered releases.</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            We don’t distribute spam. Subscribers receive clean editorial newsletters containing details, workshop stories, and key dispatch codes.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto pt-4 relative">
            <div className="flex flex-col sm:flex-row gap-2 border-b border-zinc-700 pb-2">
              <div className="flex-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  placeholder="Enter your email coordinate..."
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    setNewsletterError('');
                  }}
                  className="bg-transparent text-sm text-white placeholder-zinc-500 outline-hidden w-full focus:outline-hidden py-1"
                />
              </div>
              <button
                id="newsletter-submit-btn"
                type="submit"
                className="px-6 py-2 bg-white hover:bg-[#8C7A5F] text-[#1A1A1A] hover:text-white transition-all text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
            {newsletterError && (
              <p className="text-[10px] font-mono text-red-400 font-semibold tracking-wide text-left mt-2">
                ⚠ {newsletterError}
              </p>
            )}
            
            {newsletterSubscribed && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-zinc-800 border border-[#8C7A5F] text-zinc-100 text-[11px] font-mono text-left uppercase tracking-wider flex items-center gap-2 mt-4"
              >
                <Check className="w-4.5 h-4.5 text-emerald-400" />
                <span>SUCCESS! CHECK YOUR INBOX TO CONFIRM COMPILATION ENVELOPE.</span>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* 6. Comprehensive Deep Footers Segment */}
      <footer className="bg-zinc-950 text-zinc-450 text-xs py-16 px-6 lg:px-12 border-t border-zinc-900 select-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-900 pb-12 mb-12">
          {/* Logo brand */}
          <div className="space-y-4">
            <span
              className="text-2xl font-bold tracking-normal text-white block"
              style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
            >
              Snooks
            </span>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-mono">
              EXQUISITE APPAREL AND NATURAL FOOTWEAR DISPATCHES. <br />
              REGISTERED COUTURIER NO. 2026-0528.
            </p>
          </div>

          {/* Links col 1 */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">COLLECTIONS</h4>
            <ul className="space-y-2 text-[11px] font-mono text-zinc-400">
              <li><button onClick={() => { setSelectedCategory('Apparel'); scrollToCollection(); }} className="hover:text-white transition-colors">Fine Knitwear Tops</button></li>
              <li><button onClick={() => { setSelectedCategory('Apparel'); setSelectedSubCategory('Outerwear'); scrollToCollection(); }} className="hover:text-white transition-colors">Tailored Trench Outerwear</button></li>
              <li><button onClick={() => { setSelectedCategory('Footwear'); setSelectedSubCategory('Classic Shoes'); scrollToCollection(); }} className="hover:text-white transition-colors">Goodyear-Welt Derby Oxfords</button></li>
              <li><button onClick={() => { setSelectedCategory('Footwear'); setSelectedSubCategory('Boots'); scrollToCollection(); }} className="hover:text-white transition-colors">Artisanal Suede Chelsea Boots</button></li>
            </ul>
          </div>

          {/* Links col 2 */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">THE ATELIER</h4>
            <ul className="space-y-2 text-[11px] font-mono text-zinc-400">
              <li><a href="#elara-journal-story" className="hover:text-white transition-colors">Our Ethical Philosophy</a></li>
              <li><a href="#elara-journal-story" className="hover:text-white transition-colors">Porto Workshops Directory</a></li>
              <li><button onClick={() => { setSelectedCategory('All'); setSortBy('Best Sellers'); scrollToCollection(); }} className="hover:text-white transition-colors">Lifetime Replacements Pledges</button></li>
              <li><span className="text-zinc-650 cursor-not-allowed">The Journal Volume 04 [Offline]</span></li>
            </ul>
          </div>

          {/* Links col 3 / Contacts */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">DISPATCH SUPPORT</h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-mono">
              Have queries related to size fitting, customized leather waxes, or archive delivery routes?
            </p>
            <div className="pt-2 text-[11px] font-bold text-zinc-300 font-mono">
              <span className="block">EMAIL: ARCHIVE@SNOOKS.COUTURE</span>
              <span className="block mt-0.5">ESTIMATE DISPATCH RESPONSE: 4 HOURS</span>
            </div>
          </div>
        </div>

        {/* Outer credit line margins aligned with philosophy rule */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
          <p>© 2026 SNOOKS FOOTWEAR & APPAREL LTD. ALL RIGHTS AUTHORIZED SECURELY.</p>
          <div className="flex gap-4">
            <span>TERMS OF ENGAGEMENT</span>
            <span>-</span>
            <span>PRIVACY DISCLOSURE MANIFOLD</span>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 7. ALL MODALS OVERLAYS (Cart Drawer, Details, Checkout, Wishlist) */}
      
      {/* A. CART DRAWER OVERLAY */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        isMember={isMember}
      />

      {/* B. DETAILED PRODUCT QUICK-VIEW MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setSelectedProduct(null);
        }}
        onAddToBag={(prod, size, color, qty) => {
          handleAddToBag(prod, size, color, qty);
          // Auto opens cart drawer for immediate luxury confirmation!
          setIsProductModalOpen(false);
          setIsCartOpen(true);
        }}
        isWishlisted={selectedProduct ? wishlist.some((w) => w.id === selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* C. PAYMENTS CHECKOUT FLOW MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onClearCart={handleClearCart}
        isMember={isMember}
      />

      {/* D. WISHLIST SWIPE-OVER PANEL SIDEBAR */}
      <AnimatePresence>
        {isWishlistDrawerOpen && (
          <>
            <motion.div
              id="wishlist-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />
            
            <motion.div
              id="wishlist-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] bg-white border-l border-[#E2DED5] shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#E2DED5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#8C7A5F]" fill="#8C7A5F" />
                  <h3 className="text-lg font-serif font-bold text-zinc-900 uppercase tracking-wider">
                    Your Wishlist Notebook
                  </h3>
                </div>
                <button
                  onClick={() => setIsWishlistDrawerOpen(false)}
                  className="p-1.5 hover:bg-zinc-100 border border-zinc-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items content */}
              <div className="flex-grow overflow-y-auto p-6 divide-y divide-[#E2DED5]">
                {wishlist.length === 0 ? (
                  <div className="text-center py-16 text-zinc-400 select-none">
                    <Heart className="w-12 h-12 stroke-1 text-zinc-300 mx-auto mb-4 animate-pulse" />
                    <p className="text-sm font-serif">Your Wishlist file is empty</p>
                    <p className="text-[10px] font-mono text-zinc-500 mt-1 max-w-xs mx-auto">
                      Click the small wishlist hearts on our cards to write collections here.
                    </p>
                  </div>
                ) : (
                  wishlist.map((item) => (
                    <div key={item.id} className="py-4 flex gap-4 bg-white">
                      <div
                        className="w-16 h-20 bg-[#F5F4F0] border border-[#E2DED5] cursor-pointer overflow-hidden flex-shrink-0"
                        onClick={() => {
                          setSelectedProduct(item);
                          setIsWishlistDrawerOpen(false);
                          setIsProductModalOpen(true);
                        }}
                      >
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = getFallbackProductImage(item.category);
                          }}
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h4
                            className="font-serif font-bold text-zinc-900 cursor-pointer hover:text-[#8C7A5F] transition-colors"
                            onClick={() => {
                              setSelectedProduct(item);
                              setIsWishlistDrawerOpen(false);
                              setIsProductModalOpen(true);
                            }}
                          >
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-500 block">{item.subCategory} • ${item.price}</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => {
                              setSelectedProduct(item);
                              setIsWishlistDrawerOpen(false);
                              setIsProductModalOpen(true);
                            }}
                            className="px-3 py-1 border border-[#E2DED5] hover:border-black text-[9px] font-mono tracking-widest uppercase text-zinc-800 transition-colors cursor-pointer"
                          >
                            VIEW
                          </button>
                          <button
                            onClick={() => handleToggleWishlist(item)}
                            className="px-3 py-1 text-red-500 hover:bg-red-50 text-[9px] font-mono tracking-widest uppercase transition-colors"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
    </div>
  );
}
