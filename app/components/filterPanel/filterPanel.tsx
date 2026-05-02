"use client";
import { useState } from "react";
import Button from "../button/button";
import styles from "./filterPanel.module.css";
import { FilterPanelProps, FilterState } from "./filterPanel.types";

const DEFAULT: FilterState = {
  minPrice: 0,
  maxPrice: 500,
  minRating: 0,
  dealsOnly: false,
};

export default function FilterPanel({
  filters,
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
            min={0}
            max={500}
            step={5}
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
            min={0}
            max={500}
            step={5}
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
            min={0}
            max={5}
            step={0.1}
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
              setLocal(DEFAULT);
              onApply(DEFAULT);
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
