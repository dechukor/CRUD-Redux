import { styled } from "@mui/material/styles";

export const ListContainer = styled("div")`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 1rem;
  width: 90vw;
  height: 70vh;
`;

export const ListProducts = styled("div")`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
`;

export const ListFooter = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border-top: 2px solid grey;
  padding: 1rem 1rem 0 1rem;
`;

export const SummaryContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const QuantityProducts = styled("div")`
  color: #bc3fd5;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TotalCost = styled("div")`
  color: rgb(63, 163, 213);
  font-size: 1.2rem;
  font-weight: bold;
`;

export const EmptyBasketText = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  height: 100%;
`;
