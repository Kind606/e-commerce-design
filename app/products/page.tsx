import Link from "next/link";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import styles from "./products.module.css";

export const catagorys = [
  {
    id: 1,
    name: "Electronics",
    image: "https://source.unsplash.com/random/400x400?electronics",
  },
  {
    id: 2,
    name: "Clothing",
    image: "https://source.unsplash.com/random/400x400?clothing",
  },
  {
    id: 3,
    name: "Home Decor",
    image: "https://source.unsplash.com/random/400x400?home-decor",
  },
];

export const products = [
  { id: 1, categoryId: 1, name: "Wireless Headphones", price: 79.99 },
  { id: 2, categoryId: 1, name: "Bluetooth Speaker", price: 49.99 },
  { id: 3, categoryId: 1, name: "USB-C Hub", price: 29.99 },
  { id: 4, categoryId: 2, name: "Classic T-Shirt", price: 19.99 },
  { id: 5, categoryId: 2, name: "Denim Jacket", price: 59.99 },
  { id: 6, categoryId: 2, name: "Sneakers", price: 89.99 },
  { id: 7, categoryId: 3, name: "Scented Candle", price: 14.99 },
  { id: 8, categoryId: 3, name: "Wall Clock", price: 34.99 },
  { id: 9, categoryId: 3, name: "Throw Pillow", price: 24.99 },
];

export default function ProductsPage() {
  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <h1>Products Page</h1>
      <p>Here you can browse our amazing products!</p>
      <div className={styles.catagorySection}>
        <h2>Categories</h2>
        <div className={styles.catagoryContainer}>
          {catagorys.map((catagory) => (
            <Link
              href={`/products/${catagory.id}`}
              key={catagory.id}
              className={styles.catagoryCard}
            >
              <img
                src={catagory.image}
                alt={catagory.name}
                className={styles.catagoryImage}
              />
              <h3>{catagory.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
