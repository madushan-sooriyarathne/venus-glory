import styled from "styled-components";

interface StyledProps {
  reversed: boolean;
}

const Container = styled.section`
  grid-column: content-start / content-end;

  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(5, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  align-items: center;
  justify-content: start;
`;

const ContentWrapper = styled.div<StyledProps>`
  grid-column: ${(props) => (props.reversed ? "4 / -1" : "1 / 3")};
  grid-row: 1 / 2;

  width: 100%;
  height: auto;
  padding: 10rem 5rem;

  background-color: ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5rem;
`;

const ImageWrapper = styled.div<StyledProps>`
  grid-column: ${(props) => (props.reversed ? "1 / 4" : "3 / -1")};
  grid-row: 1 / 2;
  width: 100%;
  height: 50rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-rows: minmax(min-content, 1fr);

  align-items: start;
  justify-content: start;

  position: relative;
  z-index: 0;
`;

const ImageBg = styled.div<StyledProps>`
  grid-column: ${(props) => (props.reversed ? "3 / -1" : "1 / 2")};

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.primary};
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  padding: 3rem 5rem;
`;

export { Container, ContentWrapper, ImageWrapper, ImageBg, ImageContainer };
