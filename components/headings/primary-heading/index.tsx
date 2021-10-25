import { ReactNode } from "react";

import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  align?: Alignment;
  light?: boolean;
  small?: boolean;
}

const PrimaryHeading: React.FC<Props> = ({
  children,
  align = "center",
  light = false,
  small = false,
}: Props): JSX.Element => {
  return (
    <Heading align={align} light={light} small={small}>
      {children}
    </Heading>
  );
};

export default PrimaryHeading;
