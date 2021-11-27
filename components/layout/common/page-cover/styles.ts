import styled from "styled-components";

const CoverSection = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  height: 60rem;

  position: relative;
  z-index: 0;
`;

const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  /* background-color: ${(props) => props.theme.colors.secondary}; */
  background-image: ${(props) => props.theme.gradients.coverUpside};
`;

export { CoverSection, CoverOverlay };
