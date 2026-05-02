import Link from "next/link";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import ProductCard from "../components/productCard/productCard";
import ProductList from "../components/productList/productList";
import { catagorys, products } from "../mockedData";
import styles from "./products.module.css";

export default function ProductsPage() {
  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <div className={styles.intro}>
        <h1>Products Page</h1>
        <p>Here you can browse our amazing products!</p>
      </div>
      <div className={styles.catagorySection}>
        <h2>Categories</h2>
        <div className={styles.catagoryContainer}>
          {catagorys.map((catagory) => (
            <Link
              href={`/products/${catagory.id}`}
              key={catagory.id}
              className={styles.catagoryCard}
            >
              <h3>{catagory.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.favoritesSection}>
        <h2>Top rated Products</h2>
        <div className={styles.productContainer}>
          {[...products]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>
      <div className={styles.allProducts}>
        <h2>All Products</h2>
        <ProductList products={products} />
      </div>
    </main>
  );
}
