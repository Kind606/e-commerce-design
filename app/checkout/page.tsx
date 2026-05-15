"use client";
import { useCart } from "@/app/context/cartContext";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main className={styles.page}>
        <h1>Checkout</h1>
        <p className={styles.empty}>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <h1>Checkout</h1>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.productId} className={styles.item}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemQty}>× {item.quantity}</span>
            <span className={styles.itemPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.totalRow}>
        <span>Total</span>
        <span className={styles.totalAmount}>${total.toFixed(2)}</span>
      </div>

      {/* TODO: Replace button below with real payment/order logic when DB is ready */}
      <button className={styles.placeOrderButton} onClick={clearCart}>
        Place Order
      </button>
    </main>
  );
}
