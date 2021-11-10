import styled from "styled-components";

const ProductSection = styled.div`
  grid-column: content-start / content-end;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(3, min-content);
  flex-direction: column;
  align-items: start;
  justify-items: center;
  gap: 5rem;
`;

const Grid = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-auto-rows: min-content;
  gap: 3rem;
  align-items: start;
  justify-items: start;
`;

export { ProductSection, Grid };
