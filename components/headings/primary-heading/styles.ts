import styled from "styled-components";

interface HeadingProps {
  align: Alignment;
  light: boolean;
  small: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-size: ${(props) => (props.small ? "5rem" : "8rem")};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(props) =>
    props.light ? props.theme.colors.primary : props.theme.colors.blackLight};
`;

export { Heading };
