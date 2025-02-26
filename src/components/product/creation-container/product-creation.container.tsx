import { FC, useState } from "react";
import { ProductCreateButton } from "../create-button";
import { Modal } from "../modal";
import { ProductCreationForm } from "../creation-form";
import { createPortal } from "react-dom";
import noPhotoImage from "../../../assets/images/noPhoto.png";
import { ProductModel } from "../../../types";

export const ProductCreationContainer: FC = () => {
  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  const initialStateCreateForm: ProductModel = {
    id: Date.now(),
    title: "",
    description: "",
    price: 0,
    category: "",
    image: noPhotoImage,
    rating: {
      rate: 0,
      count: 0,
    },
  };
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
          <ProductCreationForm
            formPurpose="create"
            initialState={initialStateCreateForm}
            setVisibleModalCreate={setVisibleModalCreate}
            submitButtonText="Create"
          />
        </Modal>,
        document.body
      )}
    </>
  );
};
