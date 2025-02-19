import { FC } from "react";
import {
  CreateButton,
  TitleCreateButton,
} from "./product-create-button.module";
type ProductCreateButtonProps = {
  title: string;
};
export const ProductCreateButton: FC<ProductCreateButtonProps> = ({
  title,
}: ProductCreateButtonProps) => {
  return (
    <CreateButton>
      <TitleCreateButton>{title}</TitleCreateButton>
    </CreateButton>
  );
};
