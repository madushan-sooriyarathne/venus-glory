import Page from "@components/layout/common/page";

import { products } from "@site-data";
import { GetStaticProps, GetStaticPropsResult } from "next";

interface Props {
  product: Product;
}

const ProductPage: React.FC<Props> = ({ product }: Props): JSX.Element => {
  return (
    <Page>
      <h1>This is individual Product Page</h1>
    </Page>
  );
};

const getStaticProps: GetStaticProps = (): GetStaticPropsResult<Props> => {
  return {
    props: {
      product: products[0],
    },
  };
};

export default ProductPage;
export { getStaticProps };
