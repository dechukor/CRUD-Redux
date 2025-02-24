import { FC, useState } from "react";
import { Input, Button } from "../../";
import {
  CreateFormContainer,
  InputContainer,
} from "./product-creation-form.module";
import { ProductModel } from "../../../types";
import { v4 as uuidv4 } from "uuid";
import { createProductApi } from "../../../services";
import { TextArea } from "../../textarea";

type FormCreateType = {
  title: string;
  description: string;
  price: number;
};

type ProductCreationFormProps = {
  setVisibleModalCreate: (visibleModalCreate: boolean) => void;
};

export const ProductCreationForm: FC<ProductCreationFormProps> = ({
  setVisibleModalCreate,
}: ProductCreationFormProps) => {
  const [formData, setFormData] = useState<FormCreateType>({
    title: "",
    description: "",
    price: 0,
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  // const handleChangeInputFile = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   if (event.target.files === null) return;
  //   setFormData({ ...formData, [event.target.id]: event.target.files[0] });
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.title) {
      alert("The title is required to fill out!");
      return;
    }
    if (!formData.price) {
      if (!confirm("The price is 0. Are you sure?")) return;
    }
    const newProduct: ProductModel = {
      id: uuidv4(),
      title: formData.title,
      price: Number(formData.price),
      description: formData.description,
      category: "",
      image: "",
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

        {/* <Input
          labelText="Image: "
          labelForName="image"
          onChange={handleChangeInputFile}
          // value={String(formData.price)}
          id="image"
          // placeholder="0"
          type="file"
          accept=".jpg, .jpeg, .png"
          // innerClassName="inputPriceCreateProduct"
        /> */}
      </InputContainer>
      <Button innerClassName="buttonCreateProduct" type="submit">
        Create
      </Button>
    </CreateFormContainer>
  );
};
