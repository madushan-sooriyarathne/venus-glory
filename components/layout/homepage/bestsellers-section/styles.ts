import styled from "styled-components";

const BestSellersSection = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) 2fr;
  grid-template-rows: min-content;
  grid-template-areas: "ti ps";
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

const ProductSlider = styled.div`
  grid-area: ps;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: minmax(min-content, 1fr) min-content;
  grid-template-areas:
    "pr"
    "sc";
  align-items: start;
  justify-items: start;
  row-gap: 3rem;
`;

const Products = styled.div`
  width: 100%;
  grid-area: pr;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: minmax(min-content, 1fr);
  gap: 5rem;
`;

const SliderControls = styled.div`
  grid-area: sc;
  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

const ControlButton = styled.svg`
  width: 5rem;
  height: 5rem;
  stroke: ${(props) => props.theme.colors.blackLight};
  transition: stroke 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    stroke: ${(props) => props.theme.colors.black};
  }
`;

export {
  BestSellersSection,
  Title,
  ProductSlider,
  Products,
  SliderControls,
  ControlButton,
};
