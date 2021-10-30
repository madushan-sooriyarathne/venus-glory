import styled, { keyframes } from "styled-components";
import { motion, Variants } from "framer-motion";

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

interface HeaderProps {
  scrolled: boolean;
}

const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  width: 100%;
  height: auto;
  padding: 1rem 10rem;

  display: grid;
  grid-template-columns: min-content minmax(min-content, 1fr);
  grid-template-rows: min-content;
  grid-template-areas: "lo na";
  align-items: center;
  justify-items: start;
  gap: 5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform-origin: center top;
    background-color: ${(props) => props.theme.colors.white};
    transform: ${(props) => (props.scrolled ? "scaleY(1)" : "scaleY(0)")};
    transition: transform 0.3s ease-in-out;
  }
`;

interface LogoProps {
  scrolled: boolean;
}

const Logo = styled(motion.img)<LogoProps>`
  grid-area: lo;

  width: ${(props) => (props.scrolled ? "6rem" : "8rem")};
  height: ${(props) => (props.scrolled ? "6rem" : "8rem")};
  object-fit: contain;
`;

const Nav = styled(motion.nav)`
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
  color: ${(props) => props.theme.colors.blackLight};
  transition: color 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.black};

    &::after {
      background-color: ${(props) => props.theme.colors.black};
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
    background-color: ${(props) => props.theme.colors.blackLight};
    transition: background-color 0.2s ease-in-out;
  }
`;

const NavIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: ${(props) => props.theme.colors.blackLight};
  transition: stroke 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    stroke: ${(props) => props.theme.colors.black};
  }
`;

const SubMenuPanel = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  transform-origin: center top;

  width: 100%;
  height: 50rem;
  background-color: ${(props) => props.theme.colors.white};
`;

const subMenuPanelVariants: Variants = {
  initial: {
    scaleY: 0,
  },
  enter: {
    scaleY: 1,
  },
  exit: {
    scaleY: 0,
  },
};

export {
  Header,
  Logo,
  Nav,
  NavLink,
  NavItemGroup,
  NavIcon,
  SubMenuPanel,
  subMenuPanelVariants,
};
