import { ReactNode } from "react";

import { Heading } from "./styles";

interface Props {
  children: ReactNode;
  align?: Alignment;
  light?: boolean;
}

const PrimaryHeading: React.FC<Props> = ({
  children,
  align = "center",
  light = false,
}: Props): JSX.Element => {
  return (
    <Heading align={align} light={light}>
      {children}
    </Heading>
  );
};

export default PrimaryHeading;
