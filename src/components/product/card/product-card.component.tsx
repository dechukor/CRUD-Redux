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
  SettingsContainer,
} from "./product-card.module";
import { Description } from "../description";
import noPhotoImage from "../../../assets/images/noPhoto.png";
import {
  BasketCheckMarkIcon,
  BasketPlusIcon,
  ButtonBasket,
} from "../../button-basket";
import {
  addBasketApi,
  removeBasketApi,
  removeProductApi,
} from "../../../services";
import { useSelector } from "react-redux";
import { selectBasket } from "../../../store/product";
import { CURRENCY_UNIT } from "../../../constants/price.constants";
import { ButtonEdit } from "../../button-edit";
import { ProductEditContainer } from "../edit-container";
import { ButtonRemove, RemoveIcon } from "../../button-remove";

type ProductCardProps = ProductModel;
export const ProductCard: FC<ProductCardProps> = memo(
  ({ ...props }: ProductCardProps) => {
    const basket = useSelector(selectBasket);
    const [visibleEditForm, setVisibleEditForm] = useState(false);
    const inBasket = basket.some((item) => item.id === props.id);

    const handleBasketClick = () => {
      if (!inBasket) {
        addBasketApi(props.id);
      } else {
        removeBasketApi(props.id);
      }
    };

    const handleRemoveClick = () => {
      if (
        confirm(
          `Are you sure you go to remove the product of the "${props.title}" from the list?`
        )
      ) {
        removeBasketApi(props.id);
        removeProductApi(props.id);
      }
    };

    return (
      <CardContainer>
        {visibleEditForm && (
          <ProductEditContainer
            product={props}
            visible={visibleEditForm}
            setVisible={setVisibleEditForm}
          />
        )}
        <SettingsContainer>
          <ButtonEdit onClick={() => setVisibleEditForm(true)} />
          {props.creatorName === "user" && (
            <ButtonRemove onClick={handleRemoveClick}>
              <RemoveIcon />
            </ButtonRemove>
          )}
        </SettingsContainer>
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
          <ButtonBasket productInBasket={inBasket} onClick={handleBasketClick}>
            {inBasket ? <BasketCheckMarkIcon /> : <BasketPlusIcon />}
          </ButtonBasket>
        </PriceBasketContainer>
      </CardContainer>
    );
  }
);
