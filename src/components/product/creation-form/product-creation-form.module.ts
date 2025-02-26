import { styled } from "@mui/material/styles";

export const CreateFormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
`;

export const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
`;

export const UploadImageContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ImagePreview = styled("img")`
  width: 8rem;
  height: 8rem;
  background-color: white;
  object-fit: contain;
  border-radius: 0.3rem;
  border: 2px solid rgb(63, 163, 213);
`;
