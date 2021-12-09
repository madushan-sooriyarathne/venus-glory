import Page from "@components/layout/common/page";
import ProductSection from "@components/layout/product-page/product-section";
import RelatedProductsSection from "@components/layout/product-page/related-products";

import { products } from "@site-data";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from "next";

interface Props {
  product: Product;
}

const ProductPage: React.FC<Props> = ({ product }: Props): JSX.Element => {
  return (
    <Page>
      <ProductSection product={product} />
      <RelatedProductsSection relatedProducts={[product]} />
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

const getStaticPaths: GetStaticPaths = (): GetStaticPathsResult => {
  return {
    paths: products.map((product) => ({
      params: { productId: product.slug },
    })),
    fallback: false,
  };
};

export default ProductPage;
export { getStaticProps, getStaticPaths };
