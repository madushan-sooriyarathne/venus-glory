declare global {
  type Alignment = "left" | "right" | "center" | "justify";

  interface Image {
    src: string;
    blurUrl: string;
    alt?: string;
  }
}

export {};
