import styled from "styled-components";

const Banner = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  height: 50rem;
  min-height: 50rem;

  position: relative;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  padding: 10rem 20rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  grid-template-areas: "sp tx";
  align-items: center;
  justify-items: start;
  gap: 5rem;
`;

const ContentContainer = styled.div`
  grid-area: tx;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5rem;
`;

export { Banner, ContentOverlay, ContentContainer };
