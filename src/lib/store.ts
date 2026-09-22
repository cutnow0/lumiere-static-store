// REPLACE WITH YOUR ACTUAL CHECKOUT LINK
export const CHECKOUT_LINK = "https://example.com/checkout";

export type Product = {
  slug: string;
  name: string;
  image: string;
  singlePrice: string;
  originalPrice: string;
  bundlePrice: string;
  description: string;
  contents: string;
  ritual: string;
};

export const products: Product[] = [
  {
    slug: "medicube",
    name: "Medicube Zero Pore Pad 2.0",
    image: "https://i.ibb.co/Q7ZhWLXp/Gemini.jpg",
    singlePrice: "$14.90",
    originalPrice: "$44.70",
    bundlePrice: "$31.29",
    description: "Exfoliating toner pads for smooth, clear skin. This bundle includes 3 full-size units.",
    contents: "Three full-size jars of exfoliating toner pads",
    ritual: "Sweep across freshly cleansed skin to refine the look of pores and reveal a calm, polished finish.",
  },
  {
    slug: "biodance",
    name: "Biodance Bio-Collagen Real Deep Mask",
    image: "https://i.ibb.co/FR99Bty/Gemini-Ge.png",
    singlePrice: "$19.00",
    originalPrice: "$57.00",
    bundlePrice: "$39.90",
    description: "Deep hydration collagen mask. This bundle includes 3 full-size boxes (12 masks total).",
    contents: "Three boxes, with twelve masks in total",
    ritual: "Let each hydrogel mask melt into skin overnight, leaving it visibly plump, rested, and luminous by morning.",
  },
  {
    slug: "the-ordinary",
    name: "The Ordinary Glycolic Acid 7% Exfoliating Toner",
    image: "https://i.ibb.co/F44ZyF4M/Gemini-Gen.jpg",
    singlePrice: "$9.00",
    originalPrice: "$27.00",
    bundlePrice: "$18.90",
    description: "Gentle exfoliating toner for bright, even skin. This bundle includes 3 full-size units.",
    contents: "Three full-size bottles of exfoliating toner",
    ritual: "A considered evening treatment that smooths uneven texture and restores clarity without complicating your routine.",
  },
  {
    slug: "summer-fridays",
    name: "Summer Fridays Lip Butter Balm",
    image: "https://i.ibb.co/rK6R5Wjh/Gemini-Gener.jpg",
    singlePrice: "$24.00",
    originalPrice: "$72.00",
    bundlePrice: "$50.40",
    description: "Hydrating lip butter balm. This bundle includes 3 full-size units.",
    contents: "Three full-size hydrating lip balms",
    ritual: "A silky, comforting veil of moisture that softens dry lips and adds a natural, understated sheen.",
  },
  {
    slug: "rhode",
    name: "Rhode Peptide Lip Treatment",
    image: "https://i.ibb.co/6cnq9hn5/Ge.png",
    singlePrice: "$23.00",
    originalPrice: "$69.00",
    bundlePrice: "$48.30",
    description: "Restorative peptide lip treatment. This bundle includes 3 full-size units.",
    contents: "Three full-size peptide lip treatments",
    ritual: "Peptide-rich care cushions lips with lasting hydration, helping them look smoother, fuller, and beautifully restored.",
  },
];

export const checkoutUrl = (product: Product) =>
  `${CHECKOUT_LINK}?product=${encodeURIComponent(product.slug)}`;

export const perUnitPrice = (product: Product) => {
  const bundleTotal = Number(product.bundlePrice.replace(/[^0-9.]/g, ""));
  return `$${(bundleTotal / 3).toFixed(2)}`;
};