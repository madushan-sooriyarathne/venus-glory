import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import Paragraph from "@components/paragraph";
import TitleGroup from "@components/title-group";
import { BestSellersSection, Title } from "./styles";

const BestSellers: React.FC = (): JSX.Element => {
  return (
    <BestSellersSection>
      <Title>
        <TitleGroup>
          <PrimaryHeading small>Bestsellers</PrimaryHeading>
          <Paragraph align="left">
            A wide range of face and body care cosmetics that will not leave
            indifferent even the most demanding customers.
          </Paragraph>
          <PrimaryButton route="/shop">Shop All</PrimaryButton>
        </TitleGroup>
      </Title>
    </BestSellersSection>
  );
};

export default BestSellers;
