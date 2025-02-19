import { memo, FC, useState } from "react";
import { DescriptionCard, ShowHideButton } from "./product-description.module";

type DescriptionProps = {
  text: string;
  maxLenght?: number;
};

export const Description: FC<DescriptionProps> = memo(
  ({ text, maxLenght }: DescriptionProps) => {
    const [isShowDetails, setIsShowDetails] = useState(false);

    return (
      <>
        {maxLenght && text.length > maxLenght ? (
          <>
            <DescriptionCard>
              {isShowDetails ? text : text.slice(0, maxLenght) + "..."}
            </DescriptionCard>
            <ShowHideButton onClick={() => setIsShowDetails((state) => !state)}>
              {isShowDetails ? "Hide details" : "Show details"}
            </ShowHideButton>
          </>
        ) : (
          <DescriptionCard>{text}</DescriptionCard>
        )}
      </>
    );
  }
);
