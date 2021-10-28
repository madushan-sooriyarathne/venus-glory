import styled from "styled-components";

const BestSellersSection = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) 2fr;
  grid-template-rows: min-content;
  grid-template-areas: "ti pr";
  gap: 5rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  grid-area: ti;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem;
`;

const Products = styled.div`
  grid-area: pr;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: minmax(min-content, 1fr);
  gap: 5rem;
`;

export { BestSellersSection, Title, Products };
