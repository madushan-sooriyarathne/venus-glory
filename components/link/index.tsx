import Link from "next/link";
import { LinkComponent } from "./styles";

interface RouteLink {
  route: string;
  children: string;
  url?: never;
  target?: never;
}

interface URLLink {
  route?: never;
  children: string;
  url: string;
  target?: "_self" | "_blank";
}

type Props = URLLink | RouteLink;

const SiteLink: React.FC<Props> = ({
  route,
  children,
  url,
  target = "_blank",
}: Props): JSX.Element => {
  return route ? (
    <Link href={route}>
      <LinkComponent>{children}</LinkComponent>
    </Link>
  ) : (
    <LinkComponent href={url} target={target}>
      {children}
    </LinkComponent>
  );
};

export default SiteLink;
