import styled from "styled-components";

const BackgroundImageHolder = styled.div`
  width: 100%;
  height: 100%;
  min-height: 30rem;
  cursor: url("/assets/svg/right-arrow.svg"), auto;

  overflow: hidden;
`;

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

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content);
  align-items: start;
  justify-items: start;
  row-gap: 2rem;
  /* background-color: ${(props) => props.theme.colors.secondary}; */

  box-shadow: ${(props) => props.theme.shadows.close};
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.spread};
  }

  &:hover ${BackgroundImageHolder} ${BackgroundImageWrapper} {
    transform: scale(1.1);
  }
`;

const ProductDetails = styled.div`
  width: 100%;
  height: auto;

  padding: 0 2rem 2rem 2rem;

  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: min-content;
  grid-template-areas: "de af";
  align-items: center;
  justify-items: start;
  gap: 5rem;
`;

const ProductDetailsGroup = styled.div`
  grid-area: de;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  cursor: pointer;
`;

const ProductName = styled.a`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.secondary};
  letter-spacing: 1px;
  /* text-transform: uppercase; */
  text-align: left;
  outline: none;
  text-decoration: none;

  color: ${(props) => props.theme.colors.black};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.blackLight};
  }
`;

const ProductPrice = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: left;

  color: ${(props) => props.theme.colors.blackLight};
`;

const AddToFavoriteButton = styled.svg`
  grid-area: af;
  width: 2rem;
  height: 2rem;
  fill: ${(props) => props.theme.colors.blackLight};
  stroke: ${(props) => props.theme.colors.blackLight};
  transition: fill 0.2s ease-in-out, stroke 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    fill: ${(props) => props.theme.colors.primaryDark};
    stroke: ${(props) => props.theme.colors.primaryDark};
    transform: translate();
  }
`;

export {
  Card,
  BackgroundImageWrapper,
  BackgroundImageHolder,
  ProductDetails,
  ProductDetailsGroup,
  ProductName,
  ProductPrice,
  AddToFavoriteButton,
};
