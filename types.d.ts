declare global {
  type Alignment = "left" | "right" | "center" | "justify";

  type InputChangeEvent = FormEvent<HTMLInputElement | HTMLTextAreaElement>;

  interface Image {
    src: string;
    blurUrl: string;
    alt?: string;
  }

  // Storefront related types
  type Currency = "USD" | "LKR" | "INR";

  interface StorefrontNode {
    id: string;
    slug: string;
    name: string;
    description: string;
    image: Image;
  }

  interface Category extends StorefrontNode {
    parent?: Category;
    child?: Category;
    products?: Product[];
  }

  interface Collection extends StorefrontNode {
    products?: Product[];
  }

  interface Product extends StorefrontNode {
    pricing: {
      onSale: boolean;
      currency: Currency;
      price: number;
      discount: number;
    };
    size: string;
    otherImages: Image[];
    category?: Category;
    new: boolean;
    bestseller: boolean;
    usage?: string;
    ingredients?: string[];
  }

  type AddressType = "Billing" | "Shipping";

  interface Address {
    id: string;
    type: AddressType;
    firstName: string;
    lastName: string;
    company?: string;
    streetAddressOne: string;
    streetAddressTwo?: string;
    city: string;
    postalCode: number;
    country: string;
  }

  type PaymentMethodTypes =
    | "Card"
    | "Store Pickup with Cash"
    | "Cash on Delivery";

  interface PaymentCard {
    network: "VISA" | "MASTER";
    cardNumber: string;
    expDate: string;
  }

  interface User {
    id: string;
    email: string;
    firstName: string;
    lastName?: string;
    dateJoined: Date;
    isActive: boolean;
    address: {
      default: string;
      billing: Address;
      shipping: Address;
    };
    paymentMethods: {
      default: PaymentCard;
      other: PaymentCard[];
    };
  }
}

export {};
