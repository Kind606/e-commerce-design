"use client";
import { useState } from "react";
import Button from "../button/button";
import styles from "./filterPanel.module.css";
import {
  createDefaultFilters,
  FilterPanelProps,
  FilterState,
} from "./filterPanel.types";

export default function FilterPanel({
  filters,
  config,
  onApply,
  onClose,
}: FilterPanelProps) {
  const [local, setLocal] = useState<FilterState>(filters);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Filters</h2>
          <Button variant="ghost" onClick={onClose}>
            ✕
          </Button>
        </div>

        <div className={styles.group}>
          <label>
            Min price: <strong>${local.minPrice}</strong>
          </label>
          <input
            type="range"
            min={config.minPrice}
            max={config.maxPrice}
            step={config.priceStep}
            value={local.minPrice}
            onChange={(e) =>
              setLocal((f) => ({ ...f, minPrice: Number(e.target.value) }))
            }
          />
        </div>

        <div className={styles.group}>
          <label>
            Max price: <strong>${local.maxPrice}</strong>
          </label>
          <input
            type="range"
            min={config.minPrice}
            max={config.maxPrice}
            step={config.priceStep}
            value={local.maxPrice}
            onChange={(e) =>
              setLocal((f) => ({ ...f, maxPrice: Number(e.target.value) }))
            }
          />
        </div>

        <div className={styles.group}>
          <label>
            Min rating: <strong>{local.minRating} ⭐</strong>
          </label>
          <input
            type="range"
            min={config.minRating}
            max={config.maxRating}
            step={config.ratingStep}
            value={local.minRating}
            onChange={(e) =>
              setLocal((f) => ({ ...f, minRating: Number(e.target.value) }))
            }
          />
        </div>

        <div className={styles.group}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={local.dealsOnly}
              onChange={(e) =>
                setLocal((f) => ({ ...f, dealsOnly: e.target.checked }))
              }
            />
            Deals only
          </label>
        </div>

        <div className={styles.actions}>
          <Button
            variant="outline"
            onClick={() => {
              const defaultFilters = createDefaultFilters(config);
              setLocal(defaultFilters);
              onApply(defaultFilters);
              onClose();
            }}
          >
            Reset
          </Button>
          <Button
            variant="solid"
            onClick={() => {
              onApply(local);
              onClose();
            }}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
