import { FC } from "react";
import {
  CreateButton,
  TitleCreateButton,
} from "./product-create-button.module";
type ProductCreateButtonProps = {
  title: string;
  onOpen: () => void;
};
export const ProductCreateButton: FC<ProductCreateButtonProps> = ({
  title,
  onOpen,
}: ProductCreateButtonProps) => {
  return (
    <CreateButton onClick={onOpen}>
      <TitleCreateButton>{title}</TitleCreateButton>
    </CreateButton>
  );
};
