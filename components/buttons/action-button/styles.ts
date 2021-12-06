import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  outline: none;
  border: none;
  background-color: transparent;

  padding: 2rem 3rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;

  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.black};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.blackLight};
  }
`;

export { Button };
