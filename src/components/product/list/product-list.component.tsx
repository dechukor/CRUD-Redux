import { memo, FC } from "react";
import { ProductModel } from "../../../product.model";
import { ListContainer } from "./product-list.module";
import { ProductCard } from "../card";

type ProductListProps = {
  productListData: ProductModel[];
};
export const ProductList: FC<ProductListProps> = memo(
  ({ productListData }: ProductListProps) => {
    console.log(productListData);

    return (
      <ListContainer>
        {productListData.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </ListContainer>
    );
  }
);
