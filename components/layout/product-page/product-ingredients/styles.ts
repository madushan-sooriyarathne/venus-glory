import styled from "styled-components";

const IngredientsSection = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
`;

const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const IngredientItem = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackLight};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.blackLight};
  }
`;

export { IngredientsSection, IngredientsList, IngredientItem };
