import { FC } from "react";
import style from "./button-basket.module.css";
import { BasketIcon } from "./basket-icon.component";

interface ButtonBasketProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerClassName?: string;
  productInBasket: boolean;
}

export const ButtonBasket: FC<ButtonBasketProps> = ({
  // innerClassName,
  productInBasket,
  ...rest
}: ButtonBasketProps) => {
  return (
    <>
      <button
        className={`${style.buttonBasket} ${style.buttonBasket_small} ${
          productInBasket && style.productInBasket
        }`}
        {...rest}
      >
        <BasketIcon />
      </button>
    </>
  );
};
