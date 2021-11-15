import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import TitleGroup from "@components/title-group";
import { Section } from "./styles";

const AboutSection: React.FC = (): JSX.Element => {
  return (
    <Section>
      <TitleGroup align="center">
        <PrimaryHeading align="center" small>
          "We strive to make skincare an affordable and enjoyable ritual for
          anyone who wants to take care of themselves and their body."
        </PrimaryHeading>
      </TitleGroup>
      <PrimaryButton route="/about">Our story</PrimaryButton>
    </Section>
  );
};

export default AboutSection;
