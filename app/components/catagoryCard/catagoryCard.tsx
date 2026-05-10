import { Category } from "@/app/types";
import Link from "next/link";
import styles from "./catagoryCard.module.css";

export default function CatagoryCard({ name, id }: Category) {
  return (
    <Link href={`/products/${id}`} key={id} className={styles.catagoryCard}>
      <h3>{name}</h3>
    </Link>
  );
}
