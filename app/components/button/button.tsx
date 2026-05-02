import Link from "next/link";
import styles from "./button.module.css";
import { ButtonProps } from "./button.types";

export default function Button({
  variant = "solid",
  sizes = "md",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const cls = `${styles.base} ${styles[variant]} ${styles[sizes]} ${className}`;
  if (href && !props.onClick) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props} onClick={props.onClick}>
      {children}
    </button>
  );
}
