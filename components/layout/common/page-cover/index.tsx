import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import { CoverSection, CoverOverlay } from "./styles";

interface Props {
  image: Image;
  heading: string;
  subHeading?: string;
}

const PageCover: React.FC<Props> = ({
  image,
  heading,
  subHeading,
}: Props): JSX.Element => {
  return (
    <CoverSection>
      <ImageComponent image={image} />
      <CoverOverlay>
        <PrimaryHeading align="center">{heading}</PrimaryHeading>
        <Paragraph align="center">{subHeading}</Paragraph>
      </CoverOverlay>
    </CoverSection>
  );
};

export default PageCover;
