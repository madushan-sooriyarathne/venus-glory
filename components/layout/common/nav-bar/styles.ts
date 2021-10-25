import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const fill = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: left center;
  }

  to {
    transform: scaleX(1);
    transform-origin: left center;
  }

`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: auto;
  padding: 2rem 10rem;

  display: grid;
  grid-template-columns: min-content minmax(min-content, 1fr);
  grid-template-rows: min-content;
  grid-template-areas: "lo na";
  align-items: center;
  justify-items: start;
  gap: 5rem;
`;

const Logo = styled.img`
  grid-area: lo;

  width: 8rem;
  height: 8rem;
  object-fit: contain;
`;

const Nav = styled.nav`
  justify-self: end;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: end;
  gap: 5rem;
`;

const NavItemGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  column-gap: 2rem;
  align-items: center;
  justify-content: flex-end;
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled(motion.a)<NavLinkProps>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryDark};
  transition: color 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondaryDark};

    &::after {
      background-color: ${(props) => props.theme.colors.secondaryDark};
      animation: 0.3s linear 0s forwards alternate ${fill};
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    width: 100%;
    height: ${(props) => (props.active ? "1px" : "0")};
    background-color: ${(props) => props.theme.colors.primaryDark};
    transition: background-color 0.2s ease-in-out;
  }
`;

const NavIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: ${(props) => props.theme.colors.primaryDark};
  transition: stroke 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    stroke: ${(props) => props.theme.colors.secondaryDark};
  }
`;
export { Header, Logo, Nav, NavLink, NavItemGroup, NavIcon };
