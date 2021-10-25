import Link from "next/link";

import { Header, Logo, Nav, NavLink, NavItemGroup, NavIcon } from "./styles";
import { navLinks } from "@site-data";
import { AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";

const NavBar: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <Header>
      <Logo src="/assets/logo/vg-logo.svg" alt="Venus Glory Logo"></Logo>
      <Nav>
        <NavItemGroup>
          <AnimateSharedLayout>
            {navLinks.map((link) => (
              <Link href={link.url}>
                {router.pathname === link.url ? (
                  <NavLink active={true} layout layoutId="underline">
                    {link.name}
                  </NavLink>
                ) : (
                  <NavLink active={false} layout>
                    {link.name}
                  </NavLink>
                )}
              </Link>
            ))}
          </AnimateSharedLayout>
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
    </Header>
  );
};

export default NavBar;
