"use client";
import Link from "next/link";
import Button from "../button/button";
import styles from "./productCard.module.css";
import { ProductCardProps } from "./productCard.types";

export default function ProductCard({
  id,
  categoryId,
  name,
  price,
  rating,
  discount,
  addToCart,
}: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : null;

  return (
    <Link href={`/products/${categoryId}/${id}`} className={styles.productCard}>
      <div className={styles.productImage}>
        {discount && <span className={styles.dealBadge}>-{discount}%</span>}
      </div>
      <h3>{name}</h3>
      {discountedPrice ? (
        <p>
          <span className={styles.originalPrice}>${price.toFixed(2)}</span>{" "}
          <span className={styles.salePrice}>
            ${discountedPrice.toFixed(2)}
          </span>
        </p>
      ) : (
        <p>${price.toFixed(2)}</p>
      )}
      <div className={styles.productInfo}>
        <p>⭐ {rating}</p>
        <Button
          variant="solid"
          sizes="sm"
          onClick={(e) => {
            e.preventDefault();
            addToCart?.();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </Link>
  );
}
