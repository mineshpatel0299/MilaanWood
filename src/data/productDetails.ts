import { collections, Product } from "./collections";

export interface TechnicalData {
  weight: string;
  density: string;
  fireRating: string;
  stc: string;
  edgeConstruction: string;
}

export interface ProductDetails extends Product {
  // 1. Overview
  sku: string;
  category: string;
  designStyle: string;
  shortTagline: string;
  
  // 2. Gallery
  gallery: string[];
  
  // 3. Description
  description: string;
  
  // 4. Quick Info
  coreConstruction: string;
  thickness: string;
  standardSizes: string;
  customSizes: string;
  warranty: string;
  
  // 5. Key Features
  features: string[];
  
  // 6. Finish Options
  finishes: string[];
  
  // 7. Available Colours
  availableColors: string[];
  
  // 8. Hardware Compatibility
  hardware: string[];
  
  // 9. Technical Data
  technicalData: TechnicalData;
  
  // 10. Available Sizes
  availableSizes: { width: string; height: string; thickness: string };
  
  // 11. Recommended Applications
  applications: string[];
  
  // 12. Care & Maintenance
  care: string;
  
  // 13. Downloads
  downloads: { name: string; url: string }[];
  
  // 14. Related Products
  relatedProducts: Product[];
}

export function getProductDetails(id: string): ProductDetails | null {
  let baseProduct: Product | undefined;
  for (const col of collections) {
    const found = col.products.find(p => p.id === id);
    if (found) {
      baseProduct = found;
      break;
    }
  }

  if (!baseProduct) return null;

  return {
    ...baseProduct,
    sku: `MW-${baseProduct.name.substring(0,2).toUpperCase()}-001`,
    category: "Designer Doors",
    designStyle: "Modern Minimal",
    shortTagline: "Timeless elegance with engineered strength",
    gallery: [
      baseProduct.image,
      "/door_featured.png",
      "/door_cat_2.png",
      "/door_featured_3.png",
    ],
    description: `The ${baseProduct.name} exemplifies the pinnacle of modern door design. Crafted with meticulous attention to detail, it features a premium ${baseProduct.material.toLowerCase()} surface that offers both stunning aesthetics and lasting durability. The engineered solid core provides exceptional stability, sound insulation, and a substantial feel that elevates any interior space. Perfect for high-end residential and commercial applications, this door seamlessly blends architectural beauty with uncompromising performance.`,
    coreConstruction: "Engineered Solid Core",
    thickness: "40 mm",
    standardSizes: "900 x 2100 mm",
    customSizes: "Available upon request",
    warranty: "10 Years",
    features: [
      "Moisture Resistant",
      "Premium Hand-Rubbed Finish",
      "Termite Resistant",
      "Custom Sizing Available"
    ],
    finishes: ["Natural Veneer", "PU Coating", "Laminate"],
    availableColors: Array.from(new Set(["Walnut", "Oak", "Teak", "Ash Grey", baseProduct.color])),
    hardware: ["Concealed Hinges", "Smart Lock Systems", "Mortise Lock", "Pivot System"],
    technicalData: {
      weight: "Approx. 45 kg (standard size)",
      density: "650 kg/m³",
      fireRating: "Up to 30 Minutes (FD30 available)",
      stc: "32 dB (Sound Transmission Class)",
      edgeConstruction: "Solid wood lipping on all 4 sides"
    },
    availableSizes: {
      width: "700mm to 1200mm",
      height: "2000mm to 3000mm",
      thickness: "35mm, 40mm, 45mm"
    },
    applications: ["Luxury Homes", "Villas", "Boutique Hotels", "Corporate Offices"],
    care: "Clean regularly with a soft, slightly damp microfiber cloth. Avoid harsh chemical cleaners, abrasives, or excessive moisture. Apply wood polish bi-annually for veneer finishes.",
    downloads: [
      { name: "Technical Data Sheet (PDF)", url: "#" },
      { name: "AutoCAD Details (DWG)", url: "#" },
      { name: "Product Catalogue", url: "#" },
      { name: "Warranty Guide", url: "#" }
    ],
    relatedProducts: collections[0].products.slice(0, 4)
  };
}
