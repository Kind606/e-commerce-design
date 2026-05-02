


export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  rating: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}