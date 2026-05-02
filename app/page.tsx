import Button from "./components/button/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Welcome to My E-Commerce Store</h1>
        <p>Discover amazing products at unbeatable prices!</p>
        <div className={styles.buttons}>
          <Button href="/products">Shop Now</Button>
          <Button variant="outline" href="/about">
            Read More
          </Button>
        </div>
      </div>
    </main>
  );
}
