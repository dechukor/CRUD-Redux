import { FC, useState } from "react";
import { Input, Button } from "../../";
import {
  CreateFormContainer,
  ImagePreview,
  InputContainer,
  UploadImageContainer,
} from "./product-creation-form.module";
import { ProductModel } from "../../../types";
import { createProductApi } from "../../../services";
import { TextArea } from "../../textarea";
import noPhotoImage from "../../../assets/images/noPhoto.png";

type FormCreateType = {
  title: string;
  description: string;
  price: number;
  image: string;
};

type ProductCreationFormProps = {
  setVisibleModalCreate: (visibleModalCreate: boolean) => void;
};

export const ProductCreationForm: FC<ProductCreationFormProps> = ({
  setVisibleModalCreate,
}: ProductCreationFormProps) => {
  const initialState: FormCreateType = {
    title: "",
    description: "",
    price: 0,
    image: noPhotoImage,
  };
  const [formData, setFormData] = useState<FormCreateType>(initialState);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.title) {
      alert("The title is required to fill out!");
      return;
    }
    if (!formData.price) {
      if (!confirm("The price is 0. Are you sure?")) return;
    }

    if (formData.price < 0) {
      alert("The price cannot be less than 0!");
      return;
    }
    const newProduct: ProductModel = {
      id: Date.now(),
      title: formData.title,
      price: Number(formData.price),
      description: formData.description,
      category: "",
      image: formData.image ? formData.image : "",
      rating: {
        rate: 0,
        count: 0,
      },
    };
    createProductApi(newProduct);
    setVisibleModalCreate(false);
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
        Create
      </Button>
    </CreateFormContainer>
  );
};
