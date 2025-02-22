import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerClassName?: string;
}

export const Button: FC<ButtonProps> = ({
  innerClassName,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <button className={innerClassName} {...rest}></button>
    </>
  );
};
