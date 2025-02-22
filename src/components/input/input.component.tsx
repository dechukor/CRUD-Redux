import { FC } from "react";
import { Label } from "../label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  labelForName?: string;
  innerClassName?: string;
}

export const Input: FC<InputProps> = ({
  labelText,
  labelForName,
  innerClassName,
  ...rest
}: InputProps) => {
  return (
    <div>
      <Label htmlFor={labelForName} labelText={labelText} />
      <br></br>
      <input className={innerClassName} {...rest} />
    </div>
  );
};
