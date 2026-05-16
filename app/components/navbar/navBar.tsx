"use client";
import { useCart } from "@/app/context/cartContext";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../button/button";
import ShoppingCartIcon from "../icons/shoppingCart";
import styles from "./navBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { isLoaded, isSignedIn } = useUser();
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    const rafId = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div
        className={`${styles.navbar} ${!isHome || scrolled ? styles.navbarSolid : ""}`}
      >
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
          <Button
            variant="ghost"
            sizes="md"
            className={styles.cartButton}
            onClick={openCart}
            aria-label={`Open cart, ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
          >
            <span className={styles.cartIcon}>
              <ShoppingCartIcon />
            </span>
            {itemCount > 0 && (
              <span className={styles.cartBadge}>
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Button>
          {isLoaded &&
            (isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <Button variant="solid" sizes="md">
                  Sign In
                </Button>
              </SignInButton>
            ))}
        </div>
      </div>
    </div>
  );
}
