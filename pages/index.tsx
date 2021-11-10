import ImageContentSection from "@components/layout/common/image-content-section";
import Page from "@components/layout/common/page";
import BestSellers from "@components/layout/homepage/bestsellers-section";
import Categories from "@components/layout/homepage/categories";
import Hero from "@components/layout/homepage/hero";
import { NextPage } from "next";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <Page>
      <Hero />
      <Categories />
      <BestSellers />
      <ImageContentSection
        image={{ src: "/assets/img/men.jpg", blurUrl: "" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        heading="For Men"
        route="/shop/categories/men"
      />

      <ImageContentSection
        image={{ src: "/assets/img/men.jpg", blurUrl: "" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        heading="For Kids"
        route="/shop/categories/kids"
        reversed
      />
    </Page>
  );
};

export default HomePage;
