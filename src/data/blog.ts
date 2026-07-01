export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for simplicity
  author: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  inlineImages?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Renaissance of Solid Teak in Modern Architecture",
    slug: "renaissance-of-solid-teak",
    excerpt: "Why the world's most discerning architects are returning to solid Burma Teak for their statement entrances.",
    content: [
      "In an era dominated by synthetic materials and hollow-core mass production, the architectural world is witnessing a profound return to authenticity. Solid wood—specifically Burma Teak—is experiencing a renaissance as the material of choice for luxury entrances.",
      "The appeal lies not just in its aesthetic warmth, but in its unparalleled durability. Teak's natural oils make it highly resistant to the elements, allowing it to age gracefully over decades rather than deteriorating in years. For centuries, teak was the backbone of maritime construction, trusted to withstand the harshest oceans. Today, that same resilience is being harnessed to protect our most intimate sanctuaries.",
      "IMAGE:/door_cat_3.png",
      "At Milan Wood, we have observed a dramatic 40% increase in requests for solid, hand-finished teak pivot doors from high-end residential architects over the past two years. These are not merely doors; they are kinetic sculptures that bridge the gap between the exterior world and the interior sanctuary.",
      "QUOTE:A door is the handshake of a building. It is the very first physical interaction a person has with a space. It must feel substantial.",
      "As we move further into a digital, touchless age, the tactile experience of touching a meticulously sanded, raw wood grain becomes a grounding, almost meditative interaction. The sheer weight and momentum of a 400-pound solid teak pivot door opening effortlessly on its axis is an engineering marvel that commands respect.",
      "But sourcing this material requires extreme diligence. Ethical procurement is non-negotiable. The teak we use is strictly vetted, harvested from sustainable plantations where the ecological balance is meticulously maintained.",
      "IMAGE:/mw_cd_217.png",
      "Ultimately, a solid teak entrance is an investment in generational durability. It rejects the disposable culture of modern construction. It is designed to weather, to build character, and to stand as a silent sentinel for the lifetimes of those who pass through it."
    ],
    author: "Elena Rossi",
    date: "October 12, 2026",
    readTime: "4 min read",
    category: "Materials",
    coverImage: "/door_featured_3.png",
    inlineImages: ["/door_cat_3.png", "/mw_cd_217.png"]
  },
  {
    id: "2",
    title: "Precision Meets Soul: The Art of CNC Carving",
    slug: "art-of-cnc-carving",
    excerpt: "How state-of-the-art machinery and traditional hand-finishing combine to create impossible designs.",
    content: [
      "There has long been a debate in the woodworking community: does automation strip the soul from the craft? Our answer is a resounding no. When used as a tool rather than a replacement, CNC machinery elevates the artisan.",
      "Our parametric series, for instance, requires mathematical precision down to the millimeter to create its flowing, wave-like optical illusions. Achieving this by hand would take months for a single panel, making it inaccessible even in luxury markets.",
      "However, the machine only does half the work. Once the CNC routing is complete, our master craftsmen take over. Every ridge is hand-sanded, every groove is inspected, and the final stains are rubbed in by hand.",
      "This synthesis of millimeter-perfect engineering and human touch is what defines modern luxury. It is perfection, given a heartbeat."
    ],
    author: "Marcus Chen",
    date: "September 28, 2026",
    readTime: "6 min read",
    category: "Craftsmanship",
    coverImage: "/sun_door_cnc.png",
  },
  {
    id: "3",
    title: "Designing for Impact: The Pivot Door Revolution",
    slug: "pivot-door-revolution",
    excerpt: "Exploring the engineering and aesthetic impact of oversized pivot doors in contemporary homes.",
    content: [
      "The traditional hinged door is functional, but it is rarely dramatic. Enter the pivot door. By shifting the axis of rotation away from the wall, a pivot door fundamentally changes the physics and the feel of an entrance.",
      "Pivot hardware allows for doors of massive scale—sometimes exceeding 10 feet in height and 5 feet in width—to swing open with the gentle push of a single finger. The weight of the solid wood is seamlessly managed by the floor and ceiling mounts.",
      "Aesthetically, a pivot door is a statement of grandeur. It eliminates the need for bulky side frames, allowing the door to sit flush within its opening, creating a minimalist, unbroken plane when closed.",
      "For architects, it offers total freedom. Whether clad in dark Walnut or bright American Oak, the pivot door is the ultimate architectural handshake."
    ],
    author: "Sarah Jenkins",
    date: "September 15, 2026",
    readTime: "5 min read",
    category: "Design Trends",
    coverImage: "/contemporary_door.png",
  },
  {
    id: "4",
    title: "Sustainable Mastery: Sourcing Ethical Timber",
    slug: "sustainable-mastery",
    excerpt: "Our commitment to ensuring that our luxury creations leave a positive footprint on the planet.",
    content: [
      "True luxury cannot come at the expense of our planet's future. At Milan Wood, we believe that the privilege of working with nature's most beautiful materials comes with the profound responsibility of protecting them.",
      "Every piece of timber that enters our facility is rigorously vetted. We work exclusively with certified sustainable forests and utilize reclaimed wood whenever structurally viable.",
      "But sustainability goes beyond sourcing. It is also about longevity. A mass-produced door might need replacing in 10 years, contributing to landfills. A Milan Wood door is engineered for generations. The most sustainable product is the one you only have to buy once.",
      "By investing in generational durability and ethical sourcing, we ensure that our craft respects the earth that provides for it."
    ],
    author: "Elena Rossi",
    date: "August 30, 2026",
    readTime: "3 min read",
    category: "Sustainability",
    coverImage: "/door_cat_4.png",
  }
];
