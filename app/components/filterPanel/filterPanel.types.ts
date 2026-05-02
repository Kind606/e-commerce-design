export interface FilterState {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  dealsOnly: boolean;
}

export interface FilterPanelProps {
  filters: FilterState;
  onApply: (filters: FilterState) => void;
  onClose: () => void;
}
