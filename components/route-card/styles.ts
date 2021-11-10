import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  transition: transform 0.2s ease-in-out;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  position: relative;
  z-index: 0;

  &:hover ${ImageContainer} {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  row-gap: 3rem;

  background-image: linear-gradient(
    45deg,
    rgba(247, 240, 231, 0.8) 18%,
    rgba(247, 240, 231, 0) 100%
  ); ;
`;

export { Box, Overlay, ImageContainer };
