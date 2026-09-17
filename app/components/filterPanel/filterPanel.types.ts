export interface FilterState {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  dealsOnly: boolean;
}

export interface FilterConfig {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  maxRating: number;
  priceStep: number;
  ratingStep: number;
}

export function createDefaultFilters(config: FilterConfig): FilterState {
  return {
    minPrice: config.minPrice,
    maxPrice: config.maxPrice,
    minRating: config.minRating,
    dealsOnly: false,
  };
}

export interface FilterPanelProps {
  filters: FilterState;
  config: FilterConfig;
  onApply: (filters: FilterState) => void;
  onClose: () => void;
}
