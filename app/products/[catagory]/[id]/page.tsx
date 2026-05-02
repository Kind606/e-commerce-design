import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { catagorys, products } from "@/app/mockedData";
import styles from "./productPage.module.css";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ catagory: string; id: string }>;
}) {
  const { catagory, id } = await params;
  const product = products.find((p) => p.id === Number(id));
  const category = catagorys.find((c) => c.id === Number(catagory));

  return (
    <div className={styles.ProductPage}>
      <Breadcrumbs />
      <h1>{product ? product.name : "Product not found"}</h1>
      {product && (
        <>
          <p>Category: {category?.name}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
