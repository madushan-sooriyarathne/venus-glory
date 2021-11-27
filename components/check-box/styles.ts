import styled from "styled-components";

const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  position: relative;

  & input:checked ~ div span {
    visibility: visible;
    opacity: 1;
  }
`;

const CheckBoxComponent = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
`;

const CheckBoxIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 5px;
  border: ${(props) => `2px solid ${props.theme.colors.blackLight}`};
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
`;

const CheckBoxIconFill = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 2px;

  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.blackLight};
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

const CheckBoxLabel = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackLight};
`;

export {
  CheckBoxContainer,
  CheckBoxComponent,
  CheckBoxIcon,
  CheckBoxIconFill,
  CheckBoxLabel,
};
