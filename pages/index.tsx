import PrimaryHeading from "@components/headings/primary-heading";
import Page from "@components/layout/common/page";
import Hero from "@components/layout/homepage/hero";
import { NextPage } from "next";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Page>
      <Hero />
    </Page>
  );
};

export default HomePage;
