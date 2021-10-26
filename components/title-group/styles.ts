import styled from "styled-components";

interface GroupProps {
  align: Alignment;
  gap: string;
}

const Group = styled.div<GroupProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.align === "center"
      ? "center"
      : props.align === "left"
      ? "flex-start"
      : "flex-end"};
  justify-content: center;
  gap: ${(props) => props.gap};
`;

export { Group };
