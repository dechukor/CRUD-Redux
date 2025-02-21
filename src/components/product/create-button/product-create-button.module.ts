import { styled } from "@mui/material/styles";

export const CreateButton = styled("button")`
  display: flex;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: rgb(63, 163, 213, 70%);
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  transition: background-color 0.25s;
  :hover {
    background-color: rgb(63, 163, 213, 100%);
  }
`;

export const TitleCreateButton = styled("div")`
  font-size: 2rem;
  padding-bottom: 0.3rem;
  margin: auto;
  color: white;
`;
