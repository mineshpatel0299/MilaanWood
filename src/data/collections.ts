export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  tag: string | null;
  material: string;
  color: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  products: Product[];
}

const placeholderProducts: Product[] = [
  {
    id: "p1",
    name: "Classic Panel",
    price: "₹35,000",
    image: "/mw_cd_217.png",
    tag: "Bestseller",
    material: "Solid Teak",
    color: "Walnut",
  },
  {
    id: "p2",
    name: "Modern Flush",
    price: "₹28,000",
    image: "/door_cat_2.png",
    tag: null,
    material: "Engineered Wood",
    color: "Matte Black",
  },
  {
    id: "p3",
    name: "CNC Carved Art",
    price: "₹52,000",
    image: "/sun_door_cnc.png",
    tag: "Premium",
    material: "Mahogany",
    color: "Ebony",
  },
  {
    id: "p4",
    name: "Elegant Glass Insert",
    price: "₹45,000",
    image: "/contemporary_door.png",
    tag: "New",
    material: "Oak & Glass",
    color: "Natural Ash",
  },
  {
    id: "p5",
    name: "Grand Pivot",
    price: "₹68,000",
    image: "/door_featured.png",
    tag: "Exclusive",
    material: "Rosewood",
    color: "Rich Cherry",
  },
  {
    id: "p6",
    name: "Double French",
    price: "₹55,000",
    image: "/door_featured_3.png",
    tag: null,
    material: "Pine Wood",
    color: "White Oak",
  },
];

const collectionNames = [
  "ART DECO SERIES",
  "BOHEMIAN SERIES",
  "CLASSICAL VICTORIAN SERIES",
  "CONTEMPORARY SERIES",
  "FRENCH SERIES",
  "HOTEL SERIES",
  "INDIAN TRADITIONAL SERIES",
  "JAPANDI SERIES",
  "LAMINATED SERIES",
  "MINIMALIST SERIES",
  "MODERN SERIES",
  "PARAMETRIC SERIES",
  "RUSTIC SERIES",
  "SCULPTURAL RELIEF SERIES",
  "SEMI MODERN SERIES",
  "SMART TECH SERIES",
  "SPANISH SERIES",
  "TEMPLE SERIES",
  "VENEER SERIES",
  "ZEN SERIES",
];

const collectionImages = [
  "/door_featured.png",
  "/door_featured_2.png",
  "/door_featured_3.png",
  "/contemporary_door.png",
  "/sun_door_cnc.png",
  "/door_cat_2.png",
  "/door_cat_3.png",
  "/door_cat_4.png",
  "/door_cat_5.png",
  "/mw_cd_217.png",
];

// Generate collections dynamically
export const collections: Collection[] = collectionNames.map((name, index) => {
  const slug = name.toLowerCase().replace(/ /g, "-");
  return {
    id: `col_${index + 1}`,
    slug,
    name,
    image: collectionImages[index % collectionImages.length],
    description: `Explore the exquisite ${name} featuring unparalleled craftsmanship and premium materials designed to elevate your space.`,
    products: placeholderProducts.map((p, pIdx) => ({
      ...p,
      id: `${slug}-p${pIdx + 1}`,
      name: `${name.split(" ")[0]} ${p.name.split(" ")[0]} Door`, // Slight variation in name
    })),
  };
});

export const getCollectionBySlug = (slug: string) => {
  return collections.find((c) => c.slug === slug);
};
