import styled from "styled-components";

const ProductsSection = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 5rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  gap: 5rem;
  align-items: start;
  justify-items: start;
`;

export { ProductsSection, ProductGrid };
