import { FC } from "react";
import { Label } from "../labels";
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string;
  labelForName?: string;
  innerClassName?: string;
}

export const TextArea: FC<TextAreaProps> = ({
  labelText,
  labelForName,
  innerClassName,
  ...rest
}: TextAreaProps) => {
  return (
    <div>
      <Label htmlFor={labelForName} labelText={labelText} />
      <br></br>
      <textarea className={innerClassName} {...rest} />
    </div>
  );
};
