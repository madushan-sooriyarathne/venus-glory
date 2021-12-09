import ReactMarkdown from "react-markdown";

import ActionButton from "@components/buttons/action-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";

import {
  ProductContainer,
  ProductInfoSection,
  ProductInfoContainer,
  ProductInfoNavigation,
  ProductInfoNavButton,
  ProductActionSection,
} from "./styles";

interface Props {
  product: Product;
}

const ProductSection: React.FC<Props> = ({ product }: Props): JSX.Element => {
  return (
    <ProductContainer>
      <ProductInfoSection>
        <ProductInfoContainer>
          <ImageComponent image={product.image}></ImageComponent>
          <div>
            <ReactMarkdown>{product.description}</ReactMarkdown>
          </div>
        </ProductInfoContainer>
        <ProductInfoNavigation>
          <ProductInfoNavButton selected={false}>Images</ProductInfoNavButton>
          <ProductInfoNavButton selected={true}>
            Description
          </ProductInfoNavButton>
          <ProductInfoNavButton selected={true}>
            Ingredients
          </ProductInfoNavButton>
          <ProductInfoNavButton selected={true}>
            How to use
          </ProductInfoNavButton>
        </ProductInfoNavigation>
      </ProductInfoSection>
      <ProductActionSection>
        <PrimaryHeading small align="left">
          {product.name}
        </PrimaryHeading>
        <ActionButton onClick={() => alert("Product added to the cart")}>
          Add to cart
        </ActionButton>
      </ProductActionSection>
    </ProductContainer>
  );
};
export default ProductSection;
