import { memo, FC, useState } from "react";
import { ProductModel } from "../../../types/product.model";
import { ListContainer } from "./product-list.module";
import { ProductCard } from "../card";
import { ProductCreateButton } from "../create-button";
import { Modal } from "../modal";

type ProductListProps = {
  products: ProductModel[];
};
export const ProductList: FC<ProductListProps> = memo(
  ({ products }: ProductListProps) => {
    const [visibleModalCreate, setVisibleModalCreate] = useState(false);

    return (
      <>
        <ListContainer>
          {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
          <ProductCreateButton
            title="+"
            onOpen={() => setVisibleModalCreate(true)}
          />
        </ListContainer>
        <Modal
          visible={visibleModalCreate}
          onClose={() => setVisibleModalCreate(false)}
          children={<p color="red">Children component</p>}
        />
      </>
    );
  }
);
