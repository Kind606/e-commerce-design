import Link from "next/link";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  href?: string;
}

export default function Button({
  variant = "solid",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const cls = `${styles.base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
