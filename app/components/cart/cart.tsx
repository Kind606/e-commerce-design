"use client";
import { useCart } from "@/app/context/cartContext";
import { SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Button from "../button/button";
import styles from "./cart.module.css";
import CartRow from "./cartRow/cartRow";

export default function Cart() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
  } = useCart();
  const { isSignedIn } = useUser();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart</h2>
          <button
            className={styles.closeButton}
            onClick={closeCart}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          <div className={styles.body}>
            <ul className={styles.list}>
              {items.map((item) => (
                <CartRow
                  key={item.productId}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Total</span>
                <span className={styles.totalAmount}>${total.toFixed(2)}</span>
              </div>
              <div className={styles.actions}>
                <Button variant="ghost" sizes="sm" onClick={clearCart}>
                  Clear cart
                </Button>
                {isSignedIn ? (
                  <Link href="/checkout" onClick={closeCart}>
                    <Button variant="solid" sizes="md">
                      Checkout
                    </Button>
                  </Link>
                ) : (
                  <SignInButton mode="modal">
                    <Button variant="solid" sizes="md">
                      Sign in to Checkout
                    </Button>
                  </SignInButton>
                )}
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
