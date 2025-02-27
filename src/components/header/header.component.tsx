import { FC } from "react";
import {
  HeaderContainer,
  HeaderLogo,
  ButtonContainer,
  BasketCounter,
} from "./header.module";
import imageLogo from "../../../src/assets/images/logo.png";
import {
  BasketEmptyIcon,
  BasketFillIcon,
  ButtonBasket,
} from "../buttons/button-basket";
import { useSelector } from "react-redux";
import { selectBasket } from "../../store/product";

type HeaderProps = {
  onOpenBasket: () => void;
};

export const Header: FC<HeaderProps> = ({ onOpenBasket }: HeaderProps) => {
  const basket = useSelector(selectBasket);
  const counterInBasket = basket.length;

  return (
    <HeaderContainer>
      <HeaderLogo src={imageLogo} alt="Product shop logo" />
      <ButtonContainer>
        <ButtonBasket onClick={onOpenBasket} innerClassName="buttonBasketText">
          {counterInBasket ? <BasketFillIcon /> : <BasketEmptyIcon />}
        </ButtonBasket>
        <BasketCounter>{counterInBasket}</BasketCounter>
      </ButtonContainer>
    </HeaderContainer>
  );
};
