import { FC, useState } from "react";
import { ProductCreateButton } from "../create-button";
import { Modal } from "../modal";
import { ProductCreationForm } from "../creation-form";
import { createPortal } from "react-dom";

export const ProductCreationContainer: FC = () => {
  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  return (
    <>
      <ProductCreateButton
        title="+"
        onOpen={() => setVisibleModalCreate(true)}
      />
      {createPortal(
        <Modal
          title={"Create product"}
          visible={visibleModalCreate}
          onClose={() => setVisibleModalCreate(false)}
        >
          <ProductCreationForm setVisibleModalCreate={setVisibleModalCreate} />
        </Modal>,
        document.body
      )}
    </>
  );
};
