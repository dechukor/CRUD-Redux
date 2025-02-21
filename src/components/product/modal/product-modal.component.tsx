import { FC, ReactNode } from "react";
import {
  Substrate,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalChildComponent,
} from "./product-modal.module";
import { ModalCloseButton } from "./close-button";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};
export const Modal: FC<ModalProps> = ({
  visible,
  onClose,
  children,
}: ModalProps) => {
  return (
    <>
      {visible && (
        <Substrate onClick={(e) => e.target === e.currentTarget && onClose()}>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Create product</ModalTitle>
              <ModalCloseButton onClose={onClose}></ModalCloseButton>
            </ModalHeader>
            <ModalChildComponent>{children}</ModalChildComponent>
          </ModalContainer>
        </Substrate>
      )}
    </>
  );
};
