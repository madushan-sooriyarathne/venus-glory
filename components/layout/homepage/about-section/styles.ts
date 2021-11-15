import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;
  padding: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5rem;

  position: relative;
`;

export { Section };
