import { useState } from "react";
import {
  createDefaultFilters,
  FilterConfig,
  FilterState,
} from "../filterPanel/filterPanel.types";
import { ProductCardProps } from "../productCard/productCard.types";

const PAGE_SIZE = 10;

function getFilterConfig(products: ProductCardProps[]): FilterConfig {
  const prices = products.map((product) => product.price);
  const ratings = products.map((product) => product.rating);

  return {
    minPrice: prices.length ? Math.min(...prices) : 0,
    maxPrice: prices.length ? Math.max(...prices) : 0,
    minRating: ratings.length ? Math.min(...ratings) : 0,
    maxRating: ratings.length ? Math.max(...ratings) : 0,
    priceStep: 0.01,
    ratingStep: 0.1,
  };
}

export function useProductList(products: ProductCardProps[]) {
  const config = getFilterConfig(products);
  const defaultFilters = createDefaultFilters(config);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filtered = products.filter(
    (p) =>
      p.price >= filters.minPrice &&
      p.price <= filters.maxPrice &&
      p.rating >= filters.minRating &&
      (!filters.dealsOnly || !!p.discount),
  );

  const remaining = filtered.length - visible;
  const visibleProducts = filtered.slice(0, visible);

  const isFiltered =
    filters.minPrice !== defaultFilters.minPrice ||
    filters.maxPrice !== defaultFilters.maxPrice ||
    filters.minRating !== defaultFilters.minRating ||
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
    config,
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
