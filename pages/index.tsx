import Page from "@components/layout/common/page";
import BestSellers from "@components/layout/homepage/bestsellers-section";
import Hero from "@components/layout/homepage/hero";
import { NextPage } from "next";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Page>
      <Hero />
      <BestSellers />
    </Page>
  );
};

export default HomePage;
