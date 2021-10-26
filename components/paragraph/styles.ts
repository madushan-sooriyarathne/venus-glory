import styled from "styled-components";

interface ParaProps {
  align: Alignment;
  small: boolean;
}

const Para = styled.p<ParaProps>`
  font-size: ${(props) => (props.small ? "1.2rem" : "1.5rem")};
  font-weight: 400;
  text-align: ${(props) => props.align};
  color: ${(props) => props.theme.colors.blackLight};
`;

export { Para };
