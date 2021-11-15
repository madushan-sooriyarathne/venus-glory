import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import TitleGroup from "@components/title-group";
import { Banner, ContentOverlay, ContentContainer } from "./styles";

interface Props {
  heading: string;
  subHeading?: string;
  description: string;
  route: string;
  routeLabel: string;
  image: Image;
}

const ImageBanner: React.FC<Props> = ({
  heading,
  description,
  subHeading,
  route,
  routeLabel,
  image,
}: Props): JSX.Element => {
  return (
    <Banner>
      <ImageComponent image={image} />
      <ContentOverlay>
        <ContentContainer>
          <TitleGroup>
            <PrimaryHeading align="left">{heading}</PrimaryHeading>
            <Paragraph align="left">{description}</Paragraph>
          </TitleGroup>
          <PrimaryButton route={route}>{routeLabel}</PrimaryButton>
        </ContentContainer>
      </ContentOverlay>
    </Banner>
  );
};

export default ImageBanner;
