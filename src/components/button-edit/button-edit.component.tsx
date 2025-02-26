import { FC } from "react";
import style from "./button-edit.module.css";
import { EditIcon } from "./edit-icon";

interface ButtonEditProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerClassName?: string;
}

export const ButtonEdit: FC<ButtonEditProps> = ({
  innerClassName,
  ...rest
}: ButtonEditProps) => {
  return (
    <>
      <button
        className={`${style.buttonEdit} ${style.buttonEdit_small} ${
          innerClassName && style[innerClassName]
        }`}
        {...rest}
      >
        <EditIcon />
      </button>
    </>
  );
};
