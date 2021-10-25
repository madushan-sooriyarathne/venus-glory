import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "./styles";

interface Props {
  route: string;
  children: ReactNode;
  light?: boolean;
  small?: boolean;
}

const PrimaryButton: React.FC<Props> = ({
  route,
  children,
  light = false,
  small = false,
}: Props): JSX.Element => {
  return (
    <Link href={route}>
      <Button>{children}</Button>
    </Link>
  );
};

export default PrimaryButton;
