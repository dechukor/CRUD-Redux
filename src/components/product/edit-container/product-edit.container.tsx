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
            initialState={product}
            setVisibleModal={setVisible}
            submitButtonText="Accept changes"
          />
        </Modal>,
        document.body
      )}
    </>
  );
};
