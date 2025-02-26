import { FC } from "react";
import { Modal } from "../product";
import { useSelector } from "react-redux";
import { selectBasket } from "../../store/product";
import { ProductModel } from "../../types";

import { BasketList } from "./basket-list";

type BasketProps = {
  products: ProductModel[];
  onCloseBasket: () => void;
};

export const Basket: FC<BasketProps> = ({
  onCloseBasket,
  products,
}: BasketProps) => {
  const basket = useSelector(selectBasket);
  const productsInBasket = basket
    .map((itemBasket) => {
      return products.find((itemProducts) => itemBasket.id === itemProducts.id);
    })
    .filter((item) => !!item);

  return (
    <>
      <Modal title="My basket" visible={true} onClose={onCloseBasket}>
        <BasketList productsInBasket={productsInBasket} />
      </Modal>
    </>
  );
};
