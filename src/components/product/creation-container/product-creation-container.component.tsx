import { FC, useState } from "react";
import { ProductCreateButton } from "../create-button";
import { Modal } from "../modal";
import { ProductCreationForm } from "../creation-form";

export const ProductCreationContainer: FC = () => {
  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  return (
    <>
      <ProductCreateButton
        title="+"
        onOpen={() => setVisibleModalCreate(true)}
      />
      <Modal
        title={"Create product"}
        visible={visibleModalCreate}
        onClose={() => setVisibleModalCreate(false)}
      >
        <ProductCreationForm setVisibleModalCreate={setVisibleModalCreate} />
      </Modal>
    </>
  );
};
