import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";
import { HeroContainer, HeroContent, TitleGroup } from "./styles";

const Hero: React.FC = (): JSX.Element => {
  return (
    <HeroContainer>
      <ImageComponent image={{ src: "/assets/img/hero-bg.jpg", blurUrl: "" }} />
      <HeroContent>
        <TitleGroup>
          <PrimaryHeading>
            Natural cosmetics for gentle skin care
          </PrimaryHeading>
          <PrimaryButton route="/shop">Shop Now</PrimaryButton>
        </TitleGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
