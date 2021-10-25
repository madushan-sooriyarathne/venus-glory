import styled from "styled-components";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: minmax(100vh, min-content) min-content;
  grid-template-areas:
    "co"
    "fo";
  align-items: start;
  justify-items: center;
`;

const ContentWrapper = styled.div`
  grid-area: co;
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      minmax(min-content, 18rem)
    )
    [content-end] minmax(5rem, 1fr) [full-end];
  grid-auto-rows: min-content;
  row-gap: 15rem;
  align-items: start;
  justify-items: center;
`;

export { PageContainer, ContentWrapper };
