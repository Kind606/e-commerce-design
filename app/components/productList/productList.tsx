"use client";
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
      <div className={styles.toolbar}>
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
