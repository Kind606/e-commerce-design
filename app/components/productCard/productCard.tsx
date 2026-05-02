import Link from "next/link";
import styles from "./productCard.module.css";
import { ProductCardProps } from "./productCard.types";

export default function ProductCard({
  id,
  categoryId,
  name,
  price,
  rating,
  discount,
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
      <p>⭐ {rating}</p>
    </Link>
  );
}
