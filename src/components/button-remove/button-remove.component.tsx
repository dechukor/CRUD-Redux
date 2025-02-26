import { FC } from "react";
import style from "./button-remove.module.css";
import { RemoveIcon } from "./remove-icon";

interface ButtonRemoveProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerClassName?: string;
}

export const ButtonRemove: FC<ButtonRemoveProps> = ({
  innerClassName,
  ...rest
}: ButtonRemoveProps) => {
  return (
    <>
      <button
        className={`${style.buttonRemove} ${style.buttonRemove_small} ${
          innerClassName && style[innerClassName]
        }`}
        {...rest}
      >
        <RemoveIcon />
      </button>
    </>
  );
};
