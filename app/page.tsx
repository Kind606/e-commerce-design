import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Welcome to My E-Commerce Store</h1>
        <p>Discover amazing products at unbeatable prices!</p>
        <div className={styles.buttons}>
          <Link className={styles.shopButton} href="/products">
            <p>Shop Now</p>
          </Link>
          <Link className={styles.readMoreButton} href="/about">
            <p>Read More</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
