import { memo, FC } from "react";
import { ProductModel } from "../../../product.model";
import {
  CardContainer,
  DescriptionContainer,
  TitleCard,
  DescriptionCard,
  PriceCard,
  ImageCard,
} from "./product-card.module";

type ProductCardProps = ProductModel;
export const ProductCard: FC<ProductCardProps> = memo(
  ({ ...props }: ProductCardProps) => {
    return (
      <CardContainer>
        <ImageCard src={props.image} alt={props.title} />
        <DescriptionContainer>
          <TitleCard>{props.title}</TitleCard>
          <DescriptionCard>{props.description}</DescriptionCard>
        </DescriptionContainer>
        <PriceCard>{props.price}$</PriceCard>
      </CardContainer>
    );
  }
);
