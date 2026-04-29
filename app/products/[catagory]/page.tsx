import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { catagorys, products } from "../page";
import styles from "./catagory.module.css";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ catagory: string }>;
}) {
  const { catagory } = await params;
  const categoryId = Number(catagory);
  const category = catagorys.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.categoryId === categoryId);

  return (
    <div className={styles.CategoryPage}>
      <Breadcrumbs />
      <h1>{category ? category.name : "Category not found"}</h1>
      <div className={styles.productList}>
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${catagory}/${product.id}`}
            className={styles.productCard}
          >
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
