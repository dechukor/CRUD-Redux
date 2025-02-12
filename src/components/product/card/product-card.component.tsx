import { memo, FC } from "react";
import { ProductModel } from "../../../types/product.model";
import {
  CardContainer,
  DescriptionContainer,
  TitleCard,
  DescriptionCard,
  PriceCard,
  ImageContainer,
  ImageCard,
} from "./product-card.module";

type ProductCardProps = ProductModel;
export const ProductCard: FC<ProductCardProps> = memo(
  ({ ...props }: ProductCardProps) => {
    return (
      <CardContainer>
        <ImageContainer>
          <ImageCard src={props.image} alt={props.title} />
        </ImageContainer>
        <DescriptionContainer>
          <TitleCard>{props.title}</TitleCard>
          <DescriptionCard>{props.description}</DescriptionCard>
        </DescriptionContainer>
        <PriceCard>{props.price}$</PriceCard>
      </CardContainer>
    );
  }
);
