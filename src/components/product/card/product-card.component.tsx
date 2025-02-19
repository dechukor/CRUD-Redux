import { memo, FC } from "react";
import { ProductModel } from "../../../types/product.model";
import { maxLenghtDescription } from "./product-card.constants";
import {
  CardContainer,
  DescriptionContainer,
  TitleCard,
  PriceCard,
  ImageContainer,
  ImageCard,
} from "./product-card.module";
import { Description } from "../description";

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
          <Description
            text={props.description}
            maxLenght={maxLenghtDescription}
          >
            {}
          </Description>
        </DescriptionContainer>
        <PriceCard>{props.price}$</PriceCard>
      </CardContainer>
    );
  }
);
