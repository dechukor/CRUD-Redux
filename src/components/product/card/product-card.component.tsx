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
  PriceBasketContainer,
} from "./product-card.module";
import { Description } from "../description";
import noPhotoImage from "../../../assets/images/noPhoto.png";
import { ButtonBasket } from "../../button-basket";
import { addBasketApi, removeBasketApi } from "../../../services";
import { useSelector } from "react-redux";
import { selectBasket } from "../../../store/product";
import { CURRENCY_UNIT } from "../../../constants/price.constants";

type ProductCardProps = ProductModel;
export const ProductCard: FC<ProductCardProps> = memo(
  ({ ...props }: ProductCardProps) => {
    const basket = useSelector(selectBasket);
    const inBasket = basket.some((item) => item.id === props.id);

    const handleBasketClick = () => {
      const idProduct = {
        id: props.id,
      };
      if (!inBasket) {
        addBasketApi(idProduct);
      } else {
        removeBasketApi(idProduct);
      }
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
          <PriceCard>
            {CURRENCY_UNIT}
            {props.price}
          </PriceCard>
          <ButtonBasket
            fill={inBasket}
            productInBasket={inBasket}
            onClick={handleBasketClick}
          />
        </PriceBasketContainer>
      </CardContainer>
    );
  }
);
