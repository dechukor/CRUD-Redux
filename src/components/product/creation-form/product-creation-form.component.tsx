import { FC, useState } from "react";
import { Input, Button } from "../../";
import {
  CreateFormContainer,
  ImagePreview,
  InputContainer,
  UploadImageContainer,
} from "./product-creation-form.module";
import { FormPurpose, ProductModel } from "../../../types";
import { TextArea } from "../../textarea";
import noPhotoImage from "../../../assets/images/noPhoto.png";
import { validationForm } from "./product-creation-form.validation";
import { createSubmit, editSubmit } from "./product-creation-form.submit";

type ProductCreationFormProps = {
  formPurpose: FormPurpose;
  initialState: ProductModel;
  setVisibleModal: (visibleModalCreate: boolean) => void;
  submitButtonText: string;
};

export const ProductCreationForm: FC<ProductCreationFormProps> = ({
  formPurpose,
  initialState,
  setVisibleModal,
  submitButtonText,
}: ProductCreationFormProps) => {
  const [formData, setFormData] = useState<ProductModel>(initialState);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleChangeImageFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files?.length) {
      setFormData({
        ...formData,
        [event.target.id]: noPhotoImage,
      });
      return;
    }
    const imageFile = event.target.files[0];

    setFormData({
      ...formData,
      [event.target.id]: URL.createObjectURL(imageFile),
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validationForm(formData)) return;

    const newProduct: ProductModel = {
      ...formData,
      price: Number(formData.price),
      image: formData.image ? formData.image : "",
    };

    if (formPurpose === "create") createSubmit(newProduct);
    if (formPurpose === "edit") editSubmit(newProduct);
    setVisibleModal(false);
  };

  return (
    <CreateFormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          labelText="Title*: "
          labelForName="title"
          onChange={handleChangeInput}
          value={formData.title}
          id="title"
          placeholder="Input title"
          innerClassName="inputTitleCreateProduct"
        />

        <TextArea
          labelText="Description: "
          labelForName="description"
          onChange={handleChangeTextArea}
          value={formData.description}
          id="description"
          placeholder="Input description"
          innerClassName="textareaCreateProduct"
        />

        <Input
          labelText="Price: "
          labelForName="price"
          onChange={handleChangeInput}
          value={String(formData.price)}
          id="price"
          placeholder="0"
          type="number"
          innerClassName="inputPriceCreateProduct"
        />
        <UploadImageContainer>
          <Input
            labelText="Image: "
            labelForName="image"
            onChange={handleChangeImageFile}
            id="image"
            placeholder="Select the file"
            type="file"
            accept=".jpg, .jpeg, .png"
            innerClassName="inputUploadFile"
          />
          <ImagePreview src={formData.image} />
        </UploadImageContainer>
      </InputContainer>
      <Button innerClassName="buttonCreateProduct" type="submit">
        {submitButtonText}
      </Button>
    </CreateFormContainer>
  );
};
