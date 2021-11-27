import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;
  position: relative;

  & input:checked ~ span {
    background-color: ${(props) => props.theme.colors.primaryDark};
    border: ${(props) => `2px solid ${props.theme.colors.blackLight}`};
    opacity: 1;
  }
`;

const RadioIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  border: 2px solid transparent;
  opacity: 1;
  transition: all 0.2s ease-in-out;
`;

const RadioComponent = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
`;

const LabelContent = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackLight};
`;

export { Label, RadioIcon, RadioComponent, LabelContent };
