import { CURRENCY_UNIT } from "../../../constants/price.constants";
import { ProductModel } from "../../../types";

export const validationForm = (formData: ProductModel): boolean => {
  if (!formData.title) {
    alert("The title is required to fill out!");
    return false;
  }
  if (!formData.price) {
    return confirm("The price is 0. Are you sure?");
  }

  if (formData.price > 999.99) {
    alert(`The price should be no more than ${CURRENCY_UNIT}999.99!`);
    return false;
  }

  if (!Number.isInteger(formData.price * 100)) {
    alert(`The price is not correct!`);
    return false;
  }

  if (formData.price < 0) {
    alert("The price cannot be less than 0!");
    return false;
  }

  return true;
};
