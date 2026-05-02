import Link from "next/link";
import styles from "./productCard.module.css";
import { ProductCardProps } from "./productCard.types";

export default function ProductCard({
  id,
  categoryId,
  name,
  price,
  rating,
  deals,
}: ProductCardProps) {
  const discountedPrice = deals ? price * (1 - deals / 100) : null;

  return (
    <Link href={`/products/${categoryId}/${id}`} className={styles.productCard}>
      <div className={styles.productImage}>
        {deals && <span className={styles.dealBadge}>-{deals}%</span>}
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
