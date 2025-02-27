import { FC } from "react";
import { ProductModel } from "../../../types";
import {
  QuantityProducts,
  ListContainer,
  ListProducts,
  SummaryContainer,
  TotalCost,
  EmptyBasketText,
  ListFooter,
} from "./basket-list.module";
import { BasketCard } from "../basket-card";
import { CURRENCY_UNIT } from "../../../constants/price.constants";
import { Button } from "../../buttons";
import { clearBasketApi } from "../../../services";

type BasketListProps = {
  productsInBasket: ProductModel[];
};

export const BasketList: FC<BasketListProps> = ({
  productsInBasket,
}: BasketListProps) => {
  const cost = productsInBasket
    .reduce((acc, item) => (acc += item.price), 0)
    .toFixed(2);

  const handleClearClick = () => {
    if (confirm("Are you sure you want to clean the basket?")) {
      clearBasketApi();
    }
  };

  return (
    <ListContainer>
      {productsInBasket.length ? (
        <ListProducts>
          {productsInBasket.map((product) => {
            return <BasketCard key={product.id} product={product} />;
          })}
        </ListProducts>
      ) : (
        <EmptyBasketText>Your basket is still empty</EmptyBasketText>
      )}
      <ListFooter>
        <SummaryContainer>
          <QuantityProducts>
            Quantity: {productsInBasket.length}
          </QuantityProducts>
          <TotalCost>
            Total cost: {CURRENCY_UNIT}
            {cost}
          </TotalCost>
        </SummaryContainer>
        <Button onClick={handleClearClick}>Clear basket</Button>
      </ListFooter>
    </ListContainer>
  );
};
