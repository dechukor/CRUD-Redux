import { styled } from "@mui/material/styles";

export const CardContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  width: 15rem;
  height: 15rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 10px grey;
`;

export const ImageCard = styled("img")`
  width: 7rem;
  height: 7rem;
  object-fit: contain;
`;

export const TitleCard = styled("div")`
  color: #d5713f;
  font-size: 1rem;
  font-weight: bold;
  text-align: start;
  overflow: hidden;
  height: auto;
  max-height: 5rem;
`;

export const PriceCard = styled("h3")`
  color: #58d53f;
  margin: 0;
  // text-align: right;
  // width: 15%;
`;

export const SettingsContainer = styled("div")`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: space-between;
  // gap: 0.5rem;
`;
