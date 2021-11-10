import RouteCard from "@components/route-card";
import { Section } from "./styles";

const GenderSection: React.FC = (): JSX.Element => {
  return (
    <Section>
      <RouteCard
        image={{
          src: "/assets/img/women.jpg",
          blurUrl: "",
        }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        title="For Women"
        route="/shop/categories/women"
      />
      <RouteCard
        image={{
          src: "/assets/img/men.jpg",
          blurUrl: "",
        }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        title="For Men"
        route="/shop/categories/men"
      />
      <RouteCard
        image={{
          src: "/assets/img/kids.jpg",
          blurUrl: "",
        }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        title="For Kids"
        route="/shop/categories/kids"
      />
    </Section>
  );
};

export default GenderSection;
