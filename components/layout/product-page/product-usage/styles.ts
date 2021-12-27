import styled from "styled-components";

const UsageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
`;

const UsageDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

  & ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 3rem;

    & li {
      font-size: 1.8rem;
      list-style-type: decimal;
      list-style-position: inside;
    }
  }
`;

export { UsageSection, UsageDescription };
