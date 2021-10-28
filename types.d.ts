declare global {
  type Alignment = "left" | "right" | "center" | "justify";

  interface Image {
    src: string;
    blurUrl: string;
    alt?: string;
  }

  interface Product {
    id: string;
    name: string;
    price: string;
    size: string;
    image: string;
    otherImages: string[];
    category: string;
    discount: string;
    new: boolean;
    bestseller: boolean;
  }
}

export {};
