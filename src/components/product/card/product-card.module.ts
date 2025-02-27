import { styled } from "@mui/material/styles";

export const CardContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  width: auto;
  max-width: 30rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 10px grey;
`;

export const ImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  // width: 10rem;
`;

export const DescriptionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5rem;
  width: 45%;
`;

export const ImageCard = styled("img")`
  width: 100%;
  object-fit: contain;
`;

export const TitleCard = styled("div")`
  color: #d5713f;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: start;
`;

export const PriceBasketContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceCard = styled("h3")`
  color: #58d53f;
  text-align: right;
  width: 15%;
`;

export const SettingsContainer = styled("div")`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  justify-content: space-between;
  // gap: 0.5rem;
`;
