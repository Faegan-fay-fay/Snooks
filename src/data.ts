import { Product } from './types';
import { RETRO_PRODUCTS } from './retro_data';

const BASE_PRODUCTS: any[] = [
  {
    id: 'elara-derby-oxford',
    name: 'The Elara Derby Oxford',
    category: 'Footwear',
    subCategory: 'Classic Shoes',
    price: 245,
    rating: 4.9,
    reviewsCount: 142,
    description: 'Sleek, premium full-grain leather derby shoes with stacked leather heels and custom Goodyear welts.',
    longDescription: 'Crafted with absolute precision, The Elara Derby Oxford is a masterclass in classic tailoring adapted for the modern individual. Featuring a stunning water-resistant, hand-burnished grain leather upper, stacked leather heels with a durable rubber injection tap, and standard natural cork filling that molds beautifully to your feet over time.',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Espresso', hex: '#3E2723' },
      { name: 'Nero Black', hex: '#121212' },
      { name: 'Oxblood Red', hex: '#4A1521' }
    ],
    details: [
      '100% Top-grain Italian leather',
      'Handmade Goodyear welt construction',
      'Breathable leather lining & cushioned footbed',
      'Stacked heel with anti-slip rubber taps',
      'Resoleable construction for lifelong wear'
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'nomad-suede-chelsea',
    name: 'Nomad Sand Suede Chelsea',
    category: 'Footwear',
    subCategory: 'Boots',
    price: 280,
    rating: 4.8,
    reviewsCount: 94,
    description: 'Minimalist water-repellent sand suede silhouette with elastic side goring and premium crepe soles.',
    longDescription: 'An effortless transition from street-smart elegance to formal refinement. The Nomad Suede Chelsea is carved out of fine water-repellent Italian suede. Fitted with custom shape-retention elastic webbing and a soft-impact crepe rubber sole, providing maximum flexibility and unmatched comfort throughout the day.',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f68917a?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Sand Beige', hex: '#C2B280' },
      { name: 'Taupe Suede', hex: '#8B8589' },
      { name: 'Pitch Black', hex: '#1C1C1C' }
    ],
    details: [
      'Premium Italian calfskin suede',
      'Elasticized ankle double goring',
      'Buttery soft cowhide leather lining',
      'Natural honey crepe shock-absorption sole',
      'Made in Portugal by master artisans'
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'court-leather-sneaker',
    name: 'Court Leather Sneaker',
    category: 'Footwear',
    subCategory: 'Sneakers',
    price: 185,
    rating: 4.7,
    reviewsCount: 215,
    description: 'Chic low-profile monochrome sneakers in premium full-grain calfskin white leather.',
    longDescription: 'An design icon stripped down to its bare essentials. The Court Leather Sneaker represents everyday luxury. No flashy logos, just clean stitched seams, gold-foiled numbering detail, and structured margins. Double-stitched Margom rubber cupsoles ensure this shoe is built to last several seasons.',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Blanc White', hex: '#F9F9F9' },
      { name: 'Alabaster Chalk', hex: '#ECE8DF' },
      { name: 'Midnight Navy', hex: '#1A293E' }
    ],
    details: [
      'Full-grain Italian calf leather upper',
      'Durable Italian Margom stitched rubber soles',
      'Gold-embossed serial numbering on side heel',
      'Organic waxed cotton laces',
      'Removable molded supportive insole'
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-minimalist-mules',
    name: 'The Elara Slip-On Mule',
    category: 'Footwear',
    subCategory: 'Casual',
    price: 190,
    rating: 4.6,
    reviewsCount: 48,
    description: 'Luxe modern slide mules featuring rich drum-dyed espresso vachetta leather straps.',
    longDescription: 'Slip into instant high-fashion composure. Designed in a gorgeous sleek profile, Elara Mules are hand-constructed from exquisite drum-dyed Vachetta leather. They feature an anatomically curved leather footbed with generous arch support, complete with natural textured leather outsoles for quiet, refined strides.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: [
      { name: 'Rich Espresso', hex: '#3B2F2F' },
      { name: 'Nude Ochre', hex: '#D2B48C' },
      { name: 'Obsidian Black', hex: '#0D0D0D' }
    ],
    details: [
      '100% Vegetable tanned Vachetta leather',
      'Contoured cork and leather comfortable arch support',
      'Anti-slippery ribbed outer sole',
      'Minimalist double strap design',
      'Responsibly manufactured in Italy'
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'tailored-cashmere-sweater',
    name: 'Tailored Cashmere Knit Sweater',
    category: 'Apparel',
    subCategory: 'Knitwear',
    price: 195,
    rating: 4.9,
    reviewsCount: 88,
    description: 'Exquisite medium-weight sweater spun from 100% fine organic Mongolian cashmere.',
    longDescription: 'True investment knitwear. This premium Cashmere Sweater is intricately spun from high-grade Mongolian cashmere fibers, known for their exceptional warmth and cloud-like texture. Built with beautiful fully-fashioned shoulder seam details and clean ribbed hems, it offers a sophisticated, semi-structured drape.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#EAE5D9' },
      { name: 'Sage Green', hex: '#8F9779' },
      { name: 'Espresso Brew', hex: '#302927' }
    ],
    details: [
      '100% Grade-A Mongolian Cashmere',
      '12-Gauge tight knit for longevity',
      'Pills-resistant tight weave fibers',
      'Fully-fashioned armholes and necklines',
      'Ribbed collar, cuffs, and hem'
    ],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'relic-structured-coat',
    name: 'Relic Structured Trench Coat',
    category: 'Apparel',
    subCategory: 'Outerwear',
    price: 340,
    rating: 4.9,
    reviewsCount: 74,
    description: 'Double-breasted trench silhouette engineered in smart, weather-resistant structural twill.',
    longDescription: 'Confront shifting seasons with flawless composure. The Relic Coat combines modern military tailoring and premium functionality. Features an elegant wide notch lapel, a structured removable waist sash, deep storm-flap shields, and fine storm-proof, water-shedding technical cotton twill fabric.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Slate Olive', hex: '#484E46' },
      { name: 'Desert Khaki', hex: '#CBB296' },
      { name: 'Classic Black', hex: '#111111' }
    ],
    details: [
      'Water-repellent structured organic cotton twill',
      'Double-breasted designer tortoise buttoning',
      'Deep functional side pockets and security interior zip',
      'Adjustable buckled cuff tabs',
      'Fully lined with premium anti-frictional viscose satin'
    ],
    isNewArrival: true,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'heavyweight-cotton-tee',
    name: 'Heavyweight Mock Neck Tee',
    category: 'Apparel',
    subCategory: 'Essentials',
    price: 65,
    rating: 4.7,
    reviewsCount: 312,
    description: 'Boxy, custom-fit luxury tee constructed in durable 280GSM organic cotton fibers.',
    longDescription: 'The perfect fundamental tee. Engineered to retain its boxy aesthetic, drop shoulders, and clean structured neckline wash after wash. Crafted from carefully combed organic ring-spun cotton that feels soft against the skin but provides substantial, rigid structured volume to coordinate easily with linen and denim.',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Chalk White', hex: '#FAF9F6' },
      { name: 'Ink Charcoal', hex: '#2C2C2C' },
      { name: 'Clay Sand', hex: '#C8B9A6' }
    ],
    details: [
      '100% Heavyweight Organic Cotton (280 GSM)',
      'Thick tight-knit ribs mock collar',
      'Reinforced taping along shoulder seams',
      'Preshrunk material to ensure fit retention',
      'Eco-friendly low-impact fiber dyeing'
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'tailored-linen-shirt',
    name: 'Classic Neutral Linen Shirt',
    category: 'Apparel',
    subCategory: 'Essentials',
    price: 110,
    rating: 4.8,
    reviewsCount: 104,
    description: 'Elegant relaxed button-down styled in breathable, moisture-wicking premium long-staple Irish linen.',
    longDescription: 'Stay cool and collected. Spun from long-staple linen yarn locally harvested in Ireland, this shirt is naturally breathable and beautifully textured. Styled to be worn loosely tucked or completely casual, with custom curved mother-of-pearl buttons, a elegant French placket, and fine double-needle flat-felled seam detailing.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Bleached Linen', hex: '#EDEBE2' },
      { name: 'French Sky Blue', hex: '#C2D1E5' },
      { name: 'Sage Haze', hex: '#A3AC95' }
    ],
    details: [
      '100% Long-staple premium European linen',
      'Genuine hand-selected mother-of-pearl buttons',
      'Soft enzyme washed to prevent scratchiness',
      'Sophisticated adjustable mitered cuffs',
      'Relaxed yet tailored athletic silhouette'
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'fluid-midi-skirt',
    name: 'Fluid Premium Midi Skirt',
    category: 'Apparel',
    subCategory: 'Bottoms',
    price: 135,
    rating: 4.6,
    reviewsCount: 65,
    description: 'Graceful Japanese satin fluid-drape skirt with hidden flexible waistband and asymmetric clean seams.',
    longDescription: 'Capturing light and liquid movement in equal measure. This asymmetric pleated skirt is tailored from heavy-gauge Japanese satin. The fabric is cut on the bias to hug curves elegantly before cascading into a fluid, sweeping midi length. Ideal for elevated daylight pairings and nighttime gatherings.',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Steel Pewter', hex: '#6D7175' },
      { name: 'Champagne Toast', hex: '#E5D6C5' },
      { name: 'Caviar Black', hex: '#141414' }
    ],
    details: [
      'Luxurious heavyweight Japanese satin-crepe',
      'Flattering bias cut structure',
      'Comfort-focused invisible elastic inner waistband',
      'Clean blind-stitched lower hemline',
      'Breathable, non-static fabric structure'
    ],
    isNewArrival: false,
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'cropped-wool-trousers',
    name: 'Cropped Italian Wool Trousers',
    category: 'Apparel',
    subCategory: 'Bottoms',
    price: 175,
    rating: 4.8,
    reviewsCount: 119,
    description: 'Clean slim-taper Wool-blend trousers with crisp formal leg creases and secure coin pockets.',
    longDescription: 'The perfect foundation for both smart-casual sneakers and classic oxfords. Spun in a medium-weight premium Italian virgin wool blend with a hint of stretch for responsive comfort. Crisp pressed front creases, premium herringbone inner lining bands, and clean angled side slice pockets offer unparalleled executive polish.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: ['S (30)', 'M (32)', 'L (34)', 'XL (36)'],
    colors: [
      { name: 'Deep Charcoal', hex: '#373A40' },
      { name: 'Warm Taupe', hex: '#776B5D' },
      { name: 'Bespoke Striped Navy', hex: '#181A24' }
    ],
    details: [
      '78% Italian virgin wool, 20% organic cotton, 2% elastane',
      'YKK heavy-duty double clip trouser zip closures',
      'Refined front pressed permanent pleat lines',
      'Double back welt pockets with button stays',
      'Herringbone cotton-blend anti-ride interior waistband waist sash'
    ],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },

  // ==================== 50 NEW ITEMS ADDED BELOW ====================

  // ----- FOOTWEAR (1-16) -----
  {
    id: 'elara-penny-loafer',
    name: 'Heritage Leather Penny Loafer',
    category: 'Footwear',
    subCategory: 'Classic Shoes',
    price: 210,
    rating: 4.8,
    reviewsCount: 78,
    description: 'Refined calfskin loafers crafted with traditional hand-sewn apron seams and stacked low heels.',
    longDescription: 'A quiet-luxury staple for smart everyday styling. These Penny Loafers are constructed from glove-soft French calfskin. Fitted with memory foam inner soles and classic hand-sewn apron stitch details to deliver premium comfort and supreme durability.',
    images: ['https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Oxblood Red', hex: '#4A1521' },
      { name: 'Nero Black', hex: '#121212' }
    ],
    details: ['100% fine grain French calfskin', 'Molded leather cushioned footbed', 'Hand-stitched apron details'],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-hiker-boot',
    name: 'Alpine Suede Hiker Boot',
    category: 'Footwear',
    subCategory: 'Boots',
    price: 290,
    rating: 4.9,
    reviewsCount: 34,
    description: 'Rugged yet elegant mountain boots detailed with waxed heavy cotton laces and brass speed hooks.',
    longDescription: 'Crafted for both winding nature trails and the cityscape, the Alpine Suede Hiker Boot combines tough weatherproof protection with high-end style. Lined with ultra-warm shearling and mounted on custom durable Vibram lug outsoles.',
    images: ['https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Hazelnut Suede', hex: '#8C6239' },
      { name: 'Charcoal Black', hex: '#2B2B2B' }
    ],
    details: ['Water-repellent calf suede upper', 'Warm Shearling insulation', 'Genuine Vibram custom lug sole'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-retro-sneaker',
    name: 'Vanguard Retro Gum Sneaker',
    category: 'Footwear',
    subCategory: 'Sneakers',
    price: 175,
    rating: 4.7,
    reviewsCount: 162,
    description: 'Nostalgic, sports-inspired trainers using supple suede panels and vulcanized natural gum rubber soles.',
    longDescription: 'Embodying vintage athleticism with modern architectural comfort. Features an ultra-light orthotic insock, retro color-blocking panels, and a low-slung, highly flexible natural raw gum sole for responsive traction.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Off-White', hex: '#F5F5F0' },
      { name: 'Forest Green Accent', hex: '#1F3F32' }
    ],
    details: ['Suede and organic cotton canvas paneling', 'Natural vulcanized gum rubber sole', 'Ergonomic orthotic cupsole support'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-fisherman-sandal',
    name: 'Tiber Fisherman Strapped Sandal',
    category: 'Footwear',
    subCategory: 'Casual',
    price: 160,
    rating: 4.6,
    reviewsCount: 29,
    description: 'Heritage-inspired strapped leather sandals fitted with antique brass buckles and structured footbeds.',
    longDescription: 'Capturing warm seaside ease. Hand-crafted in Italy with cross-woven vegetable tanned leather straps. Perfect when styled with lightweight linen trousers or casual shorts during breezy summer getaways.',
    images: ['https://images.unsplash.com/photo-1481841525373-4702a82b53a6?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: [
      { name: 'Cognac Brown', hex: '#8B4513' },
      { name: 'Obsidian Black', hex: '#000000' }
    ],
    details: ['100% fine vegetable tanned cowhide', 'Cushioned contour-molded cork insole', 'Solid rustproof brass strap details'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-ballet-flat',
    name: 'Atelier Ballet Square Flat',
    category: 'Footwear',
    subCategory: 'Casual',
    price: 145,
    rating: 4.5,
    reviewsCount: 42,
    description: 'Ultra-flexible square-toe ballet flats tailored in beautifully glove-soft lambskin leather.',
    longDescription: 'An everyday luxury for the minimalist. Engineered with an elasticated elastic top line that moves in perfect harmony with your stride. Finished with structured, elegant hand-knotted elastic bows.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    colors: [
      { name: 'Nude Beige', hex: '#D2B48C' },
      { name: 'Classic Black', hex: '#1C1C1C' }
    ],
    details: ['Italian micro-grain lambskin leather', 'Incredibly flexible leather-cushioned sole', 'Signature hand-knotted neat bows'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-shearling-slide',
    name: 'Cozy Merino Shearling Slide',
    category: 'Footwear',
    subCategory: 'Casual',
    price: 120,
    rating: 4.8,
    reviewsCount: 83,
    description: 'Luxe loungewear sandals completely lined in fluffy natural Australian Merino wool shearling.',
    longDescription: 'Unrivaled comfort for relaxed luxury living. Conceived for indoor relaxation or quick walks, featuring an ergonomic wide leather double strap alongside durable non-marking rubber traction outsoles.',
    images: ['https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    colors: [
      { name: 'Oatmeal Shearling', hex: '#F0E6D2' },
      { name: 'Taupe Clay', hex: '#9C8E7F' }
    ],
    details: ['Genuine Australian Merino shearling lining', 'Double adjustable leather main straps', 'Anti-slip ribbed lightweight rubber outsoles'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-desert-chukka',
    name: 'Savannah Suede Desert Chukka',
    category: 'Footwear',
    subCategory: 'Boots',
    price: 220,
    rating: 4.7,
    reviewsCount: 51,
    description: 'Classic eyelet desert boots hand-formed from fine calfskin suede over lightweight crepe rubber.',
    longDescription: 'Effortlessly bridges casual luxury and tailored charm. Features high-grade split suede uppers that mold perfectly to your feet, paired with natural crepe soles that naturally absorb pavement shocks.',
    images: ['https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Tobacco Suede', hex: '#A0522D' },
      { name: 'Sand Drift', hex: '#E6D8B8' }
    ],
    details: ['Genuine Italian split suede leather', 'Traditional handworked stitched welts', 'Absorbent natural crepe rubber bottoming'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-monk-strap',
    name: 'Regency Double Monk Strap',
    category: 'Footwear',
    subCategory: 'Classic Shoes',
    price: 260,
    rating: 4.9,
    reviewsCount: 46,
    description: 'Polished box-calf formal shoes finished with double silver buckles and elegant brogue punch trims.',
    longDescription: 'An executive masterpiece. Structured with a slim chiselled toe box and premium Blake-stitched outsoles. Hand-burnished edges create a rich, multi-tonal leather finish of timeless prestige.',
    images: ['https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Mahogany Burnished', hex: '#5C4033' },
      { name: 'Nero Satin', hex: '#141414' }
    ],
    details: ['Blake welted sole construction method', 'Anti-rust stainless steel buckle closures', 'Buttery soft cowhide lining throughout'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-chelsea-lug',
    name: 'Metropolis Chunky Chelsea Boot',
    category: 'Footwear',
    subCategory: 'Boots',
    price: 270,
    rating: 4.8,
    reviewsCount: 69,
    description: 'Modernized Chelsea boots styling heavy leather panels over thick, rugged lightweight EVA lug soles.',
    longDescription: 'High-fashion utility built to master city sidewalks. Elasticated ankle panels allow for effortless on-and-off grip, balanced by a double pull-tab accent and specialized grip treads.',
    images: ['https://images.unsplash.com/photo-1638247025967-b4e38f68917a?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Vanta Black', hex: '#0B0B0B' },
      { name: 'Chalk Clay Accent', hex: '#D2C9B9' }
    ],
    details: ['Waterproof treatment full-grain leather outer', 'High-loft EVA shock absorbing midsoles', 'Nylon webbed heavy pull loops'],
    isNewArrival: true,
    inStock: false
  },
  {
    id: 'elara-woven-slide',
    name: 'Riviera Handwoven Leather Slide',
    category: 'Footwear',
    subCategory: 'Casual',
    price: 115,
    rating: 4.6,
    reviewsCount: 38,
    description: 'Breezy multi-strap slides masterfully hand-woven using soft, skin-friendly vachetta leather.',
    longDescription: 'Constructed to feel like second skin. These slides employ complex interlocking leather weaves that naturally flex with your foot. Finished with lightweight natural wood grain stacked heels.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    colors: [
      { name: 'Caramel Honey', hex: '#C68E56' },
      { name: 'Pebble White', hex: '#EAEAEA' }
    ],
    details: ['100% genuine hand-cut vachetta leather strips', 'Flexible leather outsoles with rubber grip pads', 'Eco-conscious minimal adhesive assembly'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-block-heel',
    name: 'Sloane Minimalist Block Heel',
    category: 'Footwear',
    subCategory: 'Classic Shoes',
    price: 210,
    rating: 4.7,
    reviewsCount: 57,
    description: 'Sleek, glove-leather slingback heels structured with a comfortable 50mm architectural block heel.',
    longDescription: 'Transition elegantly from daylong studio sessions to dining clubs. Styled with delicate ankle straps and specialized shock-absorbing gel inserts beneath your toes.',
    images: ['https://images.unsplash.com/photo-1616606103915-dea7be788566?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    colors: [
      { name: 'Warm Taupe', hex: '#8B8589' },
      { name: 'Velvet Black', hex: '#18181A' }
    ],
    details: ['Soft Italian calfskin leather uppers', 'Steady 50mm solid square block heel', 'Adjustable buckle straps with hidden elastic'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-espadrille',
    name: 'Costa Brava Linen Espadrille',
    category: 'Footwear',
    subCategory: 'Casual',
    price: 95,
    rating: 4.5,
    reviewsCount: 31,
    description: 'Laid-back flat espadrilles crafted with traditional woven jute midsoles and fine linen uppers.',
    longDescription: 'Brimming with coastal European energy. Employs reinforcement canvas toe box guards and vulcanized rubber outsoles directly bonded underneath the organic hand-spun jute cords.',
    images: ['https://images.unsplash.com/photo-1481841525373-4702a82b53a6?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    colors: [
      { name: 'Raw Oatmeal', hex: '#E1DEC8' },
      { name: 'Navy Blue Stripes', hex: '#1E2F4D' }
    ],
    details: ['100% ecological unbleached linen fabric', 'Woven natural organic jute cord wrap', 'Reinforced canvas toe protector stitching'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-running-trainer',
    name: 'Aether Flight Knit Trainer',
    category: 'Footwear',
    subCategory: 'Sneakers',
    price: 165,
    rating: 4.8,
    reviewsCount: 114,
    description: 'Aerodynamic running sneakers built with breathable engineered knit uppers and lightweight responsive foam.',
    longDescription: 'A technical runner designed to blur lines between active performance and refined urban uniform. Featuring a seamless sock-like stretch knit collar and custom high-rebound cushioning plates.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Asphalt Grey', hex: '#58595B' },
      { name: 'Snow Peak White', hex: '#FDFDFD' }
    ],
    details: ['Recycled plastic thread knitted collar', 'Zero-gravity high-rebound responsive midsoles', 'Heat-fused minimal TPU reinforcement lines'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-velvet-slipper',
    name: 'Gala Embroidered Velvet Slipper',
    category: 'Footwear',
    subCategory: 'Classic Shoes',
    price: 185,
    rating: 4.9,
    reviewsCount: 22,
    description: 'Opulent velvet slippers featuring a luxurious quilted silk lining and hand-finished piping.',
    longDescription: 'Sophistication redefined for intimate soirées and elegant lounging. Handmade using finest Italian velvet, featuring a sleek, low profile and a padded core that provides unparalleled steps.',
    images: ['https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Royal Midnight Blue', hex: '#0B1325' },
      { name: 'Imperial Ruby', hex: '#4A0E17' }
    ],
    details: ['Premium high-loft cotton velvet upper', '100% pure silk diamond quilted insides', 'Durable waxed edge leather outsoles'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-winter-boot',
    name: 'Nordic Insulated Winter Boot',
    category: 'Footwear',
    subCategory: 'Boots',
    price: 310,
    rating: 4.9,
    reviewsCount: 39,
    description: 'All-weather, heavy-duty boots featuring deep fleece linings and tough waterproof leather construction.',
    longDescription: 'Crafted to shield you from sub-zero temperatures. Features deep lug soles for steady traction on icy street walks, paired with a modern high-fashion silhouette that fits seamlessly below wool trousers.',
    images: ['https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Bison Tan', hex: '#5F462B' },
      { name: 'Stealth Black', hex: '#161616' }
    ],
    details: ['Double waterproof seam-sealed membrane', 'Tough 400g hollow-core fleece insulation', 'Nonslip heavy winter compound rubber soles'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-driver-moc',
    name: 'San Remo Pebbled Driving Moc',
    category: 'Footwear',
    subCategory: 'Casual',
    price: 195,
    rating: 4.7,
    reviewsCount: 71,
    description: 'Heritage driving loafers structured with premium pebbled leather and studded pod outsoles.',
    longDescription: 'An effortless weekend classic. Meticulously handcrafted from supple pebbled cowhide, utilizing a timeless moccasin-stitched toe box to ensure supreme elasticity and luxury performance.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colors: [
      { name: 'Espresso Pebbled', hex: '#312A26' },
      { name: 'Royal Navy Blue', hex: '#1A293E' }
    ],
    details: ['Full grain pebbled leather structure', 'Individual rubber pod friction grip soles', 'Traditional hand-laced design details'],
    isBestSeller: true,
    inStock: true
  },

  // ----- ACCESSORIES (17-34) -----
  {
    id: 'elara-leather-tote',
    name: 'Verdant Calfskin Shopper Tote',
    category: 'Accessories',
    subCategory: 'Bags',
    price: 295,
    rating: 4.9,
    reviewsCount: 104,
    description: 'Generously scaled shopper tote tailored in pebble-grained calfskin leather with dynamic interior pocket snaps.',
    longDescription: 'Constructed for daily travel organization. Incorporates solid brass keys clasps, a raw suede protective lining, and heavy-duty, reinforced double-stitched leather shoulder handles.',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Forest Olive', hex: '#2E3B1E' },
      { name: 'Cognac Gold', hex: '#8C6B46' }
    ],
    details: ['100% pebbled calfskin outer shell', 'Solid rustless brass anchor accessories', 'Includes a zippered leather accessory pouch'],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-aviator-sunglasses',
    name: 'Aurelia Round Aviator Sunglasses',
    category: 'Accessories',
    subCategory: 'Eyewear',
    price: 150,
    rating: 4.8,
    reviewsCount: 119,
    description: 'Lightweight Japanese titanium frames fitted with scratchproof polarized Carl Zeiss green lenses.',
    longDescription: 'Timeless round shapes engineered for lightweight, all-day facial comfort. Handcrafted in Sabae, Japan with hypoallergenic titanium metal arms and premium shatterproof optics.',
    images: ['https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: '18k Gold Plate', hex: '#D4AF37' },
      { name: 'Gunmetal Titanium', hex: '#4A4C4E' }
    ],
    details: ['Premium Japanese pure titanium metal arms', '100% UVA/UVB Carl Zeiss polarized green filters', 'Include leather case and microfibre cloth'],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-wool-beanie',
    name: 'Steward Ribbed Merino Beanie',
    category: 'Accessories',
    subCategory: 'Hats',
    price: 55,
    rating: 4.8,
    reviewsCount: 204,
    description: 'Super-soft slouch beanie tightly woven in premium heavyweight Australian Merino wool fibers.',
    longDescription: 'An essential cold-weather companion. Designed with an adjustable wide fold-over brim to regulate temperature on brisk mornings. Outstanding shape retention for long-term wear.',
    images: ['https://i.ibb.co/ccrR02pT/BEanie-boy.webp'],
    sizes: ['One Size'],
    colors: [
      { name: 'Alabaster Salt', hex: '#EAE6DF' },
      { name: 'Coal Grey Heather', hex: '#3E4144' }
    ],
    details: ['100% fine spun Australian Merino wool', 'Dense 4-ply ribbing structures and patterns', 'Itch-free extra-fine comfort feel'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-linen-tote',
    name: 'Oasis Raw Linen Beach Bag',
    category: 'Accessories',
    subCategory: 'Bags',
    price: 85,
    rating: 4.6,
    reviewsCount: 47,
    description: 'Spacious unstructured shoulder shopper bag stitched from durable, heavy unbleached French flax.',
    longDescription: 'The perfect companion for weekends or beach escapes. Constructed in sturdy heavyweight canvas linen weave, detailed with soft leather shoulder handles, dynamic key ties, and deep waterproof side pocket liners.',
    images: ['https://images.unsplash.com/photo-1598532163257-ae3c6b2524d6?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Natural Sand Flax', hex: '#DDD2BA' },
      { name: 'Classic Black Stripes', hex: '#202022' }
    ],
    details: ['100% heavy unbleached French linen canvas', 'Washed saddle brown calfskin leather straps', 'Waterproof inner pocket liners'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-classic-wallet',
    name: 'Saffiano Split-Fold Wallet',
    category: 'Accessories',
    subCategory: 'Leather Goods',
    price: 125,
    rating: 4.7,
    reviewsCount: 89,
    description: 'Sleek split-fold formal wallet optimized with RFID protection block layers across 8 card slots.',
    longDescription: 'Sleek craftsmanship tailored for smart organization. Constructed from scratchproof Italian Saffiano calfskin, offering structured note sections and premium leather-lined interior dividers.',
    images: ['https://images.unsplash.com/photo-1627124718515-e24abeb03808?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Noir Black', hex: '#1C1C1E' },
      { name: 'Cognac Saddle', hex: '#83522B' }
    ],
    details: ['Sturdy water-resistant Saffiano calfskin', 'Seamless built-in gold RFID shielding layers', 'Hand-painted matching leather outer borders'],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-woven-belt',
    name: 'Saddle Hand-Braided Leather Belt',
    category: 'Accessories',
    subCategory: 'Leather Goods',
    price: 75,
    rating: 4.7,
    reviewsCount: 61,
    description: 'Textured casual belts braided from vachetta leather straps and detailed with solid brass buckles.',
    longDescription: 'Add structured texture to selvedge denim or tailored wide linen pants. Made with flexible hand-woven braids that allow for tailored micro-adjustability with no pre-drilled holes needed.',
    images: ['https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S (30)', 'M (34)', 'L (38)'],
    colors: [
      { name: 'Rich Tan Leather', hex: '#9E6B43' },
      { name: 'Nero Black', hex: '#111111' }
    ],
    details: ['Finest hand-plaited full vegetable tanned leather', 'Rustproof heavy solid brass single prong buckle', 'Edge-painted border bands'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-silk-scarf',
    name: 'Abstract Vista Printed Silk Scarf',
    category: 'Accessories',
    subCategory: 'Scarves',
    price: 110,
    rating: 4.8,
    reviewsCount: 52,
    description: 'Stunning premium silk twill accessory scarf featuring hand-rolled edges and original painted art prints.',
    longDescription: 'Spun from fine heavyweight Mulberry silk twill. Depicts high-art minimalist mountain paintings in organic, low-impact botanical ink, perfect for draping across coat necklines or securing around bag handles.',
    images: ['https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Ochre Landscape', hex: '#CBAF82' },
      { name: 'Indigo Dream', hex: '#2A3C56' }
    ],
    details: ['100% high-grade Italian Mulberry silk twill', 'Exquisite hand-rolled needle boundaries', 'Gently washed for a liquid fluid drape'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-silver-watch',
    name: 'Heritage Minimalist Steel Watch',
    category: 'Accessories',
    subCategory: 'Jewelry',
    price: 320,
    rating: 4.9,
    reviewsCount: 43,
    description: 'Architectural wristwatches designed in hypoallergenic surgical steel and driven by solid Swiss quartz.',
    longDescription: 'An ultra-slim, low-profile timekeeper featuring scratchproof sapphire glass lenses, finished with beautiful full-grain black leather watch straps.',
    images: ['https://images.unsplash.com/photo-1523170335258-f5ed11844a1b?q=80&w=600&auto=format&fit=crop'],
    sizes: ['40mm Head'],
    colors: [
      { name: 'Silver Slate', hex: '#C0C0C0' },
      { name: 'Rose Gold Accent', hex: '#B76E79' }
    ],
    details: ['High resistant surgical stainless steel casing', 'Scratchproof anti-reflective sapphire crystal glass', '50M Water resistant construction'],
    isNewArrival: true,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-canvas-duffel',
    name: 'Nomad Waxed Canvas Duffel',
    category: 'Accessories',
    subCategory: 'Bags',
    price: 195,
    rating: 4.8,
    reviewsCount: 64,
    description: 'Rugged weekend travel bag crafted in thick water-repellant paraffin canvas with thick luggage trims.',
    longDescription: 'Ready for cross-border journeys or country road escapes. Offers deep zippered pockets, shoe compartmentalizers, and heavy-duty brass locks.',
    images: ['https://images.unsplash.com/photo-1598532163257-ae3c6b2524d6?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Olive Drab', hex: '#555D50' },
      { name: 'Tobacco Wax', hex: '#634A35' }
    ],
    details: ['Heavy 18oz waterproof paraffin canvas', 'Full-grain oiled bridle accents', 'Fully adjustable matching padded shoulder straps'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-gold-dome-ring',
    name: 'Atelier Gold Vermeil Dome Ring',
    category: 'Accessories',
    subCategory: 'Jewelry',
    price: 90,
    rating: 4.7,
    reviewsCount: 132,
    description: 'High-polish statement ring sculpted in pure 925 sterling silver plated with heavy 18k yellow gold.',
    longDescription: 'A gorgeous bold visual statement design that stacks cleanly beside simple bands. Features a hypoallergenic high-comfort inner profile shape.',
    images: ['https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=600&auto=format&fit=crop'],
    sizes: ['6', '7', '8'],
    colors: [
      { name: '18k Gold Plated', hex: '#E2BF7D' },
      { name: 'Sterling Silver', hex: '#EAEAEA' }
    ],
    details: ['Core made in certified recycled sterling silver', 'Heavy 2.5 micron thick 18k yellow gold layers', 'Highly polished by hand'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-leather-glove',
    name: 'Sartorial Cashmere Leather Gloves',
    category: 'Accessories',
    subCategory: 'Leather Goods',
    price: 105,
    rating: 4.8,
    reviewsCount: 37,
    description: 'Fine lambskin dry-weather gloves lined with ultra-soft 100% Mongolian knit cashmere.',
    longDescription: 'Winter elegance. Tailored from premium, thin-gauge lambskin leather that allows for natural dexterity. Finished with subtle touchscreen-compatible fingertips.',
    images: ['https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Saddle Mocha', hex: '#4A3B32' },
      { name: 'Classic Black', hex: '#1C1C1E' }
    ],
    details: ['Ultra-fine Grade-A Italian Nappa leather', '100% fine spun organic Mongolian cashmere lining', 'Touchscreen operational pointers'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-fedora-hat',
    name: 'Antis Wool Felt Fedora Hat',
    category: 'Accessories',
    subCategory: 'Hats',
    price: 130,
    rating: 4.6,
    reviewsCount: 41,
    description: 'Wide-brimmed fedora hat structured in dense, water-resistant Ecuadorian wool felt.',
    longDescription: 'Engineered with classic center dents and a luxurious interior leather sweatband to ensure unmatched luxury performance.',
    images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop'],
    sizes: ['57 cm', '59 cm'],
    colors: [
      { name: 'Bison Brown', hex: '#583A20' },
      { name: 'Charcoal Black', hex: '#262626' }
    ],
    details: ['100% natural wool felt', 'Inside stitched premium cowhide leather sweatband', 'Elegant matching leather hatband detail'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-minimalist-backpack',
    name: 'Monolith Slim Laptop Backpack',
    category: 'Accessories',
    subCategory: 'Bags',
    price: 240,
    rating: 4.8,
    reviewsCount: 81,
    description: 'Architectural daily computer packs designed in water-resistant matte nylon and leather trims.',
    longDescription: 'Sleek geometric outlines built for tech-savvy commuters. Features luggage trolley pass-through straps and secret pockets for valuables.',
    images: ['https://images.unsplash.com/photo-1598532163257-ae3c6b2524d6?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Ash Matte Grey', hex: '#4D4D4F' },
      { name: 'Carbon Black', hex: '#121213' }
    ],
    details: ['1680D high-density ballistic matte nylon', 'Waterproof taped YKK zipper profiles', 'Internal neoprene tablet sleeve fitting'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-silver-pendant',
    name: 'Stardust Sterling Silver Pendant',
    category: 'Accessories',
    subCategory: 'Jewelry',
    price: 115,
    rating: 4.7,
    reviewsCount: 56,
    description: 'Minimalist solid pendant crafted in verified recycled sterling silver hanging on 22" box chains.',
    longDescription: 'Features original textured surfaces designed to mimic asteroid topographies. Lightweight and hand-cast for refined daily style.',
    images: ['https://images.unsplash.com/photo-1627124718515-e24abeb03808?q=80&w=600&auto=format&fit=crop'],
    sizes: ['22" Chain'],
    colors: [
      { name: 'Sterling Silver 925', hex: '#D6D6D6' },
      { name: 'Burnished Gunmetal', hex: '#313233' }
    ],
    details: ['Genuine certified 925 sterling silver metal', 'Thin elegant box chain link with lobster clasp', 'Tarnish-free protective finish coating'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-card-holder',
    name: 'Sloane Minimalist Card Case',
    category: 'Accessories',
    subCategory: 'Leather Goods',
    price: 65,
    rating: 4.6,
    reviewsCount: 154,
    description: 'Sleek, low-profile card cases crafted in structured pebbled calfskin with central notes slots.',
    longDescription: 'Ditch pocket bulk. Constructed to accommodate 4 essential credit cards plus emergency cash in a clean, minimalist profile.',
    images: ['https://images.unsplash.com/photo-1627124718515-e24abeb03808?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Cognac Saffiano', hex: '#795034' },
      { name: 'Stealth Black', hex: '#111112' }
    ],
    details: ['Premium scratch resistant pebbled calfskin', 'Slim, edge-painted border trims', 'Central deep note-slits lined with heavy silk'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-ceramic-mug',
    name: 'Enso Studio Hand-Thrown Mug',
    category: 'Accessories',
    subCategory: 'Ceramics',
    price: 45,
    rating: 4.9,
    reviewsCount: 61,
    description: 'Artisanal stoneware mugs glazed in organic speckle textures with generous wide loop handles.',
    longDescription: 'Add quiet pleasure to your morning rituals. Individually wheeled in our partner workshop. Features thick insulated body framing to preserve beverage heat.',
    images: ['https://images.unsplash.com/photo-1598532163257-ae3c6b2524d6?q=80&w=600&auto=format&fit=crop'],
    sizes: ['350 ml'],
    colors: [
      { name: 'Speckled Oatmeal', hex: '#DFD2C4' },
      { name: 'Earthy Charcoal Mud', hex: '#4B4A47' }
    ],
    details: ['100% natural textured stoneware clay body', 'Food-safe lead-free reactive glaze formula', 'Dishwasher and microwave compatible'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-brass-keychain',
    name: 'Sentry Solid Brass Hook Keychain',
    category: 'Accessories',
    subCategory: 'Hardware',
    price: 35,
    rating: 4.8,
    reviewsCount: 224,
    description: 'Heavy duty pocket hooks cast from solid brass detailed with custom-stamped screw rings.',
    longDescription: 'Engineered to hook seamlessly over utility tabs or jean belt loops. Develops a highly dramatic golden patina over decades of use.',
    images: ['https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Brushed Brass', hex: '#C3A355' },
      { name: 'Antique Bronze', hex: '#63533B' }
    ],
    details: ['100% pure sand-cast marine brass alloy', 'Heavy threaded solid matching brass screw locks', 'Hand-stamped atelier brand coordinates'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-leather-portfolio',
    name: 'Atelier A4 Zippered Portfolio',
    category: 'Accessories',
    subCategory: 'Leather Goods',
    price: 160,
    rating: 4.9,
    reviewsCount: 18,
    description: 'Professional document cases designed for corporate and creative use, accommodating A4 portfolios fully.',
    longDescription: 'Exquisite workspace presentation. Houses customized iPad slots, pen docks, and secure slip folders within a sleek leather profile.',
    images: ['https://images.unsplash.com/photo-1627124718515-e24abeb03808?q=80&w=600&auto=format&fit=crop'],
    sizes: ['One Size'],
    colors: [
      { name: 'Nero Satin', hex: '#161617' },
      { name: 'Amber Saddle', hex: '#915331' }
    ],
    details: ['Sleek semi-rigid calf leather shell', 'High grade smooth-running bronze side zips', 'Fine organic heavy-cotton interior canvas'],
    isNewArrival: true,
    inStock: true
  },

  // ----- APPAREL (35-50) -----
  {
    id: 'elara-silk-blouse',
    name: 'Amara Asymmetric Raw Silk Blouse',
    category: 'Apparel',
    subCategory: 'Shirts',
    price: 165,
    rating: 4.7,
    reviewsCount: 44,
    description: 'Ethereal asymmetric blouse spun in heavyweight raw mulberry silk with a beautiful textured finish.',
    longDescription: 'Elevating artistic tailored dressing. This asymmetric wrap tunic delivers a beautiful drape and subtle organic luster, complementing tailored wool pants beautifully.',
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Gilded Champagne', hex: '#EAE1CE' },
      { name: 'Charcoal Silk', hex: '#2B2B2B' }
    ],
    details: ['100% fine spun organic Mulberry raw silk', 'Elegant wrap closures with hidden snap bounds', 'Dry clean only to maintain raw luster'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-selvedge-denim',
    name: 'Decade Raw Indigo Selvedge Denim',
    category: 'Apparel',
    subCategory: 'Bottoms',
    price: 145,
    rating: 4.8,
    reviewsCount: 92,
    description: 'Classic straight-leg jeans woven in premium 13.5oz shuttle-loom Japanese selvedge denim.',
    longDescription: 'Raw, unwashed denim built to break in uniquely. Fades organically over time based on your daily journeys. Detailed with classic indigo red-line selvedge cuffs.',
    images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop'],
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Deep Indigo Raw', hex: '#1A2340' }
    ],
    details: ['13.5oz authentic Japanese selvedge denim', 'Solid copper washer reinforcements', 'Traditional red-line selvedge edge lines'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-linen-trousers',
    name: 'Atelier Wide-Leg Flax Trousers',
    category: 'Apparel',
    subCategory: 'Bottoms',
    price: 130,
    rating: 4.6,
    reviewsCount: 54,
    description: 'Sophisticated relaxed linen pants detailed with deep double pleats and double back tabs.',
    longDescription: 'Unmatched breathability met with executive tailoring. Cut from high-gauge European flax yarn, pre-washed to bypass seasonal scratchiness.',
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S (30)', 'M (32)', 'L (34)'],
    colors: [
      { name: 'Sand Flax', hex: '#CBBBA3' },
      { name: 'Ink Charcoal', hex: '#2D2D2E' }
    ],
    details: ['100% pre-washed Belgian ecological flax linen', 'Comfort-focused internal hook trouser bar adjustments', 'Finished with sustainable tagua nut button closures'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-chambray-shirt',
    name: 'Pioneer Garment-Dyed Chambray',
    category: 'Apparel',
    subCategory: 'Shirts',
    price: 115,
    rating: 4.7,
    reviewsCount: 82,
    description: 'Rugged button-down shirt woven in durable medium cotton chambray and pre-softened for comfort.',
    longDescription: 'Designed with beautiful triple-needle chain-stitch seams, robust double chest pockets, and real mother-of-pearl buttons. An essential daily layer.',
    images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Lightwashed Blue', hex: '#9EBCD8' },
      { name: 'Sartorial Charcoal', hex: '#3E4144' }
    ],
    details: ['100% fine organic long-chain cotton yarn', 'Sturdy triple-stiff structural chain stitch', 'Glove soft wash finishing'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-utility-jacket',
    name: 'Sentry Canvas Field Jacket',
    category: 'Apparel',
    subCategory: 'Outerwear',
    price: 220,
    rating: 4.9,
    reviewsCount: 63,
    description: 'Heavy duty military jackets crafted in durable cotton duck canvases with soft corduroy collars.',
    longDescription: 'An impenetrable shield against wind and cold drafts. Features large gusseted utility pockets, hand-warmer pockets, and adjustable brass waist snaps.',
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Field Olive', hex: '#4B5320' },
      { name: 'Umber Brown', hex: '#5C4033' }
    ],
    details: ['High resistant 15oz premium cotton duck canvas', 'Super soft corduroy collars and cuff-linings', 'High grade rustproof YKK metal zip closures'],
    isNewArrival: false,
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-merino-polo',
    name: 'Crest Knit Merino Long-Sleeve Polo',
    category: 'Apparel',
    subCategory: 'Knitwear',
    price: 125,
    rating: 4.8,
    reviewsCount: 110,
    description: 'Fine-knitted longsleeve polo spun from fine gauge Italian Merino wool with French plackets.',
    longDescription: 'Beautifully transitions between warm tailored comfort and relaxed weekend layers. Styled with clean seamless neck collars and deep ribbed cuffs to deliver a sleek fit.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Espresso Brew', hex: '#352B26' },
      { name: 'Glacier Blue', hex: '#A8BFCF' }
    ],
    details: ['100% fine organic 16-Gauge Italian Merino', 'Seamless flat-knitted neck collars', 'Premium natural shell button down plackets'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-slip-dress',
    name: 'Atelier Satin V-Neck Slip Dress',
    category: 'Apparel',
    subCategory: 'Bottoms',
    price: 180,
    rating: 4.7,
    reviewsCount: 48,
    description: 'Graceful V-neck slip dresses tailored in heavy Japanese silk-crepe with thin spaghetti straps.',
    longDescription: 'Captures a beautiful liquid fluid drape. Perfect when styled layered over fine-knit mock necks or worn standalone with minimal jewelry for night settings.',
    images: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne Satin', hex: '#EAE1CE' },
      { name: 'Noir Satin', hex: '#1C1C1D' }
    ],
    details: ['Premium bias-cut heavyweight Japanese crepe', 'Discreet, strong micro-spaghetti straps', 'Blind-stitched clean trailing hemline'],
    isBestSeller: false,
    inStock: true
  },
  {
    id: 'elara-wool-blazer',
    name: 'Monolith Unstructured Tweed Blazer',
    category: 'Apparel',
    subCategory: 'Outerwear',
    price: 295,
    rating: 4.9,
    reviewsCount: 31,
    description: 'Classic blazer tailored from textured Shetland wool tweed with natural unpadded shoulder lines.',
    longDescription: 'A modern, relaxed take on professional garments. Handcrafted with beautiful patch pockets and premium horn buttons to maintain an elegant smart-casual aesthetic.',
    images: ['https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Brown Donegal', hex: '#584C3E' },
      { name: 'Oatmeal Tweed', hex: '#E0D6C3' }
    ],
    details: ['100% genuine Shetland tweed virgin wool', 'Internal notebook sleeves and utility zip compartments', 'Beautiful unstructured comfortable shoulder wraps'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-pleated-shorts',
    name: 'Sloane Structured Pleated Shorts',
    category: 'Apparel',
    subCategory: 'Bottoms',
    price: 95,
    rating: 4.5,
    reviewsCount: 38,
    description: 'Tailored relaxed shorts woven in cotton-linen canvas with standard angled front creases.',
    longDescription: 'Sleek summer dressing. Crafted to combine clean sartorial structures with high-comfort breathability, complete with adjustable side-waist fasteners.',
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Stone Grey', hex: '#8B8C8E' },
      { name: 'Desert Khaki', hex: '#D7C4A5' }
    ],
    details: ['65% combed organic cotton, 35% Belgian linen', 'Side-waist metal bar sliders for customized fit', 'Spacious tailored deep slash pockets'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-pima-hoodie',
    name: 'Veritas Heavy Pima Hoodie',
    category: 'Apparel',
    subCategory: 'Essentials',
    price: 110,
    rating: 4.8,
    reviewsCount: 174,
    description: 'Extra thick comfort hoodies construct in heavyweight Pima cotton loopbacks with dense hoods.',
    longDescription: 'The ultimate high-comfort hoodie. Structured with a clean crossover neckline instead of drawstrings to deliver a sleek, minimalist aesthetic.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Chalk White', hex: '#FAF9F4' },
      { name: 'Asphalt Dust', hex: '#3E403F' }
    ],
    details: ['100% long-fiber premium Peruvian Pima cotton', '450GSM loopback fleece yarn weight', 'Flexible double-stitched flatlock boundaries'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-drawstring-jogger',
    name: 'Veritas French Terry Joggers',
    category: 'Apparel',
    subCategory: 'Bottoms',
    price: 120,
    rating: 4.6,
    reviewsCount: 95,
    description: 'Sleek tailored tapered sweatpants engineered in cozy, preshrunk French terry fabrications.',
    longDescription: 'Redefining leisure aesthetics. Features discrete zippered pockets, elastic hems, and a beautiful flat-woven waist cord with cast metal aglets.',
    images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Asphalt Dust', hex: '#3E403F' },
      { name: 'Chalk White', hex: '#FAF9F4' }
    ],
    details: ['450GSM organic French terry cotton', 'Anti-rust cast brass cord aglet hardware', 'Padded invisible secure pocket zippers'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-poplin-shirt',
    name: 'Atelier Oversized Poplin Shirt',
    category: 'Apparel',
    subCategory: 'Shirts',
    price: 105,
    rating: 4.7,
    reviewsCount: 68,
    description: 'Crisp oversized button-down shirts tailored in lightweight, high-twist Egyptian cotton poplins.',
    longDescription: 'A versatile essential detailed with oversized button cuffs, dropped shoulder seams, and a beautiful curved structural tail, perfect for layering.',
    images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Chalk White', hex: '#FCFCF9' },
      { name: 'Ice Sky Blue', hex: '#DFEAF2' }
    ],
    details: ['100% fine Egyptian combed cotton yarn', 'Stiffened smart classic collar linings', 'Double-needle flat-felled seam assembly'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-denim-jacket',
    name: 'Outpost Sherpa Denim Jacket',
    category: 'Apparel',
    subCategory: 'Outerwear',
    price: 185,
    rating: 4.8,
    reviewsCount: 71,
    description: 'Robust classic jean jackets lined with plush, insulating organic Sherpa cotton fleece.',
    longDescription: 'An iconic cold-weather outer layer. Designed with heavy-duty metal buttons and customized copper adjusters on back tabs to preserve heat.',
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Midwashed Indigo', hex: '#44658B' },
      { name: 'Washed Black', hex: '#262628' }
    ],
    details: ['12.5oz rigid organic ring-spun cotton denim', 'High insulating recycled sherpa loop fleece lining', 'Double stitch reinforcement lines'],
    isNewArrival: false,
    inStock: true
  },
  {
    id: 'elara-safari-jacket',
    name: 'Voyager Belted Safari Jacket',
    category: 'Apparel',
    subCategory: 'Outerwear',
    price: 240,
    rating: 4.8,
    reviewsCount: 33,
    description: 'Adventure field jacket tailored with structured waist sashes and multiple patch pockets.',
    longDescription: 'Expertly woven from premium eco-conscious linen and cotton fibers. Combines heavy protection, lightweight breathability, and timeless utility charm.',
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Desert Safari Sand', hex: '#E0C89F' },
      { name: 'Sartorial Sage', hex: '#879683' }
    ],
    details: ['50% Belgian linen flax, 50% combed cotton', 'Matching canvas buckle waist sash belt', 'Custom brass ventilation rivets on arms'],
    isNewArrival: true,
    inStock: true
  },
  {
    id: 'elara-cotton-cardigan',
    name: 'Gable Heavy Shawl Cardigan',
    category: 'Apparel',
    subCategory: 'Knitwear',
    price: 160,
    rating: 4.9,
    reviewsCount: 54,
    description: 'Indulgent, chunky button knit sweaters featuring generous shawl collars and real wood buttons.',
    longDescription: 'True heirloom craftsmanship. Spun from double-layered heavyweight ecological combed cotton threads, offering substantial, cloud-soft warmth and absolute comfort.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pebble Heather', hex: '#C2C5C6' },
      { name: 'Deep Midnight Navy', hex: '#141E30' }
    ],
    details: ['100% thick organic carded combed cotton', 'Traditional elegant ribbed cuffs and hem lines', 'Real hand-carved olive wood buttons'],
    isBestSeller: true,
    inStock: true
  },
  {
    id: 'elara-crew-sweatshirt',
    name: 'Classic Loopback Crew Sweatshirt',
    category: 'Apparel',
    subCategory: 'Essentials',
    price: 95,
    rating: 4.6,
    reviewsCount: 122,
    description: 'Reliable loopback cotton crewnecks designed with ribbed V-inserts and classic raglan sleeves.',
    longDescription: 'Crafted with premium shape-retaining spandex ribbing along cuffs, neckline, and bottoms to ensure a flawless tailored drape wash after wash.',
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Athletic Grey Melange', hex: '#D2D3D5' },
      { name: 'Charcoal Black', hex: '#1A1A1C' }
    ],
    details: ['380GSM long-staple cotton loopback canvas', 'Reinforced V-notch neck collar ribbed inserts', 'Smooth flatlock seams prevent skin chafing'],
    isNewArrival: false,
    inStock: true
  }
];

