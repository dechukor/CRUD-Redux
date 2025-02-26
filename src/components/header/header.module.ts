import { styled } from "@mui/material/styles";

export const HeaderContainer = styled("header")`
  position: sticky;
  top: 0;
  left 0;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  height: 5rem;
  background-color: #bc3fd5;

`;

export const HeaderLogo = styled("img")`
  height: 100%;
`;

export const ButtonContainer = styled("div")`
  position: relative;
`;

export const BasketCounter = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.2rem;
  right: -0.2rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #58d53f;
  border-radius: 50%;
  color: white;
  font-size: 0.7rem;
`;
