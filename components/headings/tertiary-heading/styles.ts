import styled from "styled-components";

interface HeadingProps {
  align: Alignment;
  light: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(props) =>
    props.light ? props.theme.colors.primary : props.theme.colors.blackLight};
`;

export { Heading };
