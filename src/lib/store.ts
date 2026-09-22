// REPLACE {{CHECKOUT_LINK}} WITH YOUR ACTUAL CHECKOUT LINK
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
};

export const products: Product[] = [
  {
    slug: "medicube",
    name: "Medicube Zero Pore Pad 2.0",
    image: "https://i.ibb.co/Q7ZhWLXp/Gemini.jpg",
    singlePrice: "$14.90",
    originalPrice: "$44.70",
    bundlePrice: "$31.29",
    description: "Exfoliating toner pads for smooth, clear skin. Pack of 3.",
    contents: "Three full-size jars of exfoliating toner pads",
  },
  {
    slug: "biodance",
    name: "Biodance Bio-Collagen Real Deep Mask",
    image: "https://i.ibb.co/FR99Bty/Gemini-Ge.png",
    singlePrice: "$19.00",
    originalPrice: "$57.00",
    bundlePrice: "$39.90",
    description: "Deep hydration collagen mask. Pack of 3 boxes (12 masks total).",
    contents: "Three boxes, with twelve masks in total",
  },
  {
    slug: "the-ordinary",
    name: "The Ordinary Glycolic Acid 7% Exfoliating Toner",
    image: "https://i.ibb.co/F44ZyF4M/Gemini-Gen.jpg",
    singlePrice: "$9.00",
    originalPrice: "$27.00",
    bundlePrice: "$18.90",
    description: "Gentle exfoliating toner for bright, even skin. Pack of 3.",
    contents: "Three full-size bottles of exfoliating toner",
  },
  {
    slug: "summer-fridays",
    name: "Summer Fridays Lip Butter Balm",
    image: "https://i.ibb.co/rK6R5Wjh/Gemini-Gener.jpg",
    singlePrice: "$24.00",
    originalPrice: "$72.00",
    bundlePrice: "$50.40",
    description: "Hydrating lip butter balm. Pack of 3.",
    contents: "Three full-size hydrating lip balms",
  },
  {
    slug: "rhode",
    name: "Rhode Peptide Lip Treatment",
    image: "https://i.ibb.co/6cnq9hn5/Ge.png",
    singlePrice: "$23.00",
    originalPrice: "$69.00",
    bundlePrice: "$48.30",
    description: "Restorative peptide lip treatment. Pack of 3.",
    contents: "Three full-size peptide lip treatments",
  },
];

export const checkoutUrl = (product: Product) =>
  `${CHECKOUT_LINK}?product=${encodeURIComponent(product.slug)}`;