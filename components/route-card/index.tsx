import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import Paragraph from "@components/paragraph";
import TitleGroup from "@components/title-group";
import { Box, Overlay, ImageContainer } from "./styles";

interface Props {
  image: Image;
  title: string;
  description: string;
  route: string;
}

const RouteCard: React.FC<Props> = ({
  image,
  title,
  description,
  route,
}: Props): JSX.Element => {
  return (
    <Box>
      <ImageContainer>
        <ImageComponent image={image}></ImageComponent>
      </ImageContainer>
      <Overlay>
        <TitleGroup gap="0">
          <PrimaryHeading small>{title}</PrimaryHeading>
          <Paragraph>{description}</Paragraph>
        </TitleGroup>
        <PrimaryButton route={route}>Explore Products</PrimaryButton>
      </Overlay>
    </Box>
  );
};
export default RouteCard;
