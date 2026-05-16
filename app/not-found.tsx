import Link from "next/link";
import Button from "./components/button/button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 – Page Not Found</h1>
      <p>Oh no! The page you are looking for doesn’t exist.</p>
      <span>:(</span>
      <Button variant="outline" sizes="md">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
