"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className={styles.navbarContainer}>
      <div className={`${styles.navbar} ${isHome ? "" : styles.navbarSolid}`}>
        <div className={styles.logo}>
          <h1>My</h1>
          <span>E-Commerce</span>
        </div>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
