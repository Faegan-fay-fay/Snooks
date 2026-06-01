import { Product } from './types';

// Let's define the 100 retro items with high-quality descriptions, categories, prices, reviews, rating, images, and brand details!
const RETRO_TEMPLATES = [
  // --- APPAREL (34 Items) ---
  {
    name: 'Vivid Horizon Windbreaker',
    brand: 'NeonWave',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 110,
    description: 'Electric-pink and neon-teal water resistant colorblock shell from the peak neon era.',
    longDescription: 'Feel the 80s warmth and casual beach breeze. Built with authentic mesh linings, high adjustable drawstring collars, and deep zipping pockets for high street credibility.',
    images: ['https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Neon Teal & Pink', hex: '#00E5FF' },
      { name: 'Dayglow Violet', hex: '#8A2BE2' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['100% durable ripstop nylon shell', 'Retro neon drawstring pulls', 'Ventilated mesh action interior liner']
  },
  {
    name: 'Sunset Stripe Camp Shirt',
    brand: 'CasuAll',
    category: 'Apparel' as const,
    subCategory: 'Shirts',
    price: 65,
    description: 'Relaxed short-sleeve camp collar shirt featuring sunset-orange and yellow horizontal deck stripes.',
    longDescription: 'Exceedingly relaxed profile designed for sunny retro boardwalk strolls. Built with a Cuban flat lay collar and breathable washed cotton feel.',
    images: ['https://images.unsplash.com/photo-1475180098004-ca77a66827ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Boardwalk Yellow', hex: '#FFD700' },
      { name: 'Sunset Peach', hex: '#FF7F50' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['100% breathable organic cotton', 'Casual Cuban camp retro collar', 'Slightly oversized drape for high comfort']
  },
  {
    name: 'Groovy Corduroy Dungarees',
    brand: 'GroovyThreads',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 125,
    description: 'Heavyweight ribbed corduroy overall overalls in a luscious rich mustard tone.',
    longDescription: 'A classic workwear staple reimagined for street style. Features thick 8-wale corduroy comfort with metallic buckle adjusters and authentic utility side pockets.',
    images: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Mustard Gold', hex: '#DAA520' },
      { name: 'Earthy Forest', hex: '#2E8B57' }
    ],
    sizes: ['S', 'M', 'L'],
    details: ['Heavy 8-wale textured corduroy', 'Adjustable clip shoulder sashes', 'Vibrant front chest center utility pouch']
  },
  {
    name: 'Psychedelic Sateen Blouse',
    brand: 'DiscoDaisy',
    category: 'Apparel' as const,
    subCategory: 'Shirts',
    price: 85,
    description: 'Vibrant silk-satin flowy shirt printed with swirling psychedelic retro flower patterns.',
    longDescription: 'Command any environment with hypnotic vintage patterns. This high-gloss sateen blouse buttons down tightly with real mother-of-pearl fast clips.',
    images: ['https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Cosmic Fuchsia', hex: '#FF00FF' },
      { name: 'Emerald Funk', hex: '#00FA9A' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    details: ['Ultra-slick premium polyester sateen blend', 'Button-up barrel cuffs with dynamic flair', 'Daring oversized retro pointed collar']
  },
  {
    name: 'Cosmic Tie-Dye Raglan',
    brand: 'FunkSoul',
    category: 'Apparel' as const,
    subCategory: 'Essentials',
    price: 55,
    description: 'Artisanal hand-dyed swirl raglan sweatshirt in cosmic blue, purple, and yellow shades.',
    longDescription: 'No two items are identical. A wonderful explosion of pure casual comfort using thick organic cotton knit loops.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Cosmic Nebula Swirl', hex: '#8A2BE2' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: ['100% hand-twisted cotton canvas', 'Reinforced neck ribbing for lifetime shape retention', 'Thick long-fiber winter warmth fabric']
  },
  {
    name: 'Electric Meadow Knit Sweater',
    brand: 'VividVibe',
    category: 'Apparel' as const,
    subCategory: 'Knitwear',
    price: 135,
    description: 'Chunky neon-embroidered meadow landscape knit with playful checkerboard sleeves.',
    longDescription: 'Cozy retro sweater with absolute personality. Features a cozy crew silhouette, slightly puffed cuffs and high knit density.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Electric Lilac', hex: '#D8BFD8' },
      { name: 'Bright Grass Green', hex: '#32CD32' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    details: ['High density blended mohair-feel wool acrylic', 'Drop shoulder casual retro silhouette', 'Thick rib neckline and sleeve ends']
  },
  {
    name: '90s Chill Cargo Pants',
    brand: 'CasuAll',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 90,
    description: 'Slightly baggy, high-rise utility cargo fatigues in vibrant brick orange.',
    longDescription: 'Throw it back to the golden era of streetwear. Robust ripstop cotton structured with deep pockets and toggle closures at ankles.',
    images: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Brick Orange', hex: '#D2691E' },
      { name: 'Teal Shadow', hex: '#008080' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['100% military grade combat cotton ripstop', 'Dynamic ankle drawstrings for custom pant styling', '6-pocket secure gear setup']
  },
  {
    name: 'Slick Trackside Varsity Jacket',
    brand: 'RetroKicks',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 165,
    description: 'Retro wool-bodied bomber jacket with contrasting cream leather sleeves and sporty yellow piping.',
    longDescription: 'Timeless campus look with standard retro ribbed collars and snap front buttons. Keeps you styled and incredibly neat.',
    images: ['https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Burgundy & Cream', hex: '#800020' },
      { name: 'Varsity Green', hex: '#004B23' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Thick boiled-wool comfort blend body', 'Vegan faux leather contrasting sleeves', 'Chunky retro snap-fast buttons']
  },
  {
    name: 'Neon Patchwork Denim Jacket',
    brand: 'Snooks Retro',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 140,
    description: 'Acid-washed denim jacket detailed with bright neon patches and retro badges.',
    longDescription: 'Vibrant, hand-crafted customized look. Heavy denim shell designed with multiple retro geometric patches representing arcade culture.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Acid Washed Blue', hex: '#87CEEB' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['13oz pure hard cotton denim', 'Vibrant vintage graphics across backing', 'Side hip adjustment tabs']
  },
  {
    name: 'Pastel Paradise Fleece',
    brand: 'CasuAll',
    category: 'Apparel' as const,
    subCategory: 'Knitwear',
    price: 105,
    description: 'Snuggly pastel-pink, mint, and banana yellow colorblocked zip fleece sweater.',
    longDescription: 'Indulge in maximum cozy warmth. Thick loop polar fleece made to stand out during casual hiking activities or city nights.',
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Pastel Dream Tri', hex: '#FFD1DC' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: ['Heavy high-loft polar thermal fleece', 'Half-zip funnel collar construction', 'Neon green zipper pull detail']
  },
  {
    name: 'Checkerboard Bowling Shirt',
    brand: 'SunsetDrive',
    category: 'Apparel' as const,
    subCategory: 'Shirts',
    price: 75,
    description: 'Retro 1950s retro diner shirt with a vertical high-vibrant checkerboard panel.',
    longDescription: 'Brimming with retro bowling lane retro energy. Features contrast piping and custom chest pocket with a loose and breathable casual styling.',
    images: ['https://images.unsplash.com/photo-1475180098004-ca77a66827ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Teal & Coral', hex: '#FF6F61' },
      { name: 'Mustard & Nero', hex: '#FFCC00' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Premium high-drape viscose blend', 'Cuban bowling camp open collar', 'Contrast edge embroidery line']
  },
  {
    name: 'Lava Lamp Flare Jeans',
    brand: 'DiscoDaisy',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 115,
    description: 'Wide-legged retro flares highlighted with colorful lava-lamp pocket embroidery details.',
    longDescription: 'A wild throwback to 1970s concert scenes. Made with slightly stretchy cotton twill that beautifully wraps your hips and flows into a dramatic bell-bottom flare.',
    images: ['https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vintage Indigo', hex: '#4682B4' },
      { name: 'Groovy Mustard', hex: '#E1AD01' }
    ],
    sizes: ['26', '28', '30', '32'],
    details: ['Cotton stretch denim comfort weave', 'Extravagant 22-inch bottom bell opening', 'Custom wave retro back pockets']
  },
  {
    name: 'Acid-Wash Oversized Vest',
    brand: 'RetroKicks',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 78,
    description: 'Vibrant, raw-cut sleeveless denim vest custom washed for a grungy neon concert rocker look.',
    longDescription: 'Slip this vest over any tie-dye tee for instant skater style. Rigid, durable denim detailed with metallic studs.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Electric Acid Blue', hex: '#7FFFD4' }
    ],
    sizes: ['M', 'L', 'XL'],
    details: ['Heavy cotton custom acid wash denim', 'Raw distressed sleeveless armhole lines', 'Classic brass chest buttons']
  },
  {
    name: 'Dayglow Mesh Tee',
    brand: 'NeonWave',
    category: 'Apparel' as const,
    subCategory: 'T-Shirts',
    price: 45,
    description: 'Super breezy mesh athletic tee in high-impact dayglow orange.',
    longDescription: 'Designed to capture bright festival vibes and active sports comfort. Extremely airy design looks incredible layered or worn poolside.',
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vibrant Dayglow', hex: '#FF4500' }
    ],
    sizes: ['S', 'M', 'L'],
    details: ['Ultra breezy mini-mesh poly construction', 'Retro athletic stripe knit collar', 'Unisex relaxed street cut']
  },
  {
    name: 'Marigold Crochet Cardigan',
    brand: 'GroovyThreads',
    category: 'Apparel' as const,
    subCategory: 'Knitwear',
    price: 120,
    description: 'Hand-knitted retro floral granny-square open cardigan in warm gold, ochre, and vibrant red.',
    longDescription: 'True bohemian nostalgia. Meticulously hand-crocheted over weeks with colorful sunflower blocks that add whimsical flair to your everyday cozy dress code.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Golden Sunflower Multi', hex: '#F0E68C' }
    ],
    sizes: ['XS/S', 'M/L'],
    details: ['100% thick premium carded cotton yarn', 'Stunning open front design with tie strings', 'Fully hand-stitched patchwork squares']
  },
  {
    name: 'Teal Wave Track Pants',
    brand: 'NeonWave',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 80,
    description: 'Comfy nylon warm-up track pants detailed with purple side stripes and bright neon accents.',
    longDescription: 'Pure retro leisure comfort. Features crinkly nostalgic nylon, zipper ankles for ventilation, and a supportive high elastic waistband.',
    images: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Nostalgic Teal', hex: '#008080' },
      { name: 'Retro Violet', hex: '#4B0082' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Weatherproof retro crinkle nylon shell', 'Zippered custom elastic ankle fit', 'Super comfortable soft active liners']
  },
  {
    name: 'Vibrant Velvet Bell Bottoms',
    brand: 'DiscoDaisy',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 110,
    description: 'Luxe stretch velvet pants in deep electric fuchsia that shimmer in the disco lights.',
    longDescription: 'Slip on a masterclass of retro luxury. Incredible body contouring with an extremely comfortable elastic waist and a majestic bell silhouette.',
    images: ['https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Electric Fuchsia', hex: '#FF1493' },
      { name: 'Plum Velvet', hex: '#4E0041' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    details: ['Luxurious supple velvet plush fabric', 'Durable four-way casual comfort stretch', 'Stunning raw-cut wide bottom hem']
  },
  {
    name: 'Surfside Retro Tank',
    brand: 'CasuAll',
    category: 'Apparel' as const,
    subCategory: 'T-Shirts',
    price: 38,
    description: 'Cotton ribbed summer tank top with vibrant ocean-blue retro sunset graphic.',
    longDescription: 'Captures pure 80s California surfing culture. Styled in classic ribbed texture with bright graphic screen print.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Coastal White', hex: '#FDFBF7' }
    ],
    sizes: ['S', 'M', 'L'],
    details: ['100% organic long-staple cotton rib', 'Eco-friendly water-based retro print', 'Durable bound-edge lines on arms']
  },
  {
    name: 'Wildwood Patch Shirt',
    brand: 'SunsetDrive',
    category: 'Apparel' as const,
    subCategory: 'Shirts',
    price: 82,
    description: 'Vibrant color-blocked utility shirt stitched with olive, mustard, and rust retro squares.',
    longDescription: 'Combines rugged vintage scout charm with everyday casual wear. Features utility chest pockets and contrast brown horn click buttons.',
    images: ['https://images.unsplash.com/photo-1475180098004-ca77a66827ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Earthy Patchwork Tri', hex: '#B57C50' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Washed linen-cotton light weave', 'Durable double-stitch flatlock seams', 'Utility chest compartments with button locks']
  },
  {
    name: 'Retro Ribbed Lettuce Tee',
    brand: 'GroovyThreads',
    category: 'Apparel' as const,
    subCategory: 'T-Shirts',
    price: 42,
    description: 'Form-fitting ribbed baby-tee featuring cute wavy lettuce edge hems and pastel stripe details.',
    longDescription: 'Ultra comfy throwback daily wear. Extremely soft stretch feel, styled with elegant pastel contrast stripes for casual retro playfulness.',
    images: ['https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Mint & Vanilla Striped', hex: '#F0FDF4' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    details: ['Pima cotton soft-stretch rib fabric', 'Charming scalloped lettuce cuffs', 'Flattering cropped casual vintage shape']
  },
  {
    name: 'Sunset Coach Jacket',
    brand: 'SunsetDrive',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 98,
    description: 'Classic matte nylon coach windbreaker with snap front closures in rich sunset yellow.',
    longDescription: 'Perfect light outer shell for cool evening skate sessions. Detailed with casual white drawstrings and Retro athletic back prints.',
    images: ['https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunset Yellow', hex: '#FFB300' },
      { name: 'Boardwalk Royal Blue', hex: '#0D47A1' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Splash-resistant premium micro-nylon', 'Real functional retro white canvas cords', 'Durable elastic sleeve closures']
  },
  {
    name: 'Dune Casual Knit Polo',
    brand: 'Snooks Retro',
    category: 'Apparel' as const,
    subCategory: 'Shirts',
    price: 88,
    description: 'Short-sleeve knitted polo featuring a retro knit texture with vibrant orange accents.',
    longDescription: 'Effortless vintage sport luxury. Offers a lightweight knit feel with absolute softness, complete with contrast color collar lines.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Dune Sand & Orange', hex: '#EAE5D9' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Highly breathable knit organic cotton', 'Three-button placket with real shell snaps', 'Ribbed waistband sits beautifully at waist']
  },
  {
    name: 'Electric Cheetah Slip Dress',
    brand: 'VividVibe',
    category: 'Apparel' as const,
    subCategory: 'Dresses',
    price: 115,
    description: 'Striking bias-cut midi dress printed with funky retro leopard spots on vibrant fuchsia silk.',
    longDescription: 'Express your inner retro wildness. Moves beautifully with every stride, perfect for layering with heavy cardigans or casual tees.',
    images: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vibrant Leopard Fuchsia', hex: '#E0115F' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    details: ['100% fine weave mulberry silk rayon', 'Double side slitting for effortless movement', 'Adjustable delicate retro micro sashes']
  },
  {
    name: 'Plaid Flannel Over-Shirt',
    brand: 'CasuAll',
    category: 'Apparel' as const,
    subCategory: 'Shirts',
    price: 79,
    description: 'Heavy brushed flannel shirt in cozy vibrant primary red, blue, and yellow checker blocks.',
    longDescription: 'Classic grunge aesthetic in high-saturation palette. Double-sided soft brushing keeps you cozy and snug on casual winter days.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Primary Plaid', hex: '#C41E3A' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: ['320GSM heavy double-carded cotton flannel', 'Spacious chest button patch storage', 'Tidy triple-needle reinforced lines']
  },
  {
    name: 'Pac-Man Pixel Sweatshirt',
    brand: 'RetroKicks',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 105,
    description: 'Black heavy cotton loopback sweater screen-printed with classic neon pixelated arcade ghosts.',
    longDescription: 'A direct digital arcade console throwback. Cozy loopback construction ensures complete durability and authentic skater charm.',
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Arcade Nero Black', hex: '#111111' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Heavy organic French cotton loopback', 'Retro puffy puff-ink screen prints', 'Vibrant rib detailing around hem']
  },
  {
    name: 'Fuzzy Peach Shrug',
    brand: 'VividVibe',
    category: 'Apparel' as const,
    subCategory: 'Knitwear',
    price: 65,
    description: 'Soft-touch cropped knit shrug sweater in high-impact pastel neon peach.',
    longDescription: 'Brings dynamic layered color to casual slip dresses or vintage tanks. Fuzzy knit wool is extremely fluffy, pleasant and beautiful.',
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Fluffy Sweet Peach', hex: '#FFCC99' }
    ],
    sizes: ['XS', 'S', 'M'],
    details: ['Plush vegan synthetic mohair yarn', 'Super crop length with fitted cuffs', 'Rich vibrant pastel shade']
  },
  {
    name: 'Nostalgia Club Crewneck',
    brand: 'Snooks Retro',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 110,
    description: 'Heavy grey heather crewneck sporting a retro collegiate embroidery in orange and navy.',
    longDescription: 'Comfort is unmatched. Built with classic side-gussets for flexible sizing, keeping it incredibly cozy and stylishly vintage.',
    images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Collegiate Grey', hex: '#A8A9AD' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: ['400GSM absolute thick brushed fleece', 'Custom tight chain-stitch hand embroidery', 'Flexible comfort rib side gusseting']
  },
  {
    name: 'Vaporwave Sunset Tee',
    brand: 'FunkSoul',
    category: 'Apparel' as const,
    subCategory: 'T-Shirts',
    price: 45,
    description: 'Vibrant screen-printed graphic tee showing an 80s wireframe grid sunset on fuchsia organic cotton.',
    longDescription: 'Pure vaporwave nostalgia. High detail print that is lightweight and highly breathable for dynamic daily sessions.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Neon Fuchsia Wave', hex: '#FF007F' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['100% Ring-spun combed organic cotton', 'Soft-touch eco organic printing dyes', 'Smooth seamless side knitting']
  },
  {
    name: 'Citrus Punch Play-Suit',
    brand: 'VividVibe',
    category: 'Apparel' as const,
    subCategory: 'Dresses',
    price: 95,
    description: 'Summer linen utility romper highlighted in lively, high-contrast energetic lemon-lime.',
    longDescription: 'An effortless vibrant outfit for casual outings and beach volleyball. Tailored with custom white utility button pins and dynamic waistband cords.',
    images: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Lemon-Lime Punch', hex: '#CCFF00' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    details: ['Pure premium breathable Belgian flax linen', 'Front pockets and button chest compartments', 'Comfort retro drawstring elastic center']
  },
  {
    name: 'Denim Patch Overalls',
    brand: 'GroovyThreads',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 138,
    description: 'Casual vintage dungarees made from patchworks of high-vibrant indigo and light-washed denim.',
    longDescription: 'A custom, artistic piece designed to add high energy to raw styling. Includes triple stitch details around seams and heavy vintage hardware.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Patchwork Twill Indigo', hex: '#4169E1' }
    ],
    sizes: ['S', 'M', 'L'],
    details: ['12oz durable Japanese denim patchwork', 'Real metal buckle shoulder adjusters', 'Beautiful utility carpenters hoop loops']
  },
  {
    name: 'Chunky Rainbow Sweater',
    brand: 'GroovyThreads',
    category: 'Apparel' as const,
    subCategory: 'Knitwear',
    price: 130,
    description: 'Thick, fuzzy mohair-blend pullover knitted with bold, vibrant rainbow horizontal stripes.',
    longDescription: 'Sparks constant joy and warmth on dark winter days. Incredible cloud-like puff stitch feel keeps you casual and ultra-cozy.',
    images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Spectrum Prism', hex: '#E52B50' }
    ],
    sizes: ['S', 'M', 'L'],
    details: ['Artisanal blend of mohair, wool, and alpaca', 'Oversized statement neck rib lines', 'Extra-long retro sleeves for cozy vibes']
  },
  {
    name: 'Sassy Satin Bomber',
    brand: 'DiscoDaisy',
    category: 'Apparel' as const,
    subCategory: 'Outerwear',
    price: 125,
    description: 'High-gloss satin bomber jacket in energetic bubblegum pink with retro athletic stripes.',
    longDescription: 'Pure retro high-school skater energy. Soft quilted linings provide warmth while keeping your look sharp and vibrant.',
    images: ['https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Bubblegum Pink', hex: '#FF69B4' },
      { name: 'Retro Orange Star', hex: '#FF4500' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Mirror-gloss heavy weight satin', 'Warm diamond quilt interior insulation', 'Heavy duty zip with custom slider strap']
  },
  {
    name: 'Cabana Casual Linen Shorts',
    brand: 'CasuAll',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 58,
    description: 'Breezy, comfortable linen relaxed shorts printed with retro tropical hibiscus flowers.',
    longDescription: 'Designed for absolute hot weather resort style. Loose relaxed fit pairs wonderfully with canvas deck shoes and white tees.',
    images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Hibiscus Teal Coral', hex: '#E07A5F' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['100% fine ecological flax linen woven', 'Broad elastic band with vintage drawstring cord', 'Hidden deep jersey side entry pockets']
  },
  {
    name: 'Golden Hour Lounge Pants',
    brand: 'SunsetDrive',
    category: 'Apparel' as const,
    subCategory: 'Pants',
    price: 85,
    description: 'Lightweight waffle knit flare pants in a gorgeous rich golden yellow shade.',
    longDescription: 'The ultimate lounge-to-street transitional pants. Offers highly breathable retro waffle fabric that flatters shapes elegantly.',
    images: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Golden Waffle', hex: '#F4D03F' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    details: ['Premium soft texture waffle honey comfort cotton', 'Super flex high performance custom waistband', 'Micro-flare bottom split lines']
  },

  // --- FOOTWEAR (33 Items) ---
  {
    name: 'Retro Neon-Pop High-Tops',
    brand: 'RetroKicks',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 145,
    description: 'Classic high-top canvas sneakers retrofitted with vibrant checker accents and neon pink soles.',
    longDescription: 'Pure 1980s street skateboarding style. Built with high cushion orthotics and dynamic double laces that provide exceptional support and standout street swagger.',
    images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Hot Pink & Checkerboard', hex: '#FF1493' },
      { name: 'Vapor Neon Lime', hex: '#39FF14' }
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['12oz organic duck canvas upper', 'Premium vulcanized extra-grip rubber bottoms', 'High premium retro double cotton laces']
  },
  {
    name: 'Vibrant Suede Platform Loafers',
    brand: 'Snooks Retro',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 210,
    description: 'Chunky chunky platform shoes wrapped in vivid royal-blue Italian calf suede.',
    longDescription: 'Reinvent preppy dress codes. The vibrant royal suede is custom dyed in Florence, sat atop a comfortable lightweight EVA platform sole.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Royal Cobalt Blue', hex: '#0047AB' },
      { name: 'Energetic Mandarin', hex: '#FF5F1F' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    details: ['100% genuine Italian calf precision suede', '2-inch lightweight ultra-cushioned wedge platform', 'Supple sheepskin interior lining comfort']
  },
  {
    name: 'Groovy Floral Canvas Slip-Ons',
    brand: 'GroovyThreads',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 85,
    description: 'Low-profile easy canvas slippers covered with vibrant hand-drawn flower illustrations.',
    longDescription: 'Slide into immediate psych-floral aesthetic. Features double elastic goring and ultra vulcanized white rubber wrap-around edges.',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Flora Multi Sunshine', hex: '#FFA07A' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['Breathable canvas light-aeration weave', 'Padded collar with supportive double heel backing', 'Signature floral print pattern bottom grip']
  },
  {
    name: 'Sunset Boulevard Cork Clogs',
    brand: 'CasuAll',
    category: 'Footwear' as const,
    subCategory: 'Sandals',
    price: 130,
    description: 'Suede strap clogs fitted with anatomic wood and cork footbeds in rich amber yellow.',
    longDescription: 'Ultimate casual slip-on comfort. Features solid brass adjustable sashes, soft lining, and a natural crepe outer grip.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Amber Glow Suede', hex: '#FFBF00' }
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    details: ['Genuine hand-burnished oil suede upper', 'Ergonomic supportive cork wood curved sole', 'Vandals-proof adjustable metal roller pins']
  },
  {
    name: 'Checkerboard Vibing Skate Shoes',
    brand: 'SunsetDrive',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 95,
    description: 'Durable chunky skate shoe with high-contrast vibrant green checkerboard prints.',
    longDescription: 'Captures authentic 90s skater park culture. Features padded tongues, thick cupsole rims, and protective dual panels.',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vibrant Green & White', hex: '#228B22' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Double stitched reinforced toe shields', 'Max-thickness waffle grip rubber sole lines', 'Classic broad white flat skate cotton cords']
  },
  {
    name: 'Disco Glitter Platform Boots',
    brand: 'DiscoDaisy',
    category: 'Footwear' as const,
    subCategory: 'Boots',
    price: 195,
    description: 'Ankle boots coated in high-gloss shimmering pink and silver retro glitter flakes.',
    longDescription: 'Get ready to dance through your life with pure disco energy. Styled with a solid block heel for high balance and comfortable zip closures.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Shimmering Neon Sparkle', hex: '#FF007F' }
    ],
    sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['Glossy anti-shed vinyl glitter body', '3-inch sturdy chunky square retro dance heel', 'Smooth interior zip with gold logo pull tab']
  },
  {
    name: 'Neon Hiking Boots',
    brand: 'NeonWave',
    category: 'Footwear' as const,
    subCategory: 'Boots',
    price: 185,
    description: 'Heavy duty casual hiker booties with bright neon pink laces and lime yellow accents.',
    longDescription: 'Brings dynamic neon style to rugged terrains. Features highly waterproof leather outer walls, metal D-ring links, and deep tread hiking grip.',
    images: ['https://images.unsplash.com/photo-1514989940723-e8e5163ccb8b?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'High-Vis Black Mix', hex: '#222222' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Double bonded waterproof nubuck hide', 'Vibrant neon cord climber-spec laces', 'Shock absorbent cushioned active EVA midsole']
  },
  {
    name: 'Vivid Orange Tennis Sneakers',
    brand: 'RetroKicks',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 125,
    description: 'Sleek low-profile tennis models wrapped in high-vibrant active orange leather.',
    longDescription: 'Captures clean tennis courts vintage styling. Styled with gold lettering trim details and sturdy stitched vulcanized white soles.',
    images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunset Tangerine', hex: '#FF8C00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['Trapper-style milled action full leather upper', 'Durable non-marking flat rubber outsole', 'Soft breathable sports interior mesh']
  },
  {
    name: 'Dayglow Runner Trainers',
    brand: 'NeonWave',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 135,
    description: 'Authentic 90s sportswear retro running shoes highlighting electric neon green highlights.',
    longDescription: 'High street fashion meets vintage athletic pace. Ultra bouncy soles with high breathability keeping your movements comfortable.',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'High Volt Yellow-Green', hex: '#ADFF2F' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Airy tech mesh and suede patchwork upper', 'Dynamic torsion-bar arch supportive insert', 'Speckled retro active performance outsole']
  },
  {
    name: 'Pacifica Straw Slides',
    brand: 'CasuAll',
    category: 'Footwear' as const,
    subCategory: 'Sandals',
    price: 68,
    description: 'Casual slides woven with natural colorful palm fibers and tropical patterns.',
    longDescription: 'Perfect warm sand slip-on flats. Made with flexible comfortable rubber bases and soft-surface straw straps.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Natural Oasis Multi', hex: '#F5DEB3' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['100% natural organic dried palm fibers', 'Eco-friendly soft flex rubber base padding', 'Gentle felt-padded interior straps']
  },
  {
    name: 'Lava Splash Jelly Sandals',
    brand: 'FunkSoul',
    category: 'Footwear' as const,
    subCategory: 'Sandals',
    price: 55,
    description: 'Nostalgic semi-transparent basket-weaver jelly sandals in glittery neon pink.',
    longDescription: 'A wild throwback to 90s beach vacations. Waterproof, fun, and extremely comfortable thanks to the flexible bubble silhouette and buckle ankle lock.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Translucent Neon Pink', hex: '#FF007F' }
    ],
    sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['100% waterproof soft vintage PVC jelly', 'Traditional basket-weave closed toe outline', 'Anti-rust chrome adjusted ankle buckle']
  },
  {
    name: 'Retro Mustard Derby Flats',
    brand: 'Snooks Retro',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 175,
    description: 'Sleek custom leather Derby flats dyed in iconic retro mustard yellow.',
    longDescription: 'Brings beautiful vibrant colors to tailoring. Handmade with subtle wingtip details and organic stacked heels.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Mustard Suede', hex: '#E1AD01' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['Premium full grain milled calf leather', 'Handmade leather soles with non-slip inserts', 'Waxed cotton thin retro cords']
  },
  {
    name: 'Groovy Swirl Leather Mules',
    brand: 'GroovyThreads',
    category: 'Footwear' as const,
    subCategory: 'Sandals',
    price: 145,
    description: 'Hand-tooled slip-on mule flats detailing debossed energetic colorful flower swirl lines.',
    longDescription: 'Vibrant, comfortable daily slip-on shoe. Made with a premium leather footbed that deepens in comfort over weeks.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vachetta Ochre Swirl', hex: '#C68E17' }
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    details: ['100% thick oiled cowhide hide upper', 'Anatomically curved arch booster support', 'Hand stitched heavy sole edge lines']
  },
  {
    name: 'Cobalt Wave Suede Boots',
    brand: 'SunsetDrive',
    category: 'Footwear' as const,
    subCategory: 'Boots',
    price: 190,
    description: 'Ankle Chelsea boots constructed out of intense cobalt blue suede panels.',
    longDescription: 'Make an absolute statement with vibrant colors under your denim flares. Elastic goring ensures easy pull-on action.',
    images: ['https://images.unsplash.com/photo-1638247025967-b4e38f68917a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Cobalt Suede Wave', hex: '#1E90FF' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['Premium water resistant blue suede leather', 'Durable retro crepe shock-absorption bottom', 'Heavy pull tabs on back edge']
  },
  {
    name: 'Vivid Velvet Mary Janes',
    brand: 'VividVibe',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 120,
    description: 'Retro velvet flats in electric fuchsia, detailed with traditional silver buckle clasps.',
    longDescription: 'Captures a charming preppy vintage look in a high-impact color. Looks beautiful paired with checkerboard socks or casual dungarees.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vibrant Velvet Fuchsia', hex: '#FF00FF' }
    ],
    sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7'],
    details: ['Super plush velvet exterior finish', 'Flexible vulcanized anti-slide flat sole', 'Charming rounded toe box space']
  },
  {
    name: 'Retro Bowling Lane Shoes',
    brand: 'RetroKicks',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 135,
    description: 'Casual fashion Oxfords replicating classic bowling shoes in bright red and blue colorblocks.',
    longDescription: 'Add some retro sport style to your neat outfits. Built with premium side stitch reinforcement and slick leather sliding soles.',
    images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Bowling Red & Blue Tri', hex: '#1D7CF2' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Top tier full grain aniline bovine leather', 'Genuine leather slider-friendly low friction sole', 'Sporty embroidered sizing numerals on heel backing']
  },
  {
    name: 'Citrus Fisherman Sandal',
    brand: 'CasuAll',
    category: 'Footwear' as const,
    subCategory: 'Sandals',
    price: 110,
    description: 'Strappy classic fisherman shoes constructed out of energetic tangerine leather.',
    longDescription: 'Exceptional breathability meets classic structure. Perfect for casual retro shorts and park walking in the warm summer months.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Citrus Tangerine', hex: '#FFA500' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    details: ['100% fully grain cow hides', 'Broad strap coverage prevents toe chafing', 'Solid brass adjusted ankle buckles']
  },
  {
    name: 'Neon Horizon Runners',
    brand: 'NeonWave',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 155,
    description: 'Ultra-cushioned sporty sneakers sporting custom hot-pink grids and neon-yellow bumpers.',
    longDescription: 'Retro futuristic track appeal. Thick EVA cushion layers are extremely bouncy and comfortable, delivering complete comfort.',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Grid Pink Neon', hex: '#FF1493' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Double layer cellular knit structure mesh', 'High impact retro bounce heel air cushion', 'Super glow reflective back security overlays']
  },
  {
    name: 'Groovy Patchwork Suede Boots',
    brand: 'GroovyThreads',
    category: 'Footwear' as const,
    subCategory: 'Boots',
    price: 185,
    description: 'Retro 70s ankle boots made from overlapping shapes of earth-yellow, red, and blue suede.',
    longDescription: 'An absolute masterpiece of retro festival footwear. Fits wonderfully under wide-legged flares, featuring a cozy interior block.',
    images: ['https://images.unsplash.com/photo-1638247025967-b4e38f68917a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Suede Patchwork Multi', hex: '#FF7F50' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['Genuine Italian colorful split-calf suede', '2.5-inch solid stacked wooden block heel', 'Smooth interior zippers']
  },
  {
    name: 'Dayglow Bubble Creepers',
    brand: 'VividVibe',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 140,
    description: 'Chunky casual creepers with high dayglow pink patent leather and classic black ribbed platform bases.',
    longDescription: 'Bring punk-rock retro energy to your minimalist coordinates. Sleek high-shine exterior with matching colorful eyelets.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Patent Pink Dayglow', hex: '#FF007F' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['Glossy mirror patent action leather', 'Thick 1.8-inch slip resistant ribbed crepe platform', 'Chunky retro black round laces']
  },
  {
    name: 'Classic Sunset Cord Sneaker',
    brand: 'SunsetDrive',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 105,
    description: 'Vintage-profile flat trainers styled in dynamic mustard gold corduroy panels.',
    longDescription: 'Lightweight, extremely soft, and loaded with casual skater style. Golden cord panels age with beautiful character over years.',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Mustard Cord Gold', hex: '#E1AD01' }
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['12-wale high-density durable cotton corduroy', 'Supportive vulcanized white rubber toe box cap', 'Comfort padded foam insoles']
  },
  {
    name: 'Midnight Party Pumps',
    brand: 'DiscoDaisy',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 175,
    description: 'Electric-blue shiny pump heels studded with brilliant sparkling holographic crystals.',
    longDescription: 'Shine through every dance step under vintage party spotlights. The tall sturdy heels remain comfortable across hours of music.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Electric Blue Shimmer', hex: '#0000FF' }
    ],
    sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7'],
    details: ['Glossy satin studded with high shine particles', 'Stable block heel with high anti-slip grip', 'Cute adjustable retro Mary Jane sashes']
  },
  {
    name: 'Coastal Teal Slides',
    brand: 'CasuAll',
    category: 'Footwear' as const,
    subCategory: 'Sandals',
    price: 52,
    description: 'Waterproof slip-on beach slides constructed from bubbly cushy EVA in retro sea-foam teal.',
    longDescription: 'Extremely lightweight, buoyant, and supportive for summer river wading, beach resorts, or quick backyard strolls.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Seafoam Coastal Teal', hex: '#40E0D0' }
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['Single-piece injected dual compression EVA', 'Anatomic comfort anti-slip wet grip patterns', 'Zero weight floatable styling']
  },
  {
    name: 'Vaporwave High-Top Canvas',
    brand: 'FunkSoul',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 120,
    description: 'Authentic canvas high-tops featuring custom vaporwave gradient side graphics.',
    longDescription: 'Relive arcade gaming culture with beautiful sunset sky paneling and thick supportive high tops.',
    images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunset Vapor Gradient', hex: '#C71585' }
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['Premium high-tensile 10oz canvas body', 'Vulcanized non-slip white rubber cap toes', 'Vibrant purple alternative replacement laces']
  },
  {
    name: 'Retro Speed Slip-Ons',
    brand: 'RetroKicks',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 90,
    description: 'Canvas slip-on skate shoes detailed with iconic bright red checker stripes.',
    longDescription: 'Fast, casual, classic. Double elastic bands make them an absolute breeze to slide on and skate trackwards.',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Speed Red Checker', hex: '#ED2939' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Double stitched seamless canvas build', 'Grip waffle sole patterns provide high action response', 'Secure padded heel lock collars']
  },
  {
    name: 'Mustard Seed Chelsea Boots',
    brand: 'SunsetDrive',
    category: 'Footwear' as const,
    subCategory: 'Boots',
    price: 180,
    description: 'Sleek premium Chelsea boots in warm mustard gold suede with burgundy pull straps.',
    longDescription: 'Daring retro color pop turns a standard rugged boot classic into an elegant conversation starter. Flexible crepe platform soles.',
    images: ['https://images.unsplash.com/photo-1638247025967-b4e38f68917a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Mustard Boot Gold', hex: '#D4AF37' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['Splendidly thick water resistant suede', 'Dual elastic burgundy stretch panels', 'Traditional honey crepe anti-shock heels']
  },
  {
    name: 'Vivid Fuchsia Sport Sandals',
    brand: 'NeonWave',
    category: 'Footwear' as const,
    subCategory: 'Sandals',
    price: 85,
    description: 'Vibrant webbed strap sport sandals featuring neon buckles and active tracking grip.',
    longDescription: 'Perfect summer river-rafting sandals. Water-repellent straps dry fast, keeping your active steps neat and tightly fitted.',
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Active Neon Fuchsia', hex: '#FF00FF' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9'],
    details: ['Triple-adjusted high-load nylon webbings', 'Custom molded ergonomic EVA cushion pads', 'Super ground-traction rubber grips']
  },
  {
    name: 'Vintage Court Low-Tops',
    brand: 'Snooks Retro',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 135,
    description: 'White calf leather sneakers detailed with a popping retro panel of yellow and orange suede.',
    longDescription: 'Retro varsity campus charm. Built with standard cowhide liners, golden numbering details, and vintage contrast rubber caps.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Court White & Yellow Burst', hex: '#FDFDFD' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Genuine premium full-grain bovine leather', 'Aesthetic suede overlay detailing panels', 'Thick double-stitched Margom rubber cups']
  },
  {
    name: 'Chunky Daisy Rainboots',
    brand: 'DiscoDaisy',
    category: 'Footwear' as const,
    subCategory: 'Boots',
    price: 115,
    description: 'Glossy rubber boots printed with energetic retro yellow daisy graphics on a blue body.',
    longDescription: 'Turn grey rainy days into an splash of vibrant retro playfulness. 100% dry seal boots with chunky comfortable block soles.',
    images: ['https://images.unsplash.com/photo-1514989940723-e8e5163ccb8b?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Blue Sky Golden Daisy', hex: '#FFDB58' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['Insulated vulcanized premium waterproof rubber', 'Lugged deep mud-repelling tread sole', 'Inside cozy cotton thermal sock linings']
  },
  {
    name: 'Electric Coral Deck Shoes',
    brand: 'CasuAll',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 125,
    description: 'Hand-laced classic boat deck shoes made from highly colorful coral leather.',
    longDescription: 'A vibrant summery twist on vintage yacht club codes. Features continuous wrap-around laces and non-slip white deck cups.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'High Volt Coral Ocean', hex: '#FF7F50' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    details: ['Supple water repellent oiled bovine leather', 'Continuous 360-degree leather lacing channels', 'Anti-marking wavy siped wet grip sole']
  },
  {
    name: 'Pastel Dream Knit Runners',
    brand: 'VividVibe',
    category: 'Footwear' as const,
    subCategory: 'Sneakers',
    price: 130,
    description: 'Knit multi-mesh sneakers in beautiful pastel lavender, yellow, and clear mint.',
    longDescription: 'Feather-light performance comfort with high visual vibrancy. Seamless knit material contours feet like a sock.',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Pastel Lavendar Breeze', hex: '#E6E6FA' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['Highly breathable organic woven threads', 'High responsiveness foam bottom cushions', 'Stretchy entry elastic collar line']
  },
  {
    name: 'Retro Gold Leather Slippers',
    brand: 'DiscoDaisy',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 155,
    description: 'Dazzling gold metallic leather indoor-outdoor slip loafer shoes.',
    longDescription: 'Lounge in complete glamorous comfort. Handmade with exquisite golden leather linings and durable outer soles.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Metallic Glitter Gold', hex: '#D4AF37' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    details: ['100% premium glove-grade metallic lining', 'Plush fully cushioned footbed backing', 'Flexible split-sole leather build']
  },
  {
    name: 'Vibrant Red Suede Oxfords',
    brand: 'Snooks Retro',
    category: 'Footwear' as const,
    subCategory: 'Classic Shoes',
    price: 215,
    description: 'Traditional wingtip Oxfords wrapped in rich high-saturation red calf suede.',
    longDescription: 'Exceptional tailoring adaptive for creative showstoppers. Double stitch accents highlight classic wingtip details elegantly.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Varsity Red Suede', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    details: ['Exquisite hand-polished Italian hide suede', 'Stitched Goodyear welting bounds', 'Stacked wood dress heel details']
  },

  // --- ACCESSORIES (33 Items) ---
  {
    name: 'Iridescent Frame Retro Glasses',
    brand: 'NeonWave',
    category: 'Accessories' as const,
    subCategory: 'Eyewear',
    price: 48,
    description: 'Chunk round frame sunglasses shining with shifting colorful multi-tone iridescent reflections.',
    longDescription: 'Keep your gaze strictly retro. Fully protective UV400 lenses housed in translucent polycarbonate frames that glow vibrant purple under sunlight.',
    images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Opal Iridescent Purple', hex: '#DA70D6' },
      { name: 'Translucent Cyan', hex: '#00FFFF' }
    ],
    sizes: ['One Size'],
    details: ['100% full spectrum UV400 blocking shields', 'Impact proof polycarbonate lightweight frames', 'Custom micro fabric retro wash pouch']
  },
  {
    name: 'Groovy Crochet Shoulder Bag',
    brand: 'GroovyThreads',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 75,
    description: 'Delightful daisy-patterned cotton shoulder tote bag hand crochet in a vibrant palette.',
    longDescription: 'A beautiful everyday casual carryall with strong 70s festival vibes. Robustly stitched cotton ensures complete carrying support.',
    images: ['https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Groovy Daisy Swirl Multi', hex: '#FF6F61' }
    ],
    sizes: ['One Size'],
    details: ['Handmade from organic combed long fiber cotton', 'Spacious broad comfortable shoulder strap', 'Cozy fabric lined interior compartment']
  },
  {
    name: 'Sunset Horizon Corduroy Cap',
    brand: 'SunsetDrive',
    category: 'Accessories' as const,
    subCategory: 'Headwear',
    price: 35,
    description: 'Charming 6-panel corduroy dad hat featuring embroidered sun graphic in warm yellow.',
    longDescription: 'Shade your steps in vintage casual comfort. Adjustable copper closure clasp fits custom coordinates nicely.',
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunset Orange Rib', hex: '#E25822' },
      { name: 'Navy Blue Cord', hex: '#002060' }
    ],
    sizes: ['Adjustable Onesize'],
    details: ['8-wale thick sturdy corduroy knit', 'Adjustable brass rear closure strap', 'Elegantly curved protective sun visor']
  },
  {
    name: 'Vibrant Nylon Utility Belt',
    brand: 'RetroKicks',
    category: 'Accessories' as const,
    subCategory: 'Belts',
    price: 28,
    description: 'Nylon webbed belt with a quick-click utility buckle in electric pink.',
    longDescription: 'Perfect accessory for utility cargo pants or relaxed shorts. Brings an aesthetic trace of retro sports style to any casual look.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Hot Pink Webbing', hex: '#FF69B4' }
    ],
    sizes: ['Adjustable'],
    details: ['Military grade extra thick nylon ribbon', 'Non-slip solid polycarbonate clasp buckle', '38mm standard street width']
  },
  {
    name: 'Neon Pop Digital Dial',
    brand: 'NeonWave',
    category: 'Accessories' as const,
    subCategory: 'Watches',
    price: 85,
    description: 'Classic digital watch fitted with an energetic neon green rubber strap.',
    longDescription: 'Authentic 80s arcade style watch. Packed with retro tech features: bright EL neon background shine, stopwatch timers, and robust water seal.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Active Neon Green', hex: '#39FF14' }
    ],
    sizes: ['One Size'],
    details: ['High precision digital quartz module interior', '100m waterproof protective casing', 'Super soft shape retaining silicone band']
  },
  {
    name: 'Disco Fever Glitter Bag',
    brand: 'DiscoDaisy',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 65,
    description: 'Shiny tote bag covered with multi-tone glowing retro silver glitter flakes.',
    longDescription: 'Ready to illuminate weekend parties or city walking. Generous space securely stores wallets, cosmetics, and cassettes.',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Mirror Silver Glitter', hex: '#C0C0C0' }
    ],
    sizes: ['One Size'],
    details: ['Heavy duty water resistant glitter material', 'Double reinforced shoulder grip handles', 'Inside zipped pockets for keys and cards']
  },
  {
    name: 'Acid-Wash Denim Bucket Hat',
    brand: 'RetroKicks',
    category: 'Accessories' as const,
    subCategory: 'Headwear',
    price: 42,
    description: 'Standard 90s hip-hop bucket hat in washed acid-blue rigid denim.',
    longDescription: 'Shield summer sun glow in complete skater comfort. Authentic brass ventilation eyelets keep you airy and cool.',
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Acid Washed Denim', hex: '#ADD8E6' }
    ],
    sizes: ['S/M', 'L/XL'],
    details: ['12oz rigid authentic cotton denim build', 'Embroidered retro sports logo badge', 'Flexible lightweight folding layout']
  },
  {
    name: 'Retro Cassette Keychain',
    brand: 'FunkSoul',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 18,
    description: 'Charming silicone keychain replicating an ancient mixtape cassette in neon pink and purple.',
    longDescription: 'Keep keys securely locked on an aesthetic flashback. High grade durable silicone resists drops cleanly.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Neon Cassette Multi', hex: '#FF00FF' }
    ],
    sizes: ['One Size'],
    details: ['Premium scratch resistant silicone', 'Heavy chrome key ring and lobster clamp', 'High level retro graphic detailing']
  },
  {
    name: 'Citrus Chunky Beanie',
    brand: 'VividVibe',
    category: 'Accessories' as const,
    subCategory: 'Headwear',
    price: 32,
    description: 'Thick chunky knit beanie hat in high-vis energetic orange warning yarn.',
    longDescription: 'Brings amazing warmth and striking vibrant colors to winter grayness. Knit is incredibly stretchy and soft.',
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Safety Citrus Orange', hex: '#FF5F1F' }
    ],
    sizes: ['One Size Fits All'],
    details: ['Double-layer heavyweight weave', 'Adjustable dynamic fold-up retro cuff', '100% cloud soft acrylic yarn']
  },
  {
    name: 'Checkerboard Tube Socks',
    brand: 'SunsetDrive',
    category: 'Accessories' as const,
    subCategory: 'Socks',
    price: 18,
    description: 'Classic high athletic socks highlighting retro green checkerboard cuff bands.',
    longDescription: 'Pure skater aesthetic. Super padded heels keep your canvas trainers comfortable across hours of walking.',
    images: ['https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Skate Green Checker', hex: '#32CD32' }
    ],
    sizes: ['M', 'L'],
    details: ['Organic carded combed cotton blend', 'Highly elastic compression ribbing prevents slide', 'Double cushioned toe and heel pockets']
  },
  {
    name: 'Classic Round Tortoiseshell Sunglasses',
    brand: 'Snooks Retro',
    category: 'Accessories' as const,
    subCategory: 'Eyewear',
    price: 55,
    description: 'Timeless round frames in glossy amber tortoiseshell with retro green lenses.',
    longDescription: 'A retro classic styled for vintage preppy wardrobes. Complemented with sturdy metal hinges and clear polarization.',
    images: ['https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Glossy Tortoiseshell', hex: '#704214' }
    ],
    sizes: ['One Size'],
    details: ['100% UV polarized amber optical protection', 'Triple-barrel sturdy metal hinges', 'Comfort mold nose pads']
  },
  {
    name: 'Vibrant Retro Pin Pack',
    brand: 'FunkSoul',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 22,
    description: 'Set of 5 enamel lapel pins showing nostalgic floppy disks, boomboxes, and smiley faces.',
    longDescription: 'Pin these onto your coordinates for custom vintage flavor. Made from sturdy copper and vibrant anti-chip enamel.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Multi Icons', hex: '#FF1493' }
    ],
    sizes: ['5-Pack'],
    details: ['Premium non-fading metal enamel baking', 'Secure rubber safety clutches back pins', 'Hand-drawn nostalgic retro vector artworks']
  },
  {
    name: 'Dayglow Fanny Pack',
    brand: 'NeonWave',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 45,
    description: 'Retro 3-zip nylon waist bag in vivid energetic dayglow yellow.',
    longDescription: 'Keep hands completely free during boardwalk sessions or active trips. Fitted with thick neon snap belts.',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Dayglow Yellow High-Vis', hex: '#CCFF00' }
    ],
    sizes: ['One Size'],
    details: ['Triple zip storage compartments', 'Nostalgic robust crinkle nylon weave', 'Highly adjustable quick click active belt']
  },
  {
    name: 'Cosmic Hair Scrunchie Set',
    brand: 'DiscoDaisy',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 19,
    description: 'Set of 3 plush velvet scrunchies in deep purple, hot pink, and metallic silver.',
    longDescription: 'Brings amazing retro playfulness to hairstyles. Extremely gentle velvet prevents hair pull cleanly.',
    images: ['https://images.unsplash.com/photo-1527799851257-35934149fa10?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Cosmic Trio', hex: '#800080' }
    ],
    sizes: ['3-Pack'],
    details: ['Supple stretch spandex velvet body', 'Superior thickness elastic Core bands', 'Protects hairs from folding kinks']
  },
  {
    name: 'Cobalt Canvas Tote',
    brand: 'CasuAll',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 38,
    description: 'Extra heavy duck canvas carryall tote in striking royal cobalt blue.',
    longDescription: 'The perfect simple, robust daily companion. Generous storage easily hosts magazines, laptops, and sunscreen.',
    images: ['https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Cobalt Canvas Blue', hex: '#002FA7' }
    ],
    sizes: ['One Size'],
    details: ['16oz thick military grade canvas duck', 'Double stitch reinforcement at stress spots', 'Hidden key holder loop interior']
  },
  {
    name: 'Wildwood Braided Belt',
    brand: 'SunsetDrive',
    category: 'Accessories' as const,
    subCategory: 'Belts',
    price: 49,
    description: 'Hand-braided retro belt in multi-tone warm tan, orange, and teal threads.',
    longDescription: 'A nostalgic twist on classic camp wear. Continuous loop braid allows custom pinning at any spot for supreme fitting comfort.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunset Braided Multi', hex: '#CD7F32' }
    ],
    sizes: ['Adjustable Onesize'],
    details: ['Premium waxed organic cotton thread weave', 'Antique solid brass buckle pin', '100% full hide leather tip reinforcement']
  },
  {
    name: 'Skate Messenger Bag',
    brand: 'RetroKicks',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 79,
    description: 'Rugged canvas shoulder messenger detailed with retro checker boarding panels.',
    longDescription: 'Designed for daily commute durability. Deep protective flaps house padded sleeves for laptops with secure click buckles.',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Retro Skater Checker', hex: '#1C1C1C' }
    ],
    sizes: ['One Size'],
    details: ['Teal interior lining makes keys easy to find', 'High security click lock shoulder clasps', 'Dual outer water bottle slots']
  },
  {
    name: 'Beaded Daisy Choker',
    brand: 'DiscoDaisy',
    category: 'Accessories' as const,
    subCategory: 'Jewelry',
    price: 25,
    description: 'Playful beach choker strand of colorful hand-threaded seed beads forming sunny white daisy designs.',
    longDescription: 'Retro 90s summer accessory. Handcrafted design matches beautifully with pastel halter crops or casual play-suits.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Daisy Seed Beads', hex: '#FFDB58' }
    ],
    sizes: ['Adjustable Length'],
    details: ['Genuine Japanese premium Miyuki glass beads', 'Anti-tarnish silver adjustable clasp ring', 'Reinforced core wire prevents breaks']
  },
  {
    name: 'Neon Cord Glasses Strap',
    brand: 'NeonWave',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 15,
    description: 'Chunky round athletic glass security neck cord in vibrant energetic yellow.',
    longDescription: 'Never lose your retro sunglasses in the surf. Dynamic rubber loops lock onto frames tightly.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Volt Yellow Core', hex: '#CCFF00' }
    ],
    sizes: ['One Size'],
    details: ['High friction slide-stopper adjustment bead', 'Premium marine grade flexible nylon core', 'Non-slip rubber frame boots']
  },
  {
    name: 'Sunset Patterned Silk Scarf',
    brand: 'GroovyThreads',
    category: 'Accessories' as const,
    subCategory: 'Scarves',
    price: 45,
    description: 'Flowy square scarf printed with dynamic swirling geometric lines of mustard, orange, and purple.',
    longDescription: 'Highly versatile. Knot this around your hair, bag straps, or neck for a chic splash of retro pattern and rich casual styling.',
    images: ['https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Mod Sunset Swirl', hex: '#DA70D6' }
    ],
    sizes: ['55cm x 55cm'],
    details: ['100% fine mulberry pure silk weave', 'Hand-rolled dynamic stitch edge finishes', 'Highly breathable soft luxury drape']
  },
  {
    name: 'Retro Game Phone Pouch',
    brand: 'FunkSoul',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 24,
    description: 'Soft silicone neck pouch shaped like an 8-bit classic gaming console console in neon blue.',
    longDescription: 'Aesthetic retro gadget protection. Secure top zip and long comfortable neck sashes protect phones securely.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: '8-Bit Neon Blue', hex: '#00BFFF' }
    ],
    sizes: ['One Size'],
    details: ['Plush shock absorbing soft silicone wall', 'Comfortable broad cotton neck strap cords', 'Direct pass-through headphone portals']
  },
  {
    name: 'Chunky Pastel Hair Clips',
    brand: 'VividVibe',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 15,
    description: 'Set of 4 thick retro acrylic snap clips in cute lavender, mint, and strawberry fuchsia colors.',
    longDescription: 'A cute, fun 90s nostalgic beauty touch. Anti-slip steel back teeth hold locks neatly during daily strolls.',
    images: ['https://images.unsplash.com/photo-1527799851257-35934149fa10?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Pastel Sweet Quartet', hex: '#D8BFD8' }
    ],
    sizes: ['4-Pack'],
    details: ['Premium high durability acetate resin body', 'High tension steel rust preventive clip backing', 'Comfortably rounded anti-bite edge curves']
  },
  {
    name: 'Sunset Suede Card Wallet',
    brand: 'SunsetDrive',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 45,
    description: 'Minimalist 4-slot card wallet constructed out of gorgeous rich tan and sunset orange suede.',
    longDescription: 'Keeps small gear incredibly neat and compact. Genuine suede develops a beautiful vintage grip over months.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunset Ochre Suede', hex: '#D2691E' }
    ],
    sizes: ['One Size'],
    details: ['100% premium Italian calf suede', 'Central multi-use currency compartment', 'Vivid orange stitching accents']
  },
  {
    name: 'Glitter Drink Flask',
    brand: 'FunkSoul',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 32,
    description: 'Double-walled insulated steel retro flask containing moving pink liquid glitter.',
    longDescription: 'Keep cold beverages icy across festival weekends. Shaking the flask causes liquid glitter swirls that echo lava lights.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Glowing Liquid Pink', hex: '#FF69B4' }
    ],
    sizes: ['500ml'],
    details: ['18/8 food-grade high insulated steel casing', 'BPA-free leaked protective screw cap', 'Sweat-free outer wall protection']
  },
  {
    name: 'Classic Red Plastic Picnic Flask',
    brand: 'CasuAll',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 25,
    description: 'Durable vintage holiday beach flask in high vibrant primary red.',
    longDescription: 'Traditional retro vacation styling. Insulated lining keeps soup hot or lemonade icy for several boardwalk hours.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Picnic Hot Red', hex: '#ED1C24' }
    ],
    sizes: ['750ml'],
    details: ['High impact break proof outer poly shell', 'Turn-to-pour micro leak prevent plug', 'Cap acts as an drinking cup']
  },
  {
    name: 'Neon Rainbow Shoelaces',
    brand: 'RetroKicks',
    category: 'Accessories' as const,
    subCategory: 'Socks',
    price: 15,
    description: 'Three pairs of thick flat replacement shoelaces in neon pink, lime green, and rainbow wrap.',
    longDescription: 'Give instant vibrant energy to standard white court sneakers or retro high tops. Heavy woven cords last through intense skate sessions.',
    images: ['https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Rainbow Blast Trio', hex: '#FF007F' }
    ],
    sizes: ['120cm'],
    details: ['Reinforced high tensile poly-cotton core', 'Durable non-splitting hard plastic tips', 'Ideal length for typical 6-to-8 eyelet sneakers']
  },
  {
    name: 'Retro Canvas Camera Strap',
    brand: 'Snooks Retro',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 38,
    description: 'Soft heavy canvas camera strap woven with a striking vertical orange stripe motif.',
    longDescription: 'Ditch boring black accessories. Padded canvas lies comfortably across shoulders, decorated with rich brown leather attachments.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vintage Safety Stripe', hex: '#FF8C00' }
    ],
    sizes: ['Adjustable Length'],
    details: ['Wide cushion canvas distributes weight cleanly', 'Highly secure dual steel loop click ends', 'Polished genuine cowhide end protectors']
  },
  {
    name: 'Groovy Crochet Bottle Holder',
    brand: 'GroovyThreads',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 35,
    description: 'Mesh water bottle holder hand-crocheted with beautiful green and yellow sunflower patterns.',
    longDescription: 'The ultimate beach or walk companion. Stretches to comfortably fit standard flasks while injecting vibrant retro boho charm.',
    images: ['https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunshine Forest Mix', hex: '#556B2F' }
    ],
    sizes: ['Standard Stretch'],
    details: ['Hand braided from robust organic cotton threads', 'Long crossover body strap sashes', 'Expands dynamically to house most bottles']
  },
  {
    name: 'Retro Club Patches Set',
    brand: 'Snooks Retro',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 25,
    description: 'Set of 4 multi-colored iron-on embroidered patches featuring wave designs and smiley graphics.',
    longDescription: 'Easily customize your denim jackets or canvas bags. Features heavy heat-activated adhesive backing for permanent fit.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Sunset Red & Teal', hex: '#FF7F50' }
    ],
    sizes: ['4-Pack'],
    details: ['Premium high luster embroidery threads', 'Super bond hot iron active adhesive backs', 'Clean non-fraying merrow stitched borders']
  },
  {
    name: 'Citrus Airpod Case Cover',
    brand: 'VividVibe',
    category: 'Accessories' as const,
    subCategory: 'Small Goods',
    price: 19,
    description: 'Vibrant lime-yellow silicone protective cover fitted with retro neon carabiners.',
    longDescription: 'Safeguard your tech on a pop of vibrant summer color. Soft tactile material resists dirt and impacts beautifully.',
    images: ['https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'High Volt Lime Case', hex: '#CCFF00' }
    ],
    sizes: ['Airpods Pro'],
    details: ['High grade thick shock repellent silicone', 'Anodized lightweight premium pink carabiner hook', 'Unfettered bottom charging portal hole']
  },
  {
    name: 'Holographic Wash Bag',
    brand: 'NeonWave',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 35,
    description: 'Waterproof toiletries wash bag in shimmering holographic sky-blue vinyl.',
    longDescription: 'Reflects brilliant iridescent colors in beach restrooms or gym settings. Perfect clear container for travel cosmetics.',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Holographic Blue Wave', hex: '#00FFFF' }
    ],
    sizes: ['One Size'],
    details: ['Thick water sealed splash proof vinyl build', 'Heavy nylon yellow zip lock with slider sashes', 'Easy-clean internal surfaces']
  },
  {
    name: 'Neon Terry Sweatbands',
    brand: 'RetroKicks',
    category: 'Accessories' as const,
    subCategory: 'Socks',
    price: 18,
    description: 'Retro athlete workout set containing a thick head band and two wrist bands in neon pink.',
    longDescription: 'Pure 1980s fitness vibe, perfect for active running or adding high sports style to casual street wear.',
    images: ['https://images.unsplash.com/photo-1527799851257-35934149fa10?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Vibrant Terry Pink', hex: '#FF1493' }
    ],
    sizes: ['Elastic Stretchy Onesize'],
    details: ['High absorption cotton nylon knit yarn', 'Extremely bouncy non-rigid structure stretch', 'Classic throwback double thickness ribs']
  },
  {
    name: 'Mustard Fanny Pack',
    brand: 'GroovyThreads',
    category: 'Accessories' as const,
    subCategory: 'Bags',
    price: 45,
    description: 'Charming two-compartment waist bag stitched in deep retro mustard corduroy.',
    longDescription: 'Keeps everyday keys, cash, and sunglasses nicely within snug, casual reach. Adorned with adjustable brass lock clasps.',
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop'],
    colors: [
      { name: 'Ochre Yellow Cord', hex: '#D4AF37' }
    ],
    sizes: ['One Size Fits All'],
    details: ['Thick 8-wale premium ribbed corduroy', 'Polished heavy brass adjusters and zippers', 'Cozy retro canvas strap sashes']
  }
];

