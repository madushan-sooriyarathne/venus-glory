import styled from "styled-components";

const Button = styled.a`
  outline: none;

  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.colors.blackLight};

  padding: 1rem 3rem;

  border: ${(props) => `1px solid ${props.theme.colors.blackLight}`};
  background-color: transparent;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  cursor: url("/assets/svg/right-arrow.svg"), auto;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blackLight};
  }
`;

export { Button };
