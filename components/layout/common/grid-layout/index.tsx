import { ReactNode, ReactNodeArray } from "react";
import { GridComponent } from "./styles";

interface Props {
  children: ReactNode | ReactNodeArray;
  layout?: boolean;
  rows?: number;
  columns?: number;
  rowSize?: number; // Row size in REMs
  columnSize?: number; // Column size in REMs
  rowGap?: number; // gutter between rows in REMs
  columnGap?: number; // gutter between rows in REMs
}

const ItemGrid: React.FC<Props> = ({
  children,
  layout = true,
  columns = 3,
  rows = 1,
  rowSize,
  columnSize,
  rowGap,
  columnGap,
}: Props): JSX.Element => {
  return (
    <GridComponent
      layout={layout}
      rows={rows | 1}
      columns={columns | 3}
      rowSize={rowSize ? `${rowSize}rem` : "40rem"}
      columnSize={columnSize ? `${columnSize}rem` : "min-content"}
      columnGap={columnGap ? `${columnGap}rem` : "3rem"}
      rowGap={rowGap ? `${rowGap}rem` : "3rem"}
    >
      {children}
    </GridComponent>
  );
};

export default ItemGrid;
