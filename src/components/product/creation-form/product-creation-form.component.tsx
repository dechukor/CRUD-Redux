import { FC, useState } from "react";
import { Input, Button } from "../../";
import {
  CreateFormContainer,
  ImagePreview,
  InputContainer,
  UploadImageContainer,
} from "./product-creation-form.module";
import { FormPurpose, ProductModel } from "../../../types";
import { createProductApi, editProductApi } from "../../../services";
import { TextArea } from "../../textarea";
import noPhotoImage from "../../../assets/images/noPhoto.png";

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
    console.log(event.target.files);
    setFormData({
      ...formData,
      [event.target.id]: URL.createObjectURL(imageFile),
    });
  };

  const editSubmit = (product: ProductModel) => {
    editProductApi(product);
    setVisibleModal(false);
  };
  const createSubmit = (product: ProductModel) => {
    createProductApi(product);
    setVisibleModal(false);
  };
  const validationForm = (): boolean => {
    if (!formData.title) {
      alert("The title is required to fill out!");
      return false;
    }
    if (!formData.price) {
      return confirm("The price is 0. Are you sure?");
    }

    if (formData.price < 0) {
      alert("The price cannot be less than 0!");
      return false;
    }

    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validationForm()) return;
    const newProduct: ProductModel = {
      id: formData.id,
      title: formData.title,
      price: Number(formData.price),
      description: formData.description,
      category: formData.category,
      image: formData.image ? formData.image : "",
      rating: formData.rating,
    };

    if (formPurpose === "create") createSubmit(newProduct);
    if (formPurpose === "edit") editSubmit(newProduct);
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
