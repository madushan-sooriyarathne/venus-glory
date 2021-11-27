import Link from "next/link";

import {
  Header,
  Logo,
  Nav,
  NavLink,
  NavItemGroup,
  NavIcon,
  SubMenuPanel,
  subMenuPanelVariants,
} from "./styles";
import { navLinks } from "@site-data";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const NavBar: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [subMenuOpened, setSubMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation dropdown menu open handler
  const handleDropdownMenuOpen = useCallback((route: string) => {
    if (route === "/shop") {
      setSubMenuOpen(true);
    }
  }, []);

  return (
    <Header scrolled={scrolled || subMenuOpened}>
      <AnimateSharedLayout>
        <Logo
          src="/assets/logo/vg-logo.svg"
          alt="Venus Glory Logo"
          scrolled={scrolled}
          layout
        ></Logo>

        <Nav layout>
          <NavItemGroup>
            {navLinks.map((link) => (
              <Link href={link.url} key={link.name.toLowerCase()}>
                <NavLink
                  active={router.pathname === link.url}
                  onHoverStart={() => handleDropdownMenuOpen(link.url)}
                  onHoverEnd={() => setSubMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </Link>
            ))}
          </NavItemGroup>
          <NavItemGroup>
            <NavIcon>
              <use xlinkHref="/assets/svg/sprites.svg#cart" />
            </NavIcon>
            <NavIcon>
              <use xlinkHref="/assets/svg/sprites.svg#fav" />
            </NavIcon>
            <NavIcon>
              <use xlinkHref="/assets/svg/sprites.svg#user" />
            </NavIcon>
          </NavItemGroup>
        </Nav>
        <AnimatePresence>
          {subMenuOpened && (
            <SubMenuPanel
              variants={subMenuPanelVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{
                delay: 0.1,
              }}
              onHoverStart={() => setSubMenuOpen(true)}
              onHoverEnd={() => setSubMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Header>
  );
};

export default NavBar;
