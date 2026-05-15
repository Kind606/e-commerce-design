import { CartItem } from "@/app/context/cartContext";
import styles from "./cartRow.module.css";

interface CartRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export default function CartRow({
  item,
  onUpdateQuantity,
  onRemove,
}: CartRowProps) {
  return (
    <li className={styles.item}>
      <div className={styles.itemInfo}>
        <span className={styles.itemName}>{item.name}</span>
        <div className={styles.itemPrices}>
          {item.originalPrice !== item.price && (
            <span className={styles.originalPrice}>
              ${item.originalPrice.toFixed(2)}
            </span>
          )}
          <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div className={styles.itemControls}>
        <button
          className={styles.qtyButton}
          onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
          disabled={item.quantity <= 1}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className={styles.qty}>{item.quantity}</span>
        <button
          className={styles.qtyButton}
          onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
        <button
          className={styles.removeButton}
          onClick={() => onRemove(item.productId)}
          aria-label={`Remove ${item.name}`}
        >
          ✕
        </button>
      </div>
    </li>
  );
}
