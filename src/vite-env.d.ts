/// <reference types="vite/client" />

declare module "swiper/css";
declare module "swiper/css/pagination";

declare module "aos" {
  interface AosOptions {
    duration?: number;
    delay?: number;
    disable?: string | boolean;
    once?: boolean;
  }
  const Aos: {
    init(options?: AosOptions): void;
    refresh(): void;
  };
  export default Aos;
}

declare module "lightgallery" {
  interface LightGalleryOptions {
    selector?: string;
    subHtmlSelectorRelative?: boolean;
    thumbnail?: boolean;
    mousewheel?: boolean;
  }
  interface LightGalleryInstance {
    destroy(): void;
  }
  export default function lightGallery(
    el: HTMLElement,
    options?: LightGalleryOptions
  ): LightGalleryInstance;
}
