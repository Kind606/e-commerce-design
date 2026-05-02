"use client";
import { useEffect, useRef, useState } from "react";
import Button from "../button/button";
import FilterPanel from "../filterPanel/filterPanel";
import ProductCard from "../productCard/productCard";
import { ProductCardProps } from "../productCard/productCard.types";
import styles from "./productList.module.css";
import { useProductList } from "./useProductList";

interface ProductListProps {
  products: ProductCardProps[];
}

export default function ProductList({ products }: ProductListProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { rootMargin: "-85px 0px 0px 0px", threshold: 1 },
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const {
    filters,
    filterOpen,
    filtered,
    visibleProducts,
    remaining,
    isFiltered,
    applyFilters,
    showMore,
    openFilter,
    closeFilter,
    PAGE_SIZE,
  } = useProductList(products);

  return (
    <div className={styles.wrapper}>
      <div ref={sentinelRef} className={styles.sentinel} />
      <div
        className={`${styles.toolbar} ${isStuck ? styles.toolbarStuck : ""}`}
      >
        <Button variant={isFiltered ? "solid" : "outline"} onClick={openFilter}>
          {isFiltered ? "Filters applied ✕" : "Filter"}
        </Button>
        <span className={styles.count}>
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {filterOpen && (
        <FilterPanel
          filters={filters}
          onApply={applyFilters}
          onClose={closeFilter}
        />
      )}

      <div className={styles.productContainer}>
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>No products match your filters.</p>
      )}

      {remaining > 0 && (
        <Button variant="outline" onClick={showMore}>
          Show {Math.min(remaining, PAGE_SIZE)} more
        </Button>
      )}
    </div>
  );
}
