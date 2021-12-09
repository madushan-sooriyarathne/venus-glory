import ImageBanner from "@components/layout/common/image-banner/indes";
import ImageContentSection from "@components/layout/common/image-content-section";
import Page from "@components/layout/common/page";
import ProductGrid from "@components/layout/common/product-grid";
import AboutSection from "@components/layout/homepage/about-section";
import BestSellers from "@components/layout/homepage/bestsellers-section";
import Categories from "@components/layout/homepage/categories";
import GenderSection from "@components/layout/homepage/gender-section";
import Hero from "@components/layout/homepage/hero";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

import { products } from "@site-data";

interface Props {
  products: Product[];
}

const HomePage: NextPage<Props> = ({ products }: Props): JSX.Element => {
  return (
    <Page>
      <Hero />
      <Categories />
      <BestSellers bestSellerProducts={products} />
      <GenderSection />
      <ProductGrid title="Latest Products" route="/shop" products={products} />
      <ImageContentSection
        image={{ src: "/assets/img/perfumes.jpg", blurUrl: "" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        heading="Perfumes"
        route="/shop/categories/perfumes"
      />
      <ImageBanner
        image={{ src: "/assets/img/gifts.png", blurUrl: "" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        heading="Gifts"
        route="/shop/categories/gifts"
        routeLabel="Explore Gifts"
      />
      <AboutSection />
    </Page>
  );
};

const getStaticProps: GetStaticProps = (): GetStaticPropsResult<Props> => {
  return {
    props: {
      products,
    },
  };
};

export default HomePage;
export { getStaticProps };
