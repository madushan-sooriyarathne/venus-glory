import { ReactNode } from "react";
import { Para } from "./styles";

interface Props {
  children: ReactNode;
  align?: Alignment;
  small?: boolean;
}

const Paragraph: React.FC<Props> = ({
  children,
  align = "left",
  small = false,
}: Props): JSX.Element => {
  return (
    <Para align={align} small={small}>
      {children}
    </Para>
  );
};

export default Paragraph;
