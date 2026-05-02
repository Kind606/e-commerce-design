import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import ProductList from "@/app/components/productList/productList";
import { catagorys, products } from "@/app/mockedData";
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
      <h2>{category ? category.name : "Category not found"}</h2>
      <ProductList products={categoryProducts} />
    </div>
  );
}
