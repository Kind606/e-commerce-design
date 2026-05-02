import Link from "next/link";
import styles from "./productCard.module.css";
import { ProductCardProps } from "./productCard.types";

export default function ProductCard({
  id,
  categoryId,
  name,
  price,
  rating,
}: ProductCardProps) {
  return (
    <Link href={`/products/${categoryId}/${id}`} className={styles.productCard}>
      <div className={styles.productImage} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <p>⭐ {rating}</p>
    </Link>
  );
}
