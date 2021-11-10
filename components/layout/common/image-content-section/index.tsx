import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import TitleGroup from "@components/title-group";
import {
  Container,
  ContentWrapper,
  ImageBg,
  ImageWrapper,
  ImageContainer,
} from "./styles";

interface Props {
  image: Image;
  heading: string;
  description: string;
  route: string;
  reversed?: boolean;
}

const ImageContentSection: React.FC<Props> = ({
  image,
  heading,
  description,
  route,
  reversed = false,
}: Props): JSX.Element => {
  return (
    <Container>
      <ContentWrapper reversed={reversed}>
        <TitleGroup>
          <PrimaryHeading small>{heading}</PrimaryHeading>
          <Paragraph>{description}</Paragraph>
        </TitleGroup>
        <PrimaryButton route={route}>Explore</PrimaryButton>
      </ContentWrapper>
      <ImageWrapper reversed={reversed}>
        <ImageBg reversed={reversed} />
        <ImageContainer>
          <ImageComponent image={image} />
        </ImageContainer>
      </ImageWrapper>
    </Container>
  );
};

export default ImageContentSection;
