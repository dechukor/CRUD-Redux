import { FC } from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  labelText?: string;
  labelForName?: string;
  innerClassName?: string;
}

export const Label: FC<LabelProps> = ({
  labelText,
  labelForName,
  innerClassName,
  ...rest
}: LabelProps) => {
  return (
    <label htmlFor={labelForName} className={innerClassName} {...rest}>
      {labelText}
    </label>
  );
};
