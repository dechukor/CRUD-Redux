import { styled } from "@mui/material/styles";

export const DescriptionCard = styled("div")`
  color: black;
  text-align: start;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export const ShowHideButton = styled("button")`
  background-color: rgb(63, 163, 213, 50%);
  transition: background-color 0.25s;
  :hover {
    background-color: rgb(63, 163, 213, 100%);
  }
`;
