const images = import.meta.glob("@/assets/images/client/client-logo-*.png", { eager: true });
export const clientLogos = Object.keys(images);