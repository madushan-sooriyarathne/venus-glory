import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  width: 100%;
  height: auto;
  min-height: 80vh;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, minmax(min-content, 1fr));
  grid-template-areas:
    "wo ma"
    "wo ki";
  gap: 3rem;
  align-items: end;
  justify-items: start;

  & > *:nth-child(1) {
    grid-area: wo;
  }

  & > *:nth-child(2) {
    grid-area: ma;
  }

  & > *:nth-child(3) {
    grid-area: ki;
  }
`;

export { Section };
