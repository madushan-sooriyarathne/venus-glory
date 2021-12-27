import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const ProductContainer = styled.section`
  grid-column: full-start / full-end;
  width: 100%;
  height: auto;
  overflow: hidden;

  display: grid;
  grid-template-columns: minmax(min-content, 3fr) minmax(min-content, 2fr);
  grid-template-rows: minmax(min-content, 1fr);
  grid-template-areas: "im de";
`;

const ProductInfoSection = styled.div`
  grid-area: im;
  width: 100%;
  height: 100vh;
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
  height: calc(100vh - 10rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: 1rem;
  scrollbar-color: black;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primaryDark};
    width: 100%;
  }

  & > * {
    padding: 0 1rem;
  }
`;

const ProductInfoCard = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
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
    props.selected
      ? props.theme.colors.blackLight
      : props.theme.colors.primaryDark};

  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    right: 0;
    background-color: ${(props) =>
      props.selected
        ? props.theme.colors.blackLight
        : props.theme.colors.primaryDark};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    transform-origin: right center;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }

  cursor: pointer;
`;

// Right hand side section
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
  row-gap: 10rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

const ProductMetadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

const CategoryLabel = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blackLight};
`;

const ProductSizeLabel = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: left;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blackLight};
  border-radius: 1px;
`;

const ProductTag = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: left;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-radius: 1px;
`;

const PriceTag = styled.p`
  font-size: 4rem;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1px;
  font-family: ${(props) => props.theme.fonts.secondary};
  text-align: left;
  color: ${(props) => props.theme.colors.blackLight};
`;

const PreviousPrice = styled.p`
  font-size: 3rem;
  font-weight: 400;
  font-style: italic;
  text-decoration: line-through;
  letter-spacing: 1px;
  font-family: ${(props) => props.theme.fonts.secondary};
  text-align: left;
  color: ${(props) => props.theme.colors.gray};
`;

interface ItemGroupProps {
  gap: number;
  align?: "flex-start" | "flex-end" | "center";
}

const ItemGroup = styled.div<ItemGroupProps>`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: flex-start;
  column-gap: ${(props) => `${props.gap}rem`};
`;

const AddToFavoriteButton = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.blackLight};
  stroke: ${(props) => props.theme.colors.blackLight};
  cursor: pointer;
  transition: fill 0.2s ease-in-out, stroke 0.2s ease-in-out;

  &:hover {
    fill: ${(props) => props.theme.colors.primaryDark};
    stroke: ${(props) => props.theme.colors.primaryDark};
    transform: translate();
  }
`;

const productInfoCardVariants: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export {
  ProductContainer,
  ProductInfoSection,
  ProductInfoContainer,
  ProductInfoCard,
  ProductInfoNavigation,
  ProductInfoNavButton,
  ProductActionSection,
  ProductMetadata,
  CategoryLabel,
  ProductSizeLabel,
  ProductTag,
  PriceTag,
  PreviousPrice,
  ItemGroup,
  AddToFavoriteButton,
  productInfoCardVariants,
};
