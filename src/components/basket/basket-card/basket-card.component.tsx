import { FC } from "react";
import { ProductModel } from "../../../types";
import noPhotoImage from "../../../assets/images/noPhoto.png";
import {
  CardContainer,
  ImageCard,
  TitleCard,
  PriceCard,
  SettingsContainer,
} from "./basket.card.module";
import { ButtonRemove } from "../../buttons/button-remove";
import { removeBasketApi } from "../../../services";
import { CURRENCY_UNIT } from "../../../constants/price.constants";
import { BasketMinusIcon } from "../../buttons/button-basket";

type BasketCardProps = {
  product: ProductModel;
};

export const BasketCard: FC<BasketCardProps> = ({
  product,
}: BasketCardProps) => {
  const handleClickRemove = () => {
    if (
      confirm(
        `Are you sure you go to remove the product of the "${product.title}" from the basket?`
      )
    ) {
      removeBasketApi(product.id);
    }
  };

  return (
    <CardContainer>
      <SettingsContainer>
        <ButtonRemove onClick={handleClickRemove}>
          <BasketMinusIcon size="1.5rem" />
        </ButtonRemove>
      </SettingsContainer>
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
