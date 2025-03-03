import { memo, FC } from "react";
import { ProductModel } from "../../../types/product.model";
import { ListContainer } from "./product-list.module";
import { ProductCard } from "../card";

type ProductListProps = {
  products: ProductModel[];
};
export const ProductList: FC<ProductListProps> = memo(
  ({ products }: ProductListProps) => {
    return (
      <ListContainer>
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </ListContainer>
    );
  }
);
