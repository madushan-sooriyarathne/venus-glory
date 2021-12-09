import styled from "styled-components";

const ShopContainer = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  min-height: calc(100vh - 60rem);
  height: auto;
  margin-top: -15rem;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 4fr);
  grid-template-rows: minmax(min-content, 1fr);
  grid-template-areas: "fi pr";
  align-items: start;
  justify-content: start; ;
`;

const FilterPanel = styled.aside`
  grid-area: fi;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};

  padding: 10rem 5rem;
`;

const ProductArea = styled.section`
  grid-area: pr;
  width: 100%;
  height: auto;

  height: 100%;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 10rem;
`;

const ProductCategorySection = styled.div`
  width: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 5rem;
`;

const ProductCategoryTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5rem;
`;

const ProductCategoryGrid = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-auto-rows: min-content;
  align-items: start;
  justify-items: center;
  gap: 3rem;
`;

export {
  ShopContainer,
  FilterPanel,
  ProductArea,
  ProductCategorySection,
  ProductCategoryTitle,
  ProductCategoryGrid,
};
