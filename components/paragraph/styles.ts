import styled from "styled-components";

interface ParaProps {
  align: Alignment;
  small: boolean;
}

const Para = styled.p<ParaProps>`
  font-size: ${(props) => (props.small ? "1.3rem" : "1.5rem")};
  font-weight: 400;
  text-align: ${(props) => props.align};
  color: ${(props) => props.theme.colors.blackLight};

  & > b {
    font-weight: 700;
  }

  & > a {
    color: ${(props) => props.theme.colors.blackLight};
    font-weight: 700;
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;

    position: relative;
    z-index: 0;

    &:hover {
      &::after {
        transform: scaleY(1);
      }
    }
    &::after {
      content: "";

      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      right: 0;

      width: 100%;
      height: 10px;
      transform: scaleY(0.1);
      background-color: ${(props) => props.theme.colors.primaryDark};
      transform-origin: center bottom;
      transition: transform 0.2s ease-in-out;
    }
  }
`;

export { Para };