// Combine the bases and retro collections first
const rawMergedProducts = [
  ...BASE_PRODUCTS.map((p) => {
    // Assign distinct, clear brand tags to all items (especially clothes/apparel!)
    let brandName = 'Snooks';
    const sub = p.subCategory.toLowerCase();
    const nameLower = p.name.toLowerCase();
    const cat = p.category;

    if (cat === 'Apparel') {
      if (sub.includes('knit') || nameLower.includes('knit') || nameLower.includes('cardigan') || nameLower.includes('velvet')) {
        brandName = 'GroovyThreads';
      } else if (nameLower.includes('windbreaker') || nameLower.includes('jacket') || sub.includes('outerwear')) {
        brandName = 'NeonWave';
      } else if (nameLower.includes('floral') || nameLower.includes('bell bottom') || nameLower.includes('disco') || sub.includes('prints')) {
        brandName = 'DiscoDaisy';
      } else if (sub.includes('essential') || sub.includes('tees') || nameLower.includes('tee') || nameLower.includes('tshirt') || nameLower.includes('sweatshirt')) {
        brandName = 'CasuAll';
      } else {
        brandName = 'Snooks Vintage';
      }
    } else {
      // Footwear/Accessories
      if (p.id.includes('nomad')) {
        brandName = 'Nomad';
      } else if (p.id.includes('court') || p.id.includes('retro')) {
        brandName = 'Snooks Retro';
      } else if (p.id.includes('outpost') || p.id.includes('voyager')) {
        brandName = 'CasuAll';
      } else {
        brandName = 'Snooks';
      }
    }

    // Set prices to showcase premium, high-value investment models alongside mid-tier footwear/apparel
    let finalPrice = p.price;
    if (p.category === 'Footwear' && p.subCategory === 'Boots') {
      finalPrice = 380; // High-end boots
    } else if (p.category === 'Footwear' && p.subCategory === 'Classic Shoes') {
      finalPrice = 450; // Premium handcraft Elara
    } else if (p.category === 'Apparel' && p.subCategory === 'Knitwear') {
      finalPrice = 180;
    } else if (p.id.includes('tee') || p.id.includes('tshirt') || p.name.toLowerCase().includes('pocket tee')) {
      finalPrice = 35; // Budget basic cotton tees
    }
    
    // Flag ~33% of products as being on Sale
    const isSale = (p.id.charCodeAt(0) + p.id.charCodeAt(p.id.length - 1)) % 3 === 0;
    const origPrice = isSale ? Math.ceil(finalPrice * 1.35) : undefined;
    
    return {
      ...p,
      price: finalPrice,
      brand: brandName,
      onSale: isSale,
      originalPrice: origPrice,
    };
  }),
  ...RETRO_PRODUCTS
];

export const PRODUCTS: Product[] = rawMergedProducts;

export const getFallbackProductImage = (category?: string): string => {
  const cat = category?.toLowerCase();
  if (cat?.includes('footwear') || cat?.includes('shoe') || cat?.includes('boot')) {
    return 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop';
  }
  if (cat?.includes('apparel') || cat?.includes('clothes') || cat?.includes('knit') || cat?.includes('suit')) {
    return 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop';
  }
  return 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524d6?q=80&w=600&auto=format&fit=crop';
};


