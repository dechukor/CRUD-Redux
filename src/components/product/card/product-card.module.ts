import { styled } from "@mui/material/styles";

export const CardContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 30px;
  height: 300px;
  width: 600px;
  border: 2px solid #d5713f;
  border-radius: 10px;
`;

export const ImageCard = styled("img")``;

export const DescriptionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const TitleCard = styled("h2")`
  color: #d5713f;
`;

export const DescriptionCard = styled("p")`
  color: black;
`;

export const PriceCard = styled("h3")`
  color: red;
`;
