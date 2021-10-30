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
import { useEffect, useState } from "react";
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
                  onHoverStart={() => setSubMenuOpen(true)}
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
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Header>
  );
};

export default NavBar;
