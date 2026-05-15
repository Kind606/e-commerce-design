"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div className={styles.navbarContainer}>
      <div className={`${styles.navbar} ${isHome ? "" : styles.navbarSolid}`}>
        <Link href="/" className={styles.logo}>
          <h1>My</h1>
          <span>E-Commerce</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.authSection}>
          {isLoaded &&
            (isSignedIn ? (
              <>
                <Link href="/checkout" className={styles.checkoutLink}>
                  Checkout
                </Link>
                <UserButton />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className={styles.signInButton}>Sign In</button>
              </SignInButton>
            ))}
        </div>
      </div>
    </div>
  );
}
