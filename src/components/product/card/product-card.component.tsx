import React, { memo, FC } from "react";
import { ProductModel } from "../../../product.model";

type ProductCardProps = ProductModel;
export const ProductCard: FC<ProductCardProps> = memo(
  ({ ...props }: ProductCardProps) => {
    return (
      <div>
        <p>{props.title}</p>
        <img src={props.image} alt={props.title} width={200} height={200} />
        <p>{props.price}</p>
        <p>{props.description}</p>
      </div>
    );
  }
);
