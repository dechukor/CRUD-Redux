import { FC } from "react";
import { ProductModel } from "../../../types";
import noPhotoImage from "../../../assets/images/noPhoto.png";
import {
  CardContainer,
  ImageCard,
  TitleCard,
  PriceCard,
} from "./basket.card.module";
import { ButtonRemove } from "../../button-remove";
import { removeBasketApi } from "../../../services";
import { CURRENCY_UNIT } from "../../../constants/price.constants";

type BasketCardProps = {
  product: ProductModel;
};

export const BasketCard: FC<BasketCardProps> = ({
  product,
}: BasketCardProps) => {
  const handleClickRemove = () => {
    removeBasketApi({ id: product.id });
  };

  return (
    <CardContainer>
      <ButtonRemove onClick={handleClickRemove} />
      <ImageCard
        alt={product.title}
        src={product.image ? product.image : noPhotoImage}
      />
      <TitleCard>{product.title}</TitleCard>
      <PriceCard>
        {CURRENCY_UNIT}
        {product.price}
      </PriceCard>
    </CardContainer>
  );
};
