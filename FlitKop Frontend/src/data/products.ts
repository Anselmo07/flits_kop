import img1 from "../assets/feature1.jpeg";
import img2 from "../assets/feature2.jpeg";
import img3 from "../assets/feature3.jpeg";

export type Product = {
  id: number;
  title: string;
  category: string;
  size: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Serenity",
    category: "Abstractos",
    size: "50x70 cm",
    image: img1,
  },
  {
    id: 2,
    title: "Minimal Line",
    category: "Minimalistas",
    size: "60x90 cm",
    image: img2,
  },
  {
    id: 3,
    title: "Nature Beige",
    category: "Naturaleza",
    size: "80x120 cm",
    image: img3,
  },
  {
    id: 4,
    title: "Soft Shapes",
    category: "Abstractos",
    size: "50x70 cm",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];