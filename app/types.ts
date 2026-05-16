export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  rating: number;
  discount?: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}


export interface CartItem {
  productId: number;
  name: string;
  /** Final price after any discount */
  price: number;
  /** Original price before discount */
  originalPrice: number;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}