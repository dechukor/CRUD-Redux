import { CloseIcon, CloseButton } from "./";

type ModalCloseButtonProps = {
  onClose: () => void;
};

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <CloseButton onClick={onClose}>
      <CloseIcon />
    </CloseButton>
  );
};
