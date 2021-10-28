import styled from "styled-components";

const BackgroundImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
`;

const Card = styled.div`
  width: 100%;
  min-width: 35rem;
  height: 100%;
  min-height: 40rem;

  position: relative;
  z-index: 0;

  overflow: hidden;

  &:hover ${BackgroundImageWrapper} {
    transform: scale(1.1);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  padding: 3rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: end;
  justify-content: start;
  /* justify-content: stretch; */
`;

const CardDetailsGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3rem;
`;

const ProductNameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ProductPriceGroup = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.blackLight};
`;

export {
  Card,
  CardOverlay,
  CardDetailsGroup,
  ProductNameGroup,
  ProductPriceGroup,
  Label,
  BackgroundImageWrapper,
};
