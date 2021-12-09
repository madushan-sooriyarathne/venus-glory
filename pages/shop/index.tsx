import Page from "@components/layout/common/page";
import PageCover from "@components/layout/common/page-cover";
import ShopPage from "@components/layout/shop/shop-page";
import { products } from "@site-data";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

interface Props {
  products: Product[];
}

const name: NextPage<Props> = ({ products }: Props): JSX.Element => {
  return (
    <Page>
      <PageCover
        image={{ src: "/assets/img/perfumes.jpg", blurUrl: "" }}
        heading="Shop"
      />
      <ShopPage products={products} />
    </Page>
  );
};

const getStaticProps: GetStaticProps = (): GetStaticPropsResult<Props> => {
  return {
    props: {
      products: products,
    },
  };
};

export default name;
export { getStaticProps };
