import { styled } from "@mui/material/styles";

export const Substrate = styled("div")`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(181, 184, 177, 50%);
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  margin: auto;
  width: auto;
  min-width: 30rem;
  max-width: 80%;
  height: auto;
  max-height: 80%;
  border-radius: 1rem;
  background-color: #f9f7f7;
  box-shadow: 0.5rem 0.5rem 10px grey;
`;

export const ModalHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const ModalChildComponent = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const ModalTitle = styled("div")`
  font-size: 2rem;
  color: #d5713f;
`;
