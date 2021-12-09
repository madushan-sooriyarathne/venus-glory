import PrimaryHeading from "@components/headings/primary-heading";
import ProductCard from "@components/product-card";
import { ProductsSection, ProductGrid } from "./styles";

interface Props {
  relatedProducts: Product[];
}

const RelatedProductsSection: React.FC<Props> = ({
  relatedProducts,
}: Props): JSX.Element => {
  return (
    <ProductsSection>
      <PrimaryHeading align="center" small>
        Related Products
      </PrimaryHeading>
      <ProductGrid>
        {relatedProducts.map((prod) => (
          <ProductCard product={prod} />
        ))}
      </ProductGrid>
    </ProductsSection>
  );
};

export default RelatedProductsSection;
