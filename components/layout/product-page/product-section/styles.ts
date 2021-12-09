import styled from "styled-components";

const ProductContainer = styled.section`
  grid-column: full-start / full-end;
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  /* scrollbar-width: 0; */

  display: grid;
  grid-template-columns: minmax(min-content, 3fr) minmax(min-content, 2fr);
  grid-template-rows: minmax(min-content, 1fr);
  grid-template-areas: "im de";
`;

const ProductInfoSection = styled.div`
  grid-area: im;
  width: 100%;
  height: auto;
  padding: 10rem;
  overflow: hidden;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) max-content;
  grid-template-rows: min-content;
  align-items: center;
  justify-items: start;
  gap: 5rem;
`;

const ProductInfoContainer = styled.div`
  grid-column: 1 / 2;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > * {
    padding: 5rem 0;
  }
`;

const ProductInfoNavigation = styled.div`
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 3rem;
`;

interface ProductInfoNavButtonProps {
  selected: boolean;
}

const ProductInfoNavButton = styled.a<ProductInfoNavButtonProps>`
  font-size: 3rem;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.secondary};
  outline: none;
  text-decoration: none;
  color: ${(props) =>
    props.selected ? props.theme.colors.black : props.theme.colors.blackLight};
`;

const ProductActionSection = styled.div`
  grid-area: de;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

export {
  ProductContainer,
  ProductInfoSection,
  ProductInfoContainer,
  ProductInfoNavigation,
  ProductInfoNavButton,
  ProductActionSection,
};
