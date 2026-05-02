import { useState } from "react";
import { FilterState } from "../filterPanel/filterPanel.types";
import { ProductCardProps } from "../productCard/productCard.types";

const PAGE_SIZE = 10;

export const DEFAULT_FILTERS: FilterState = {
  minPrice: 0,
  maxPrice: 500,
  minRating: 0,
  dealsOnly: false,
};

export function useProductList(products: ProductCardProps[]) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const filtered = products.filter(
    (p) =>
      p.price >= filters.minPrice &&
      p.price <= filters.maxPrice &&
      p.rating >= filters.minRating &&
      (!filters.dealsOnly || !!p.deals),
  );

  const remaining = filtered.length - visible;
  const visibleProducts = filtered.slice(0, visible);

  const isFiltered =
    filters.minPrice !== DEFAULT_FILTERS.minPrice ||
    filters.maxPrice !== DEFAULT_FILTERS.maxPrice ||
    filters.minRating !== DEFAULT_FILTERS.minRating ||
    filters.dealsOnly;

  function applyFilters(next: FilterState) {
    setFilters(next);
    setVisible(PAGE_SIZE);
  }

  function showMore() {
    setVisible((v) => v + PAGE_SIZE);
  }

  return {
    filters,
    filterOpen,
    filtered,
    visibleProducts,
    remaining,
    isFiltered,
    applyFilters,
    showMore,
    openFilter: () => setFilterOpen(true),
    closeFilter: () => setFilterOpen(false),
    PAGE_SIZE,
  };
}
