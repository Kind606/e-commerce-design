"use client";
import { catagorys, products } from "@/app/mockedData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumbs.module.css";

function labelForSegment(segment: string): string {
  const category = catagorys.find((c) => c.id === Number(segment));
  if (category) return category.name;
  const product = products.find((p) => p.id === Number(segment));
  if (product) return product.name;
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((segment, i) => ({
      label: labelForSegment(segment),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={crumb.href}>
            {i > 0 && <span className={styles.separator}>/</span>}
            {isLast ? (
              <span className={styles.current}>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className={styles.link}>
                {crumb.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
