import { ReactNode } from "react";
import { Button } from "./styles";

interface Props {
  onClick: () => void;
  children: ReactNode;
  loading?: boolean;
}
// TODO Add the loading spinner
const ActionButton: React.FC<Props> = ({
  onClick,
  children,
  loading,
}: Props): JSX.Element => {
  return (
    <Button onClick={onClick} layout>
      {children}
      {loading && "loading..."}
    </Button>
  );
};

export default ActionButton;
