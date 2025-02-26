import { FC } from "react";
import { Modal } from "../modal";
import { ProductCreationForm } from "../creation-form";
import { createPortal } from "react-dom";
import { ProductModel } from "../../../types";

type ProductEditContainer = {
  product: ProductModel;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const ProductEditContainer: FC<ProductEditContainer> = ({
  product,
  visible,
  setVisible,
}) => {
  const initialStateEditForm: ProductModel = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    category: "",
    image: product.image,
    rating: {
      rate: 0,
      count: 0,
    },
  };
  return (
    <>
      {createPortal(
        <Modal
          title={"Edit product"}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <ProductCreationForm
            formPurpose="edit"
            initialState={initialStateEditForm}
            setVisibleModal={setVisible}
            submitButtonText="Accept changes"
          />
        </Modal>,
        document.body
      )}
    </>
  );
};
