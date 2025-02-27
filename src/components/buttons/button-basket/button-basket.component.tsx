import { FC } from "react";
import style from "./button-basket.module.css";

interface ButtonBasketProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerClassName?: string;
  productInBasket?: boolean;
}

export const ButtonBasket: FC<ButtonBasketProps> = ({
  innerClassName,
  productInBasket,
  children,
  ...rest
}: ButtonBasketProps) => {
  return (
    <>
      <button
        className={`${style.buttonBasket} ${style.buttonBasket_small} ${
          productInBasket && style.productInBasket
        } ${innerClassName && style[innerClassName]}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
