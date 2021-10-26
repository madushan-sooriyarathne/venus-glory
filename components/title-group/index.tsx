import { ReactNode, ReactNodeArray } from "react";
import { Group } from "./styles";

interface Props {
  children: ReactNodeArray | ReactNode;
  gap?: string;
  align?: Alignment;
}

const TitleGroup: React.FC<Props> = ({
  children,
  gap = "2rem",
  align = "left",
}: Props): JSX.Element => {
  return (
    <Group gap={gap} align={align}>
      {children}
    </Group>
  );
};

export default TitleGroup;
