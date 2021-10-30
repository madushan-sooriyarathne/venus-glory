import styled from "styled-components";

const InputFiledGroup = styled.div`
  width: 100%;
  min-width: 40rem;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) min-content;
  grid-template-rows: repeat(3, min-content);
  grid-template-areas:
    "la sp"
    "in bt"
    "er er";
  align-items: start;
  justify-content: start;
  row-gap: 0.5rem;
`;

const Label = styled.label`
  grid-area: la;
  margin-left: 1rem;

  font-size: 1.3rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;

const Field = styled.input`
  grid-area: in;

  width: 100%;
  padding: 1.5rem 1rem 0.5rem 1rem;

  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.black};
  border: none;
  outline: none;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.blackLight}`};
  background-color: transparent;

  &:placeholder-shown + ${Label} {
    opacity: 0;
    transform: translateY(2.5rem);
  }
`;

const ErrorMessage = styled.p`
  grid-area: er;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.error};
  text-align: left;
`;

const SubmitButton = styled.button`
  grid-area: bt;
  height: 100%;
  width: auto;
  min-width: 5rem;

  outline: none;
  border: none;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.blackLight}`};
  background-color: transparent;

  display: grid;
  place-content: center;
  padding: 1rem;

  background-image: url("/assets/svg/right-arrow-long.svg");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;
`;

export { InputFiledGroup, Label, Field, ErrorMessage, SubmitButton };
