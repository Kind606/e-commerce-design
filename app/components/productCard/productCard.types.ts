export interface ProductCardProps {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  rating: number;
  discount?: number;
  addToCart?: () => void;
}
