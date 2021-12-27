const navLinks = [
  { name: "Home", url: "/" },
  { name: "Shop", url: "/shop" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const categories: Category[] = [
  {
    id: "cat-01",
    slug: "skin-care",
    name: "Skin Care",
    description: "Skin Care products",
    image: { src: "/assets/img/skin-care.jpg", blurUrl: "" },
  },
];

const products: Product[] = [
  {
    id: "01",
    slug: "ulta-gradual-tan-face-drops",
    name: "Ulta: Gradual Tan Face Drops",
    description: `The Ulta Beauty Collection's Gradual Self Tan Face Drops effortlessly delivers a glowing complexion while you sleep. Just add them to your nightly moisturizer for a subtle, healthy glow by morning.

### Features
- Aloe Vera and Green Tea help soothe and hydrate skin
- Mixes well with most moisturizers

### Benefits
- Gradually build a bronze, glowing complexion
- Dermatologist Tested
- Cruelty-free

### Formulated Without
- Parabens
`,
    pricing: {
      onSale: true,
      currency: "LKR",
      discount: 10,
      price: 2699,
    },
    size: "1.0 oz",
    image: {
      src: "/assets/img/products/1.jpg",
      blurUrl: "",
    },
    otherImages: [{ src: "/assets/img/products/2.png", blurUrl: "" }],
    category: categories[0],
    usage: `
1. Wash and dry face prior to use.
2. Mix 2-4 drops with your regular night cream in the palm of your hand.
3. Apply evenly all over face, massaging into hairline and jaw.
4. Wash hands immediately after use.
5. Use nightly to maintain a healthy-looking tan.

Precautions: Do not apply directly to face or to your moisturizer jar. This product must be combined with a moisturizer in your hands.
`,
    ingredients: [
      "Water",
      "Dihydroxyacetone",
      "Dimethyl Isosorbide",
      "SD Alcohol 40-B",
      "Glycerin",
      "Erythrulose",
      "Citric Acid",
      "Xanthan Gum",
      "Potassium Sorbate",
      "Sodium Benzoate",
      "Fragrance",
      "Camellia Oleifera (Green Tea) Leaf Extract",
      "Caramel",
      "Aloe Barbadensis Leaf Juice Powder",
      "Tocopheryl Acetate",
    ],
    new: true,
    bestseller: true,
  },
];

export { navLinks, products };
