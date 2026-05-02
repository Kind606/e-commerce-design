"use client";
import { useState } from "react";
import ProductCard from "../productCard/productCard";
import { ProductCardProps } from "../productCard/productCard.types";
import styles from "./productList.module.css";

const PAGE_SIZE = 10;

interface ProductListProps {
  products: ProductCardProps[];
}

export default function ProductList({ products }: ProductListProps) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const remaining = products.length - visible;

  return (
    <div className={styles.wrapper}>
      <div className={styles.productContainer}>
        {products.slice(0, visible).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {remaining > 0 && (
        <button
          className={styles.showMore}
          onClick={() => setVisible((v) => v + PAGE_SIZE)}
        >
          Show {Math.min(remaining, PAGE_SIZE)} more
        </button>
      )}
    </div>
  );
}
