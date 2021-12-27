import styled from "styled-components";

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  font-size: 2rem;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.blackLight};

  & p {
    font-size: 2rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 0.5px;
    text-align: left;
    margin-bottom: 3rem;
  }

  & h1,
  h2,
  h3,
  h4 {
    font-size: 3rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.black};
    margin-top: 3rem;
  }

  & ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;

    & li {
      font-size: 1.8rem;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 1rem;

      &::before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 1rem;
        background-color: ${(props) => props.theme.colors.blackLight};
      }
    }
  }
`;

export { Description };
