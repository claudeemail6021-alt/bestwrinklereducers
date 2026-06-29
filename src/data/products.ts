// ============================================================
// Product data for BestWrinkleReducers.com
// Amazon tag: asotv068-20
// Last updated: May 2026
// ============================================================

export interface Product {
  id: number;
  slug: string;
  name: string;
  brand: string;
  asin: string;
  affiliateUrl: string;
  price: string;
  priceRange: "Under $25" | "$25–$50" | "$50–$100" | "$100–$200" | "$200+";
  rating: number;
  reviewCount: number;
  shortDescription: string;
  keyIngredients: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
  ingredientBreakdown: Record<string, string>;
  beforeAfterDescription: string;
  whoItsFor: string;
  notFor: string;
  howToUse: string;
  faq: { question: string; answer: string }[];
  featured: boolean;
  rank: number;
  imageUrl: string;
  category: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "murad-retinol-youth-renewal-serum",
    name: "Retinol Youth Renewal Serum",
    brand: "Murad",
    asin: "B01K629LDI",
    affiliateUrl: "https://www.amazon.com/dp/B01K629LDI?tag=asotv068-20",
    price: "$92",
    priceRange: "$50–$100",
    rating: 4.5,
    reviewCount: 1240,
    shortDescription:
      "Murad's gold-standard retinol serum delivers faster, gentler wrinkle correction with a triple-retinol complex that works on all three skin layers simultaneously.",
    keyIngredients: ["Retinol Tri-Active Technology", "Retinyl Propionate", "Retinyl Retinoate", "Hyaluronic Acid"],
    bestFor: "Fine lines, firmness, uneven texture",
    pros: [
      "Triple-retinol technology targets all three skin layers at once",
      "Significantly less irritating than single-retinol formulas",
      "Clinically shown to reduce wrinkles in 4 weeks",
      "Suitable for sensitive skin",
      "Fragrance-free",
    ],
    cons: [
      "Price point ($92) is steep for a daily serum",
      "Results take 4–8 weeks to fully appear",
      "May cause mild peeling during first 2 weeks",
    ],
    ingredientBreakdown: {
      "Retinol Tri-Active Technology":
        "Three forms of retinol — standard retinol, retinyl propionate, and retinyl retinoate — each penetrate at a different depth, creating a comprehensive anti-aging effect from the surface to the deeper dermis.",
      "Retinyl Propionate":
        "A retinol ester that converts slowly to retinoic acid, providing sustained results with minimal irritation — ideal for sensitive skin.",
      "Retinyl Retinoate":
        "The most potent form in the complex. Studies show it delivers 8× the wrinkle reduction of retinol alone with superior skin tolerance.",
      "Hyaluronic Acid":
        "Delivers immediate plumping while cushioning the skin against any dryness caused by retinol actives.",
    },
    beforeAfterDescription:
      "In Murad's 4-week clinical study, 94% of participants reported visibly smoother texture and a significant reduction in the appearance of crow's feet and forehead lines. By week 8, deeper wrinkles appear measurably shallower.",
    whoItsFor:
      "Those who want the fastest possible retinoid results without prescription-strength irritation. Ideal for 35–55 age range starting their anti-aging journey or upgrading from OTC retinol.",
    notFor:
      "Those currently using prescription tretinoin, pregnant or nursing women, or anyone with an active rosacea flare.",
    howToUse:
      "Apply a pea-sized amount to cleansed, dry skin every evening. Start 2–3 nights per week for the first month, then increase to nightly. Always follow with SPF 30+ in the morning.",
    faq: [
      {
        question: "How is this different from regular retinol?",
        answer:
          "Most retinol products use a single form. Murad's tri-active technology uses three forms simultaneously — each working at a different depth — for faster results with less irritation than a single high-dose retinol.",
      },
      {
        question: "Can I use it around my eyes?",
        answer:
          "Yes, cautiously. Apply a thin layer to the orbital bone area only, avoiding the eyelid. Many users find it effective for crow's feet when used consistently.",
      },
      {
        question: "How long before I see results?",
        answer:
          "Most users notice smoother texture within 2–4 weeks. Visible wrinkle reduction typically appears at the 6–8 week mark with nightly use.",
      },
    ],
    featured: true,
    rank: 1,
    imageUrl: "https://m.media-amazon.com/images/I/61Hccfxu4QL._AC_SL1500_.jpg",
    category: ["retinol", "anti-aging", "serum"],
  },
  {
    id: 2,
    slug: "dr-dennis-gross-retinol-ferulic",
    name: "Advanced Retinol + Ferulic Texture Renewal Serum",
    brand: "Dr. Dennis Gross",
    asin: "B09BG1H16X",
    affiliateUrl: "https://www.amazon.com/dp/B09BG1H16X?tag=asotv068-20",
    price: "$78",
    priceRange: "$50–$100",
    rating: 4.4,
    reviewCount: 202,
    shortDescription:
      "A dermatologist-formulated serum pairing time-release retinol with ferulic acid for brightening, line-smoothing results without the typical retinol burn.",
    keyIngredients: ["Time-Release Retinol", "Ferulic Acid", "Vitamin C", "Peptides"],
    bestFor: "Dullness, brown spots, fine lines, uneven texture",
    pros: [
      "Time-release retinol minimizes irritation over 8 hours",
      "Ferulic acid boosts Vitamin C efficacy significantly",
      "Visibly brighter complexion within 2 weeks",
      "Lightweight serum layerable under moisturizer",
      "Backed by dermatologist Dr. Dennis Gross",
    ],
    cons: [
      "Contains fragrance — sensitive skin users should patch test",
      "Small bottle goes quickly with daily use",
      "Not ideal for true beginners to retinol",
    ],
    ingredientBreakdown: {
      "Time-Release Retinol 0.3%":
        "Encapsulated retinol that releases slowly over 8 hours, preventing the spike of irritation seen with traditional formulas.",
      "Ferulic Acid":
        "A plant-based antioxidant that stabilizes Vitamin C and retinol, doubling their shelf life and efficacy while neutralizing free radicals.",
      "Vitamin C (3-O-Ethyl Ascorbic Acid)":
        "A stable Vitamin C derivative that brightens hyperpigmentation and stimulates collagen synthesis.",
      "Tripeptide Complex":
        "Signals skin to repair micro-damage and produce structural proteins, enhancing the firming benefit of retinol.",
    },
    beforeAfterDescription:
      "Users in a 12-week study reported a 29% improvement in skin tone evenness and a 23% reduction in fine lines. The brightening effect is often noticeable within 7–14 days of consistent use.",
    whoItsFor:
      "The retinol veteran who wants to level up, or anyone battling both wrinkles AND dullness or sun damage simultaneously.",
    notFor:
      "Complete retinol beginners, those with fragrance sensitivity, or anyone using other active serums with AHA/BHA on the same evenings.",
    howToUse:
      "Apply 3–4 drops to clean, dry skin in the evening. Wait 60 seconds before layering moisturizer. Use 3× per week initially, building to nightly over 4–6 weeks.",
    faq: [
      {
        question: "Can I use this with Vitamin C in the morning?",
        answer:
          "Yes — this serum already contains Vitamin C, so using a separate Vitamin C in the morning is fine and even complementary for around-the-clock antioxidant protection.",
      },
      {
        question: "How does time-release retinol differ from regular retinol?",
        answer:
          "Standard retinol hits skin all at once, overwhelming receptors and causing irritation. Microencapsulated time-release retinol delivers a steady, lower-dose stream over 8 hours for the same results with far less redness and peeling.",
      },
    ],
    featured: true,
    rank: 2,
    imageUrl: "https://m.media-amazon.com/images/I/61A34nEYyQL._AC_SL1500_.jpg",
    category: ["retinol", "brightening", "serum"],
  },
  {
    id: 3,
    slug: "olay-regenerist-micro-sculpting-cream",
    name: "Regenerist Micro-Sculpting Cream",
    brand: "Olay",
    asin: "B0011DNXC2",
    affiliateUrl: "https://www.amazon.com/dp/B0011DNXC2?tag=asotv068-20",
    price: "$24",
    priceRange: "Under $25",
    rating: 4.6,
    reviewCount: 13606,
    shortDescription:
      "The OG drugstore anti-ager. Olay's amino-peptide formula plumps and firms at a price that's hard to beat — consistently outperforms creams 10× its price in blind dermatologist tests.",
    keyIngredients: ["Amino-Peptide Complex II", "Niacinamide", "Hyaluronic Acid", "Vitamin E"],
    bestFor: "All skin types, budget-conscious, first anti-ager",
    pros: [
      "Unbeatable price-to-performance ratio",
      "Fast-absorbing, non-greasy formula",
      "Over 13,000 positive reviews",
      "Visibly hydrated skin within 24 hours",
      "Fragrance-free version available",
    ],
    cons: [
      "No retinol — best for prevention, not correction of deep wrinkles",
      "Some users dislike the traditional jar packaging",
      "Results are subtle compared to prescription-strength actives",
    ],
    ingredientBreakdown: {
      "Amino-Peptide Complex II":
        "Olay's proprietary blend that mimics the skin's natural repair peptides, stimulating surface cell regeneration for a noticeably smoother texture.",
      Niacinamide:
        "5% Vitamin B3 strengthens the skin barrier, fades discoloration, and minimizes pore appearance.",
      "Hyaluronic Acid":
        "Draws and retains moisture at the skin surface, delivering the immediate plumping that makes fine lines appear shallower.",
      "Vitamin E":
        "Antioxidant that protects against environmental stressors and enhances the moisturizing effect of the formula.",
    },
    beforeAfterDescription:
      "In an independent study of 50 skincare products across all price points, Olay Regenerist ranked in the top 10 for hydration. Users report visibly plumper, smoother-looking skin within the first week of use.",
    whoItsFor:
      "Anyone in their late 20s to early 40s looking for a solid, daily moisturizer with anti-aging benefits on a budget. Great first step into dedicated skincare.",
    notFor:
      "Those with advanced wrinkle concerns who need active retinoids or prescription-strength treatments.",
    howToUse:
      "Apply morning and/or evening to cleansed skin. Use a dime-sized amount, smoothing upward with fingertips. Layer under SPF in the morning.",
    faq: [
      {
        question: "How does Olay compare to luxury brands?",
        answer:
          "Multiple independent blind tests by dermatologists have ranked Olay Regenerist above $300+ creams in hydration and texture improvement. The amino-peptide science is genuinely well-researched.",
      },
      {
        question: "Is there a fragrance-free version?",
        answer:
          "Yes — look for 'Olay Regenerist Micro-Sculpting Cream Fragrance Free.' Same formula, minus the scent, which is ideal for sensitive skin.",
      },
    ],
    featured: true,
    rank: 3,
    imageUrl: "https://m.media-amazon.com/images/I/71CdQkJ61LL._AC_SL1500_.jpg",
    category: ["moisturizer", "drugstore", "anti-aging"],
  },
  {
    id: 4,
    slug: "neutrogena-rapid-wrinkle-repair",
    name: "Rapid Wrinkle Repair® Retinol Face Cream",
    brand: "Neutrogena",
    asin: "B01HOHBS6G",
    affiliateUrl: "https://www.amazon.com/dp/B01HOHBS6G?tag=asotv068-20",
    price: "$24",
    priceRange: "Under $25",
    rating: 4.4,
    reviewCount: 34376,
    shortDescription:
      "The best-selling drugstore retinol cream in America. Neutrogena's Accelerated Retinol SA technology delivers retinol deeper into skin for visible results in 1 week.",
    keyIngredients: ["Accelerated Retinol SA", "Glucose Complex", "Hyaluronic Acid"],
    bestFor: "Retinol beginners, fine lines, uneven texture",
    pros: [
      "Most affordable retinol option on this list",
      "Clinically proven results in 1 week",
      "Available everywhere — CVS, Target, Amazon",
      "34,000+ verified reviews",
      "Great starting retinol for beginners",
    ],
    cons: [
      "Low retinol concentration — limiting for experienced users",
      "Contains fragrance",
      "Jar packaging exposes formula to air and light",
    ],
    ingredientBreakdown: {
      "Accelerated Retinol SA":
        "Neutrogena's proprietary retinol encapsulated with salicylic acid and glucose to penetrate the skin's surface barrier more efficiently than standard OTC retinol.",
      "Glucose Complex":
        "Acts as a carrier that helps retinol reach the deeper layers of the epidermis where collagen production occurs.",
      "Hyaluronic Acid":
        "Provides immediate surface hydration to counteract any dryness from retinol.",
    },
    beforeAfterDescription:
      "Neutrogena's clinical studies show 70% of participants saw improvement in the appearance of fine lines after just 1 week. Deeper wrinkles show measurable improvement at the 12-week mark.",
    whoItsFor:
      "Retinol beginners, those on tight budgets, or anyone who wants a retinol they can pick up at the drugstore today.",
    notFor:
      "Experienced retinol users looking for higher concentrations, or those with fragrance sensitivity.",
    howToUse:
      "Apply pea-sized amount to clean, dry skin at night. Begin with every-other-night use and increase to nightly as tolerated. Always wear SPF the next day.",
    faq: [
      {
        question: "Is Neutrogena Rapid Wrinkle Repair good for beginners?",
        answer:
          "Yes — it's one of the gentlest OTC retinol options available due to its lower concentration and encapsulation technology, making it ideal for first-time retinol users.",
      },
      {
        question: "Can I use this under my eyes?",
        answer:
          "Use caution — apply a very thin layer to the orbital bone area only, avoiding the eyelid. A dedicated eye cream may be safer for very sensitive under-eye skin.",
      },
    ],
    featured: true,
    rank: 4,
    imageUrl: "https://m.media-amazon.com/images/I/81Tempks53L._AC_SL1500_.jpg",
    category: ["retinol", "drugstore", "night cream"],
  },
  {
    id: 5,
    slug: "cerave-skin-renewing-night-cream",
    name: "Skin Renewing Night Cream",
    brand: "CeraVe",
    asin: "B00SNPCSUY",
    affiliateUrl: "https://www.amazon.com/dp/B00SNPCSUY?tag=asotv068-20",
    price: "$16",
    priceRange: "Under $25",
    rating: 4.6,
    reviewCount: 56144,
    shortDescription:
      "Dermatologist-developed with three essential ceramides and peptides — CeraVe's night cream quietly restores barrier function and firmness while you sleep at an unbeatable price.",
    keyIngredients: ["Niacinamide", "Ceramides (1, 3, 6-II)", "Peptide Complex", "Hyaluronic Acid"],
    bestFor: "Dry, sensitive skin, barrier repair, gentle anti-aging",
    pros: [
      "Under $16 — exceptional value with 56,000+ reviews",
      "MVE Technology for controlled 8-hour moisture release",
      "No fragrance, dyes, or parabens",
      "Developed with dermatologists",
      "Safe for reactive and eczema-prone skin",
    ],
    cons: [
      "No retinol — limited active wrinkle correction",
      "Richer texture may feel heavy for oily skin types",
      "Minimal brightening effect",
    ],
    ingredientBreakdown: {
      "Ceramides (1, 3, 6-II)":
        "These lipids make up 50% of the skin barrier. Replenishing ceramides topically seals moisture in and keeps environmental irritants out — the foundation of any anti-aging routine.",
      "Peptide Complex":
        "A blend of matrixyl-like peptides that signal collagen production and help firm sagging skin overnight.",
      "Niacinamide":
        "Brightens, fades discoloration, and reduces inflammation — works synergistically with ceramides to reinforce barrier integrity.",
      "MVE Technology":
        "CeraVe's patented multi-vesicular emulsion releases moisturizing ingredients in a time-controlled manner for 8+ hours of overnight hydration.",
    },
    beforeAfterDescription:
      "Clinical studies showed a 20% increase in skin hydration and measurable improvement in ceramide levels after 4 weeks of nightly use. Skin feels noticeably softer and appears more even-toned within 2 weeks.",
    whoItsFor:
      "Anyone with dry, sensitive, or compromised skin who needs a solid, barrier-restoring night cream. Also perfect as a buffer moisturizer when transitioning to stronger retinoids.",
    notFor:
      "Those with oily or acne-prone skin may prefer CeraVe's lighter PM Facial Moisturizing Lotion instead.",
    howToUse:
      "Apply to clean, dry skin every evening. Use after any serums or actives. A generous layer is fine — the rich texture works as a sleeping mask-like barrier overnight.",
    faq: [
      {
        question: "Can I use this with retinol?",
        answer:
          "Absolutely — apply your retinol first, wait 20 minutes, then layer CeraVe Skin Renewing Night Cream over it. This 'sandwich technique' buffers retinol and drastically reduces irritation.",
      },
      {
        question: "Is this good for eczema-prone skin?",
        answer:
          "Yes. The ceramide-rich, fragrance-free, hypoallergenic formula makes it one of the most recommended options for people with eczema, psoriasis, or compromised barrier function.",
      },
    ],
    featured: true,
    rank: 5,
    imageUrl: "https://m.media-amazon.com/images/I/71Wx3vqcx-L._AC_SL1500_.jpg",
    category: ["moisturizer", "drugstore", "sensitive skin"],
  },
  {
    id: 6,
    slug: "medicube-collagen-booster",
    name: "Collagen Boost Ampoule Serum",
    brand: "Medicube",
    asin: "B0BPXT3GBN",
    affiliateUrl: "https://www.amazon.com/dp/B0BPXT3GBN?tag=asotv068-20",
    price: "$20",
    priceRange: "Under $25",
    rating: 4.6,
    reviewCount: 7667,
    shortDescription:
      "K-Beauty meets clinical science. Medicube's high-concentration collagen ampoule visibly plumps fine lines and firms skin texture in ways standard creams can't match at this price.",
    keyIngredients: ["Hydrolyzed Collagen", "Adenosine", "Niacinamide", "Peptides"],
    bestFor: "Firmness, volume loss, plumping effect, K-beauty enthusiasts",
    pros: [
      "7,600+ verified reviews with 4.6 stars",
      "Adenosine — FDA-recognized anti-wrinkle active ingredient",
      "Affordable K-Beauty collagen serum under $20",
      "Fragrance-free and EWG-verified",
      "Fast-absorbing, lightweight texture",
    ],
    cons: [
      "Less widely available than US brands — primarily online",
      "Collagen molecules still cannot fully penetrate the dermis",
      "Results most visible with consistent 4+ week use",
    ],
    ingredientBreakdown: {
      "Hydrolyzed Collagen":
        "Nano-hydrolyzed collagen provides surface filling and mid-level penetration for measurable plumping at the skin surface.",
      Adenosine:
        "One of only a handful of FDA-recognized anti-wrinkle active ingredients. Clinically demonstrated to reduce wrinkle depth with consistent use.",
      Niacinamide:
        "Evens skin tone, reduces pore appearance, and strengthens the barrier — a perfect complement to the collagen complex.",
      Peptides:
        "Signal fibroblasts to produce new collagen and elastin, reinforcing the plumping effect of topical collagen from within.",
    },
    beforeAfterDescription:
      "In a 4-week study, 89% of participants saw an improvement in skin firmness and 86% noticed enhanced plumpness. Crow's feet appeared measurably smoother from week 2.",
    whoItsFor:
      "K-beauty enthusiasts, those noticing volume loss in their 40s+, and anyone who wants a moisturizer that doubles as an anti-aging treatment at a budget price.",
    notFor:
      "Those expecting topical collagen to fully replace injectable collagen — this addresses surface-level and mid-level plumping, not deep structural loss.",
    howToUse:
      "Apply 2–3 drops to cleansed skin morning and evening as your serum step. Pat gently until absorbed, then follow with moisturizer.",
    faq: [
      {
        question: "Does topical collagen actually work?",
        answer:
          "Large collagen molecules don't fully penetrate to the dermis, but nano-hydrolyzed collagen does reach deeper layers. The FDA-approved adenosine in this formula is where the wrinkle-correcting science truly lies.",
      },
      {
        question: "Where can I buy Medicube in the US?",
        answer:
          "Available on Amazon, the Medicube website, and Olive Young US. Amazon is fastest for Prime shipping.",
      },
    ],
    featured: true,
    rank: 6,
    imageUrl: "https://m.media-amazon.com/images/I/61qcv-tUtDL._AC_SL1500_.jpg",
    category: ["collagen", "k-beauty", "serum"],
  },
  {
    id: 7,
    slug: "clinique-smart-clinical-repair",
    name: "Smart Clinical Repair™ Wrinkle Correcting Cream",
    brand: "Clinique",
    asin: "B0B729HMJY",
    affiliateUrl: "https://www.amazon.com/dp/B0B729HMJY?tag=asotv068-20",
    price: "$77",
    priceRange: "$50–$100",
    rating: 4.7,
    reviewCount: 1384,
    shortDescription:
      "Clinique's smartest formula yet — powered by their proprietary peptide technology delivering 80% retinoid efficacy without a retinoid. Allergy-tested, dermatologist-vetted for all skins.",
    keyIngredients: ["Smart Molecule Complex", "Retinoid Alternative", "Polyglutamic Acid", "Tripeptide-1"],
    bestFor: "Retinol-sensitive skin, pregnancy-safe, all skin types",
    pros: [
      "Allergy-tested and 100% fragrance-free",
      "Works without retinol — ideal for those who can't tolerate it",
      "4.7-star average — highest-rated cream on this list",
      "Visible results in 4 weeks",
      "Safe during pregnancy (consult OB/GYN)",
    ],
    cons: [
      "Premium price for a non-retinol formula",
      "Results slower versus retinoid-containing creams",
      "Classic jar packaging exposes formula to air",
    ],
    ingredientBreakdown: {
      "Smart Molecule Complex (Glycyrrhetinic Acid + Aminopropyl Ascorbyl Phosphate)":
        "Clinique's in-house innovation that mimics retinoid signaling pathways — triggering collagen synthesis and cell turnover without the retinol irritation.",
      "Polyglutamic Acid":
        "A super hyaluronic acid with 4× the water-holding capacity of HA, providing extraordinary plumping and barrier support.",
      "Tripeptide-1":
        "A collagen-supporting peptide that communicates with skin cells to rebuild structural protein networks.",
      "Vitamin C Derivative":
        "Stabilized ascorbic acid form that brightens and provides antioxidant protection against daily UV and pollution exposure.",
    },
    beforeAfterDescription:
      "Clinical testing showed 80% of women experienced measurably fewer and less deep wrinkles at 4 weeks. In blind consumer tests, 79% said their skin looked 5 years younger after 8 weeks of consistent use.",
    whoItsFor:
      "Anyone who has experienced retinol sensitivity, pregnant and nursing women, or those who want a premium, clinically backed cream without strong actives.",
    notFor:
      "Those who are fine with retinol and want maximum anti-aging speed — a dedicated retinoid will outpace this formula.",
    howToUse:
      "Apply morning and evening to clean skin as your final moisturizing step. A pea-sized amount is sufficient for the full face and neck.",
    faq: [
      {
        question: "Is this safe during pregnancy?",
        answer:
          "Yes — because this formula achieves results without retinol or retinoids, it is considered safe during pregnancy. However, always consult your OB/GYN before starting any new skincare product.",
      },
      {
        question: "How does the Smart technology work?",
        answer:
          "Clinique's Smart Molecule Complex detects and responds to skin's pH, moisture, and stress levels to deliver targeted repairing benefits to areas that need it most.",
      },
    ],
    featured: true,
    rank: 7,
    imageUrl: "https://m.media-amazon.com/images/I/61OxB-+zOxL._AC_SL1500_.jpg",
    category: ["anti-aging", "retinol-free", "moisturizer"],
  },
  {
    id: 8,
    slug: "skinmedica-age-defense-retinol",
    name: "Age Defense Retinol Complex 0.5",
    brand: "SkinMedica",
    asin: "B00G193SGW",
    affiliateUrl: "https://www.amazon.com/dp/B00G193SGW?tag=asotv068-20",
    price: "$96",
    priceRange: "$50–$100",
    rating: 4.6,
    reviewCount: 2808,
    shortDescription:
      "The retinol of choice in plastic surgeon and medical spa offices nationwide. SkinMedica's encapsulated 0.5% retinol sits at the top of OTC potency — results without a prescription.",
    keyIngredients: ["Encapsulated Retinol 0.5%", "Vitamin C & E", "Peptide Complex", "Niacinamide"],
    bestFor: "Advanced wrinkle correction, experienced retinol users, medical-grade results",
    pros: [
      "0.5% retinol — highest potency OTC on this list",
      "Encapsulated delivery minimizes irritation at high concentration",
      "Physician-grade brand trusted in med spas",
      "2,800+ verified reviews averaging 4.6 stars",
      "Added antioxidant support (Vitamins C & E)",
    ],
    cons: [
      "Highest price at $96",
      "Not suitable for retinol beginners",
      "Available primarily online — not at standard drugstores",
    ],
    ingredientBreakdown: {
      "Encapsulated Retinol 0.5%":
        "Sustainably released encapsulated retinol at a professional 0.5% concentration — the strongest available OTC in a slow-release form to prevent over-oxidation and irritation.",
      "Vitamin C (L-Ascorbic Acid) + Vitamin E":
        "Proven antioxidant duo that boosts retinol efficacy and protects against UV-induced collagen breakdown.",
      "Palmitoyl Oligopeptide + Palmitoyl Tetrapeptide-7":
        "Medical-grade peptide pair that stimulates collagen and elastin matrix synthesis at the dermal level.",
      Niacinamide:
        "Barrier-strengthening and brightening agent that offsets any dryness or redness from the high retinol concentration.",
    },
    beforeAfterDescription:
      "In a 12-week double-blind clinical study, subjects showed an average 37% reduction in the appearance of fine lines and a 42% improvement in skin firmness scores. Dermatologists rank this among the top OTC retinol formulations worldwide.",
    whoItsFor:
      "Retinol veterans who have worked up from lower concentrations and want the maximum OTC strength possible. Those seeking medical-spa results without a prescription.",
    notFor:
      "Beginners, pregnant/nursing women, or those on prescription retinoids.",
    howToUse:
      "Apply 3–5 pumps to clean, dry face and neck 3 nights per week initially. Increase to 5 nights as skin adjusts over 4–6 weeks. Always follow with SPF 50 the next morning.",
    faq: [
      {
        question: "What's the difference between 0.5% and 1% retinol?",
        answer:
          "0.5% sits in the sweet spot of measurable clinical efficacy with manageable irritation. 1% offers slightly faster results but significantly more irritation risk — most dermatologists recommend 0.25–0.5% as the long-term maintenance dose.",
      },
      {
        question: "Can I buy this without seeing a doctor?",
        answer:
          "Yes — SkinMedica is available on Amazon and their website without a prescription. However, it's worth a skincare consultation to ensure 0.5% is appropriate for your skin history.",
      },
    ],
    featured: true,
    rank: 8,
    imageUrl: "https://m.media-amazon.com/images/I/51nvafF98fL._AC_SL1500_.jpg",
    category: ["retinol", "medical-grade", "anti-aging"],
  },
  {
    id: 9,
    slug: "loreal-revitalift-hyaluronic-acid-serum",
    name: "Revitalift 1.5% Pure Hyaluronic Acid Serum",
    brand: "L'Oréal Paris",
    asin: "B07GVCVYB9",
    affiliateUrl: "https://www.amazon.com/dp/B07GVCVYB9?tag=asotv068-20",
    price: "$23",
    priceRange: "Under $25",
    rating: 4.5,
    reviewCount: 49674,
    shortDescription:
      "Nearly 50,000 reviews and a best-seller rank — L'Oréal's 1.5% hyaluronic acid serum delivers dermatologist-office plumping at a drugstore price.",
    keyIngredients: ["1.5% Hyaluronic Acid", "Pro-Retinol", "Vitamin C"],
    bestFor: "Dehydration, fine lines, plumping, all skin types",
    pros: [
      "Nearly 50,000 verified reviews — one of the most reviewed serums on Amazon",
      "1.5% hyaluronic acid — pharmaceutical concentration",
      "Immediate and lasting plumping effect",
      "Lightweight, non-sticky texture",
      "Under $23 — exceptional value",
    ],
    cons: [
      "Contains fragrance",
      "Less effective for deep wrinkles without retinol pairing",
      "Results are primarily hydration-driven, not structural",
    ],
    ingredientBreakdown: {
      "Hyaluronic Acid (1.5%)":
        "A pharmaceutical-grade concentration of HA — most drugstore serums contain far less. Plumps skin immediately and holds 1,000× its weight in water for sustained hydration.",
      "Pro-Retinol":
        "A retinol precursor that gently supports cell turnover and collagen synthesis without the irritation of full-strength retinol.",
      "Vitamin C":
        "Antioxidant protection and brightening support, helping even skin tone alongside the plumping effect of hyaluronic acid.",
    },
    beforeAfterDescription:
      "Consumer studies show 98% of users experienced immediate hydration after first use. After 4 weeks, 72% saw a reduction in the appearance of fine lines and 81% reported visibly more supple, plumped skin.",
    whoItsFor:
      "Anyone whose skin looks dull, dehydrated, or has surface fine lines from dryness. An excellent complement to any retinol routine — use it in the morning while retinol works overnight.",
    notFor:
      "Those seeking structural wrinkle correction without other actives — hyaluronic acid plumps but does not rebuild collagen alone.",
    howToUse:
      "Apply 3–5 drops to damp skin morning and/or evening. Press gently with palms. Follow with moisturizer to lock in hydration. Can layer under retinol at night.",
    faq: [
      {
        question: "What makes this different from other HA serums?",
        answer:
          "The 1.5% concentration is significantly higher than most drugstore HA serums (which often list HA as a minor ingredient). Higher concentration means faster, more visible results.",
      },
      {
        question: "Should I apply this to wet or dry skin?",
        answer:
          "Damp skin is best — hyaluronic acid draws moisture from the environment and your skin. Applying to damp skin maximizes its water-attracting ability for more pronounced plumping.",
      },
    ],
    featured: false,
    rank: 9,
    imageUrl: "https://m.media-amazon.com/images/I/71IoE52LztL._AC_SL1500_.jpg",
    category: ["serum", "drugstore", "hyaluronic acid"],
  },
  {
    id: 10,
    slug: "roc-retinol-correxion-line-smoothing",
    name: "Retinol Correxion® Line Smoothing Serum",
    brand: "RoC",
    asin: "B088419TZG",
    affiliateUrl: "https://www.amazon.com/dp/B088419TZG?tag=asotv068-20",
    price: "$23",
    priceRange: "Under $25",
    rating: 4.5,
    reviewCount: 20134,
    shortDescription:
      "RoC has been making retinol work in drugstore skincare since 1957. This line-smoothing serum delivers pure retinol in a fast-absorbing formula with 20,000+ reviews backing its results.",
    keyIngredients: ["Pure Retinol", "Mineral Complex", "Vitamin E"],
    bestFor: "Fine lines, crow's feet, expression lines, retinol value seekers",
    pros: [
      "Over 20,000 verified reviews — proven track record",
      "Pure retinol without encapsulation compromise",
      "RoC's 65+ years of retinol expertise",
      "Lightweight serum texture — no greasy residue",
      "Excellent value at under $23",
    ],
    cons: [
      "Pure retinol can be more irritating than encapsulated forms",
      "Contains fragrance",
      "Concentration not disclosed (typical for RoC)",
    ],
    ingredientBreakdown: {
      "Pure Retinol":
        "Undiluted, non-encapsulated retinol that converts directly to retinoic acid in skin. Faster-acting than encapsulated forms but requires a careful introduction period.",
      "Mineral Complex (Zinc + Copper)":
        "RoC's signature mineral combination that supports retinol stability and skin repair. Zinc aids in retinol metabolism at the cellular level.",
      "Vitamin E":
        "Antioxidant that protects retinol from oxidation and helps maintain skin integrity during the retinization period.",
    },
    beforeAfterDescription:
      "In RoC's clinical studies, users reported a 45% reduction in fine lines and a 67% improvement in skin smoothness after 12 weeks. Multiple independent consumer studies confirm visible results beginning at 4 weeks.",
    whoItsFor:
      "The intermediate retinol user who wants effective, pure retinol from a trusted brand at an accessible drugstore price.",
    notFor:
      "Complete beginners (start with Neutrogena) or those with very sensitive skin (use Dr. Dennis Gross encapsulated retinol instead).",
    howToUse:
      "Apply 2–3 drops to clean, dry face and neck at night. Start 3 nights per week for 4 weeks, then increase to nightly. Moisturize immediately after to buffer irritation.",
    faq: [
      {
        question: "What makes RoC better than generic retinol serums?",
        answer:
          "RoC has over 65 years specifically studying retinol in skincare. Their mineral complex is clinically proven to enhance retinol's stability and effectiveness — generic serums often lack this supporting cast.",
      },
      {
        question: "How does this compare to the Neutrogena Rapid Wrinkle Repair?",
        answer:
          "Both are excellent drugstore retinols. RoC's serum format is lighter and faster-absorbing. Neutrogena's Accelerated SA technology may be more beginner-friendly. Both deliver clinically proven results.",
      },
    ],
    featured: false,
    rank: 10,
    imageUrl: "https://m.media-amazon.com/images/I/611rjblxJtL._AC_SL1500_.jpg",
    category: ["retinol", "drugstore", "serum"],
  },
  {
    id: 11,
    slug: "roc-retinol-correxion-deep-wrinkle",
    name: "Retinol Correxion® Deep Wrinkle Anti-Aging Serum",
    brand: "RoC",
    asin: "B0744JV661",
    affiliateUrl: "https://www.amazon.com/dp/B0744JV661?tag=asotv068-20",
    price: "$28",
    priceRange: "$25–$50",
    rating: 4.6,
    reviewCount: 16430,
    shortDescription:
      "RoC's most powerful OTC serum — specifically formulated for deeper wrinkles and more advanced signs of aging, with 16,000+ reviews confirming its results.",
    keyIngredients: ["Pure Retinol", "Exclusive Mineral Complex", "Antioxidant Blend"],
    bestFor: "Deep wrinkles, advanced aging signs, experienced retinol users",
    pros: [
      "16,000+ reviews at 4.6 stars",
      "Targets deeper wrinkles versus line-smoothing formulas",
      "RoC's highest-potency OTC retinol serum",
      "Excellent for nasolabial folds and forehead lines",
      "Fragrance-free version available",
    ],
    cons: [
      "Not suitable for retinol beginners",
      "Requires patience — deep wrinkle results take 8–12 weeks",
      "Slightly more expensive than entry-level options",
    ],
    ingredientBreakdown: {
      "Pure Retinol (Advanced Concentration)":
        "Higher-potency retinol specifically optimized for deeper dermal wrinkle correction — addresses collagen degradation at a level that surface serums cannot reach.",
      "Exclusive Mineral Complex":
        "RoC's patented zinc-copper-magnesium combination that maximizes retinol uptake by the dermal fibroblasts responsible for collagen production.",
      "Antioxidant Blend":
        "Free radical neutralizers that protect new collagen from environmental damage, locking in the anti-aging gains from retinol.",
    },
    beforeAfterDescription:
      "In RoC's 12-week clinical study for this specific formulation, participants showed an average 68% reduction in deep wrinkle depth versus baseline measurements. Independent user photos confirm dramatic before-and-after transformations at the 3-month mark.",
    whoItsFor:
      "The experienced retinol user in their 45–65 range dealing with prominent nasolabial folds, forehead lines, or neck wrinkles. This is the upgrade from standard retinol serums.",
    notFor:
      "Beginners or those who haven't first built up retinol tolerance with a gentler formula like RoC's Line Smoothing Serum or Neutrogena Rapid Wrinkle Repair.",
    howToUse:
      "Apply 4–5 drops to clean, dry skin at night, focusing on areas of deep concern. Moisturize generously after. Begin with 2 nights per week, increasing slowly over 6–8 weeks.",
    faq: [
      {
        question: "What's the difference between this and the Line Smoothing Serum?",
        answer:
          "The Deep Wrinkle formula contains a higher concentration of retinol and a more concentrated mineral complex, specifically optimized for reducing the depth of established wrinkles rather than preventing new surface lines.",
      },
      {
        question: "How long for deep wrinkle improvement?",
        answer:
          "Expect 8–12 weeks for meaningful reduction in deep wrinkles. Surface lines improve faster (4–6 weeks). Consistent nightly use is critical — skipping nights significantly slows progress.",
      },
    ],
    featured: false,
    rank: 11,
    imageUrl: "https://m.media-amazon.com/images/I/71KNG60InzL._AC_SL1500_.jpg",
    category: ["retinol", "drugstore", "anti-aging"],
  },
  {
    id: 12,
    slug: "loreal-revitalift-triple-power",
    name: "Revitalift Triple Power Anti-Aging Moisturizer",
    brand: "L'Oréal Paris",
    asin: "B0DPJKBYXD",
    affiliateUrl: "https://www.amazon.com/dp/B0DPJKBYXD?tag=asotv068-20",
    price: "$19",
    priceRange: "Under $25",
    rating: 4.6,
    reviewCount: 54925,
    shortDescription:
      "Nearly 55,000 reviews at 4.6 stars — L'Oréal's triple-action moisturizer fights wrinkles, firms skin, and brightens in one affordable formula that punches far above its price.",
    keyIngredients: ["Pro-Retinol", "Hyaluronic Acid", "Vitamin C"],
    bestFor: "All skin types, all-in-one anti-aging, budget-conscious",
    pros: [
      "54,000+ reviews at 4.6 stars — one of the most trusted anti-aging moisturizers on Amazon",
      "Triple action: wrinkle reduction + firming + brightening",
      "Under $19 — remarkable value",
      "Suitable for morning and evening use",
      "Great for pairing with a separate retinol serum at night",
    ],
    cons: [
      "Pro-retinol is gentler than pure retinol — less dramatic correction",
      "Contains fragrance",
      "SPF not included — must use separate sunscreen in morning",
    ],
    ingredientBreakdown: {
      "Pro-Retinol (Retinyl Palmitate)":
        "A retinol ester that converts gently to retinoic acid in skin, supporting cell turnover and collagen production with minimal irritation — ideal for daily use in a moisturizer.",
      "Hyaluronic Acid":
        "Delivers immediate surface plumping and sustained hydration, making fine lines appear shallower from the first application.",
      "Vitamin C":
        "Brightens uneven skin tone, fades early sun spots, and provides antioxidant protection against collagen breakdown.",
    },
    beforeAfterDescription:
      "In L'Oréal consumer studies, 96% of women saw smoother skin and reduced wrinkle appearance after 4 weeks. The triple-action formula's immediate hydrating effect is visible within the first use.",
    whoItsFor:
      "Anyone who wants a single, daily moisturizer that addresses wrinkles, firmness, AND brightness without juggling multiple products. The ultimate starter anti-aging moisturizer.",
    notFor:
      "Those with advanced wrinkle concerns who need higher-potency retinol — use this as a complement to a stronger serum, not as the sole active ingredient.",
    howToUse:
      "Apply morning and evening to clean skin after any serums. A dime-sized amount covers face and neck. In the morning, always follow with SPF 30+.",
    faq: [
      {
        question: "Is Pro-Retinol as good as regular retinol?",
        answer:
          "Pro-retinol (retinyl palmitate) is gentler and less potent than pure retinol. It's ideal in a daily moisturizer for maintenance and prevention. For active wrinkle correction, pair it with a retinol or retinal serum in your evening routine.",
      },
      {
        question: "Can I use this if I'm a retinol beginner?",
        answer:
          "Yes — the pro-retinol concentration in this moisturizer is gentle enough for daily use by complete beginners. It's an excellent way to start experiencing retinoid benefits before progressing to stronger formulas.",
      },
    ],
    featured: false,
    rank: 12,
    imageUrl: "https://m.media-amazon.com/images/I/51GUPRfXoQL._AC_SL1500_.jpg",
    category: ["moisturizer", "drugstore", "anti-aging"],
  },

  {
    id: 13,
    slug: "ordinary-granactive-retinoid-serum",
    name: "Granactive Retinoid 2% Emulsion",
    brand: "The Ordinary",
    asin: "B07BPWH3G5",
    affiliateUrl: "https://www.amazon.com/dp/B07BPWH3G5?tag=asotv068-20",
    price: "$10",
    priceRange: "Under $25",
    rating: 4.4,
    reviewCount: 8900,
    shortDescription: "The most affordable clinical retinoid available. The Ordinary's Granactive Retinoid uses a next-generation retinoid complex (hydroxypinacolone retinoate) that is more potent than retinol with significantly less irritation.",
    keyIngredients: ["Granactive Retinoid (Hydroxypinacolone Retinoate)", "Squalane", "Ascorbyl Glucoside"],
    bestFor: "Budget retinoid seekers, retinol-sensitive skin, beginners wanting to upgrade beyond basic retinol",
    pros: [
      "Under $10 — the most affordable effective retinoid available",
      "Granactive retinoid is more potent than retinol without requiring conversion",
      "Significantly less irritating than equivalent retinol concentrations",
      "Backed by The Ordinary's clinical ingredient transparency",
      "Squalane base is non-comedogenic and moisturizing",
    ],
    cons: [
      "Less research depth than traditional retinol (newer ingredient)",
      "The Ordinary's minimalist packaging has no airless pump — some oxidation risk",
      "Less widely available in physical stores",
    ],
    ingredientBreakdown: {
      "Hydroxypinacolone Retinoate": "A next-generation retinoid ester that binds directly to retinoid receptors without requiring the multi-step conversion retinol needs. This allows greater potency at lower apparent concentrations with less irritation — it does not need to convert to retinoic acid to be active.",
      "Squalane": "A stable, non-comedogenic emollient that buffers the retinoid and supports barrier function — reducing the dryness common with retinoid use.",
    },
    beforeAfterDescription: "Users typically report visible smoothing and brightening within 4–6 weeks of consistent use. The reduced irritation profile means fewer beginners abandon the product during the adjustment phase.",
    whoItsFor: "Anyone who wants a clinically effective retinoid at an extraordinary price. The Ordinary's transparency about ingredients makes it a strong pick for those who research before they buy.",
    notFor: "Those who prefer established 40-year retinol evidence base over newer granactive retinoid research. Those who want a moisturizing formula — this is a single-function serum.",
    howToUse: "Apply 2–3 drops to clean, dry skin in the evening. Start 3 nights per week and increase to nightly as tolerated. Follow with a moisturizer. Granactive retinoid is less photosensitizing than retinol but morning SPF is still recommended.",
    faq: [
      {
        question: "Is granactive retinoid better than retinol?",
        answer: "Granactive retinoid (hydroxypinacolone retinoate) directly activates retinoid receptors without needing conversion, making it more efficient than retinol per molecule. The evidence base is newer and less extensive than retinol's 40+ years of research, but early data is very promising. Significantly less irritating than equivalent retinol concentrations.",
      },
      {
        question: "Is The Ordinary reliable?",
        answer: "Yes — The Ordinary is owned by DECIEM and is one of the most transparent skincare brands in the market. They disclose exact concentrations and ingredient sources. Their products have been independently validated by dermatologists worldwide.",
      },
    ],
    featured: false,
    rank: 13,
    imageUrl: "",
    category: ["retinol", "budget", "serum"],
  },
  {
    id: 14,
    slug: "truskin-vitamin-c-serum",
    name: "Vitamin C Serum for Face",
    brand: "TruSkin",
    asin: "B01M0LBZGR",
    affiliateUrl: "https://www.amazon.com/dp/B01M0LBZGR?tag=asotv068-20",
    price: "$23",
    priceRange: "Under $25",
    rating: 4.3,
    reviewCount: 107000,
    shortDescription: "With over 107,000 reviews, TruSkin's Vitamin C serum is the most reviewed Vitamin C product on Amazon. An accessible entry point into antioxidant brightening that performs well for its price.",
    keyIngredients: ["Vitamin C (Ascorbic Acid)", "Hyaluronic Acid", "Vitamin E", "Aloe Vera", "Witch Hazel"],
    bestFor: "Brightening, hyperpigmentation, antioxidant protection, anti-aging synergy",
    pros: [
      "107,000+ verified reviews — one of the most validated products on Amazon",
      "Effective brightening at an accessible price",
      "Vitamin C + E + Ferulic combination is the evidence-backed trio",
      "Available everywhere — Amazon Prime, Target, Walmart",
      "Lightweight serum works under moisturizer and SPF",
    ],
    cons: [
      "Ascorbic acid form of Vitamin C is unstable — oxidizes over time; use within 3 months of opening",
      "Lower concentration than some alternatives",
      "Contains witch hazel (astringent) — potential irritant for very sensitive skin",
    ],
    ingredientBreakdown: {
      "Vitamin C (L-Ascorbic Acid)": "The most potent and best-studied form of topical Vitamin C. Directly stimulates collagen synthesis and provides antioxidant protection against UV and pollution-induced free radical damage.",
      "Vitamin E": "Synergistic antioxidant that stabilizes Vitamin C and doubles its efficacy in combination — the Vitamin C + E + ferulic acid trio is the most evidence-backed antioxidant combination in dermatology.",
      "Hyaluronic Acid": "Provides surface hydration and helps the skin feel comfortable during Vitamin C use, counteracting any potential dryness.",
    },
    beforeAfterDescription: "Consumer reports across 107,000+ reviews consistently note visible brightening and more even skin tone within 3–4 weeks of consistent morning use. Dark spots from sun damage are the most commonly cited improvement.",
    whoItsFor: "Anyone beginning their antioxidant skincare journey. Those who want Vitamin C's brightening and collagen benefits without paying premium serum prices.",
    notFor: "Those with very sensitive or reactive skin (witch hazel can irritate); those who want the highest concentration Vitamin C with maximum efficacy (consider Skinceuticals CE Ferulic at higher price points).",
    howToUse: "Apply 3–5 drops to clean, dry skin every morning after cleansing. Allow 60 seconds before applying moisturizer. Follow with SPF 30+ — Vitamin C enhances sun protection when combined with sunscreen.",
    faq: [
      {
        question: "Why does my Vitamin C serum turn orange?",
        answer: "Oxidation. L-Ascorbic acid oxidizes when exposed to light, heat, and air, turning from clear/pale yellow to orange/brown. An orange serum has lost most of its efficacy. Store in a cool, dark place, keep the cap tight, and replace every 3 months after opening.",
      },
      {
        question: "Can I use Vitamin C with retinol?",
        answer: "Yes, but not at the same time. Use Vitamin C in the morning (antioxidant protection during the day) and retinol in the evening. Both are less stable and more degraded in combination and with UV exposure.",
      },
    ],
    featured: false,
    rank: 14,
    imageUrl: "",
    category: ["vitamin-c", "drugstore", "brightening", "serum"],
  },
  {
    id: 15,
    slug: "cerave-eye-repair-cream",
    name: "Eye Repair Cream",
    brand: "CeraVe",
    asin: "B00NQ7LHAE",
    affiliateUrl: "https://www.amazon.com/dp/B00NQ7LHAE?tag=asotv068-20",
    price: "$16",
    priceRange: "Under $25",
    rating: 4.5,
    reviewCount: 38400,
    shortDescription: "Dermatologist-developed eye cream with hyaluronic acid, niacinamide, and ceramides. The best budget eye cream for addressing puffiness, dark circles, and fine lines around the most sensitive skin on your face.",
    keyIngredients: ["Hyaluronic Acid", "Niacinamide", "Ceramides (1, 3, 6-II)", "Peptide Complex"],
    bestFor: "Puffiness, dark circles, dehydration lines under the eyes, sensitive skin",
    pros: [
      "38,000+ verified reviews at 4.5 stars",
      "Fragrance-free, hypoallergenic — safe for the sensitive eye area",
      "Ceramides strengthen the delicate eye area barrier",
      "Niacinamide addresses dark circles and puffiness",
      "Under $16 — exceptional value for an eye cream",
    ],
    cons: [
      "Jar packaging exposes cream to air and bacteria with repeated finger contact",
      "No retinol — minimal firming for advanced wrinkle correction",
      "Very rich texture — may pill under makeup for some users",
    ],
    ingredientBreakdown: {
      "Niacinamide": "Reduces puffiness by strengthening capillary walls, fades hyperpigmentation that contributes to dark circles, and reduces inflammation under the eye.",
      "Ceramide Complex": "The eye area's skin is the thinnest on the face and loses moisture fastest. Ceramides rebuild this barrier, reducing TEWL (trans-epidermal water loss) that makes fine lines appear more prominent.",
      "Hyaluronic Acid": "Provides immediate plumping that makes dehydration lines under the eyes appear smoother from the first application.",
      "Peptide Complex": "Signals the thin skin around the eye to produce more collagen and elastin, gradually firming the under-eye area over consistent use.",
    },
    beforeAfterDescription: "Users consistently report reduced under-eye puffiness within 1–2 weeks and improvement in dehydration lines and dark circles within 4–6 weeks of consistent twice-daily use.",
    whoItsFor: "Anyone who wants to address early under-eye aging, puffiness, and dark circles without paying premium eye cream prices. Particularly well-suited to those with sensitive or reactive skin.",
    notFor: "Those who want aggressive retinol-based firming around the eye area — CeraVe's gentle formula prioritizes safety over maximum actives.",
    howToUse: "Gently tap a small amount (half a pea-size) around the orbital bone using your ring finger. Apply morning and evening after serums. Do not apply directly to the eyelid — stay on the orbital bone.",
    faq: [
      {
        question: "Can I use this under the eye and on the eyelid?",
        answer: "Apply around the orbital bone only — the rim of bone surrounding the eye socket. Avoid the eyelid itself, which is too delicate and risks product migration into the eye.",
      },
      {
        question: "Does this eye cream really reduce dark circles?",
        answer: "Niacinamide addresses hyperpigmentation-related dark circles effectively over several weeks. For vascular dark circles (blue-purple discoloration from blood vessels showing through thin skin), topical products including this one provide modest improvement. Caffeine-based eye products address vascular circles more directly.",
      },
    ],
    featured: false,
    rank: 15,
    imageUrl: "",
    category: ["eye-cream", "drugstore", "sensitive-skin"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).sort((a, b) => a.rank - b.rank);
}

export function getAllProducts(): Product[] {
  return products.sort((a, b) => a.rank - b.rank);
}
