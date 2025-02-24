import { memo, FC, useState } from "react";
import { ProductModel } from "../../../types/product.model";
import { maxLenghtDescription } from "./product-card.constants";
import {
  CardContainer,
  DescriptionContainer,
  TitleCard,
  PriceCard,
  ImageContainer,
  ImageCard,
  PriceBasketContainer,
} from "./product-card.module";
import { Description } from "../description";
import noPhotoImage from "../../../assets/images/noPhoto.png";
import { ButtonBasket } from "../../button-basket";

type ProductCardProps = ProductModel;
export const ProductCard: FC<ProductCardProps> = memo(
  ({ ...props }: ProductCardProps) => {
    const [inBasket, setInBasket] = useState(false);
    const handleBasketClick = () => {
      setInBasket((state) => !state);
    };
    return (
      <CardContainer>
        <ImageContainer>
          <ImageCard
            src={props.image ? props.image : noPhotoImage}
            alt={props.title}
          />
        </ImageContainer>
        <DescriptionContainer>
          <TitleCard>{props.title}</TitleCard>
          <Description
            text={props.description}
            maxLenght={maxLenghtDescription}
          />
        </DescriptionContainer>
        <PriceBasketContainer>
          <PriceCard>{props.price}$</PriceCard>
          <ButtonBasket
            productInBasket={inBasket}
            onClick={handleBasketClick}
          />
        </PriceBasketContainer>
      </CardContainer>
    );
  }
);