// Helper to expand templates into complete, typed Product coordinates with realistic ratings & reviewscount
export const RETRO_PRODUCTS: Product[] = RETRO_TEMPLATES.map((t, idx) => {
  const indexKey = idx + 1;
  const rating = parseFloat((4.4 + (indexKey % 6) * 0.1).toFixed(1));
  const reviewsCount = 15 + (indexKey * 7) % 115;
  const inStock = indexKey % 18 !== 0; // Almost everything is in stock
  
  // Distribute prices into a much wider range dynamically from $12 up to $1450
  let calculatedPrice = t.price;
  if (indexKey % 10 === 0) {
    // Ultra luxury premium editions ($450 - $1450)
    calculatedPrice = 450 + (indexKey % 11) * 100;
  } else if (indexKey % 10 === 3) {
    // Designer tier luxury ($280 - $380)
    calculatedPrice = 280 + (indexKey % 6) * 20;
  } else if (indexKey % 10 === 7) {
    // Ultra-affordable/pocket-friendly vintage items ($12 - $34)
    calculatedPrice = 12 + ((indexKey % 12) * 2);
  } else if (indexKey % 10 === 1) {
    // Budget-friendly catalog entries ($18 - $45)
    calculatedPrice = 18 + ((indexKey % 10) * 3);
  } else {
    // Balanced quality mid-tier garments ($45 to $220)
    calculatedPrice = Math.max(45, t.price);
  }

  const isSale = indexKey % 3 === 1;
  const originalPrice = isSale ? Math.ceil(calculatedPrice * 1.35) : undefined;

  return {
    id: `snooks-retro-${t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: t.name,
    brand: t.brand || 'GroovyThreads',
    category: t.category,
    subCategory: t.subCategory,
    price: calculatedPrice,
    rating,
    reviewsCount,
    description: t.description,
    longDescription: t.longDescription,
    images: t.images.length > 0 ? t.images : ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop'],
    sizes: t.sizes,
    colors: t.colors,
    details: t.details,
    isNewArrival: indexKey % 3 === 0,
    isBestSeller: indexKey % 5 === 0,
    inStock,
    onSale: isSale,
    originalPrice: originalPrice
  };
});
