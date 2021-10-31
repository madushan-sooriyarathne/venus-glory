import styled from "styled-components";

interface GridComponentProps {
  layout: boolean;
  columns: number;
  rows: number;
  rowGap: string;
  columnGap: string;
  columnSize: string;
  rowSize: string;
}

const GridComponent = styled.div<GridComponentProps>`
  grid-column: ${(props) =>
    props.layout ? "content-start / content-end" : "1 / 2"};

  width: 100%;
  height: auto;

  display: grid;

  grid-template-columns: ${(props) =>
    `repeat(${props.columns}, minmax(min-content, 1fr))`};
  grid-template-rows: ${(props) =>
    `repeat(${props.rows}, minmax(${props.rowSize}, min-content))`};
  grid-auto-rows: ${(props) => `minmax(${props.rowSize}, min-content)`};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  align-items: start;
  justify-content: start;
`;

export { GridComponent };
