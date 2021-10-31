import styled from "styled-components";

const CategoriesSection = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-auto-rows: minmax(40rem, min-content);

  gap: 3rem;
  align-items: start;
  justify-items: start;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
`;

const CategoryBox = styled.div`
  width: 100%;
  height: 50rem;
  background-color: transparent;
  overflow: hidden;

  position: relative;
  z-index: 0;

  cursor: url("/assets/svg/right-arrow.svg"), auto;

  &:hover {
    ${ImageWrapper} {
      transform: scale(1.05);
    }
  }
`;

const DetailsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 2rem 4rem 2rem 2rem;

  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  row-gap: 1rem;

  background-image: linear-gradient(
    20deg,
    rgba(247, 240, 231, 1) 0%,
    rgba(247, 240, 231, 0.8) 30%,
    rgba(247, 240, 231, 0.2) 50%,
    rgba(247, 240, 231, 0) 100%
  ); ;
`;

export { CategoriesSection, CategoryBox, ImageWrapper, DetailsOverlay };
