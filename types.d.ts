declare global {
  type Alignment = "left" | "right" | "center" | "justify";

  type InputChangeEvent = FormEvent<HTMLInputElement | HTMLTextAreaElement>;

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
