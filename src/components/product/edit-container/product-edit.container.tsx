import { FC, useState } from "react";
import { Modal } from "../modal";
import { ProductCreationForm } from "../creation-form";
import { createPortal } from "react-dom";

export const ProductEditContainer: FC = () => {
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  return (
    <>
      {createPortal(
        <Modal
          title={"Edit product"}
          visible={visibleModalEdit}
          onClose={() => setVisibleModalEdit(false)}
        >
          <ProductCreationForm setVisibleModalCreate={setVisibleModalEdit} />
        </Modal>,
        document.body
      )}
    </>
  );
};
