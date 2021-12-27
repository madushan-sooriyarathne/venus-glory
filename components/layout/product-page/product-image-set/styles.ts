import { motion } from "framer-motion";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    "pr"
    "th";
  align-items: start;
  justify-items: center;
  row-gap: 2rem;
`;

const ImagePreview = styled(motion.div)`
  grid-area: pr;
  width: 100%;
  min-height: 50rem;
  height: 50rem;
`;

const ThumbRow = styled.div`
  grid-area: th;
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  gap: 1rem;
`;

interface ThumbnailProps {
  selected: boolean;
}

const Thumbnail = styled.div<ThumbnailProps>`
  width: 9rem;
  height: 6rem;
  border: ${(props) =>
    `2px solid ${
      props.selected ? props.theme.colors.blackLight : "transparent"
    }`};
  cursor: pointer;
`;

export { ImageContainer, ImagePreview, ThumbRow, Thumbnail };
