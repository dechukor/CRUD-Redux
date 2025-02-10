import { styled } from "@mui/material/styles";

export const CardContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  height: 300px;
  width: 600px;
  //   border: 2px solid #d5713f;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0.5rem 0.5rem 10px grey;
`;

export const ImageContainer = styled("div")`
  display: flex;
  width: 40%;
`;

export const DescriptionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 45%;
`;

export const ImageCard = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TitleCard = styled("h3")`
  color: #d5713f;
  text-align: start;
`;

export const DescriptionCard = styled("div")`
  height: auto;
  color: black;
  text-align: start;
  overflow: hidden;
`;

export const PriceCard = styled("h3")`
  color: #58d53f;
  text-align: right;
  width: 15%;
`;
