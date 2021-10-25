import styled from "styled-components";

const HeroContainer = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  height: 90vh;

  position: relative;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  padding: 20rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: 1fr;
  grid-template-areas: "ti sp";
  align-items: center;
  justify-content: start;
`;

const TitleGroup = styled.div`
  grid-area: ti;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;
`;

export { HeroContainer, HeroContent, TitleGroup };
