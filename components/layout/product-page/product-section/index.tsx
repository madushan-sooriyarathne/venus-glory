import ReactMarkdown from "react-markdown";

import ActionButton from "@components/buttons/action-button";
import PrimaryHeading from "@components/headings/primary-heading";
import ImageComponent from "@components/image-component";

import {
  ProductContainer,
  ProductInfoSection,
  ProductInfoContainer,
  ProductInfoCard,
  ProductInfoNavigation,
  ProductInfoNavButton,
  ProductActionSection,
  ProductMetadata,
  CategoryLabel,
  ProductSizeLabel,
  productInfoCardVariants,
  ProductTag,
  ItemGroup,
  AddToFavoriteButton,
  PriceTag,
  PreviousPrice,
} from "./styles";
import ProductImageSet from "../product-image-set";
import { useState } from "react";
import ProductDescription from "../product-description";
import ProductIngredients from "../product-ingredients";
import ProductUsage from "../product-usage";

interface Props {
  product: Product;
}

type ProductInfoNavType = "images" | "description" | "ingredients" | "howtouse";

const navLinks: { id: string; label: string }[] = [
  { id: "images", label: "Images" },
  { id: "description", label: "Description" },
  { id: "ingredients", label: "Ingredients" },
  { id: "howtouse", label: "How to Use" },
];

const ProductSection: React.FC<Props> = ({ product }: Props): JSX.Element => {
  const [selection, setSelection] = useState<ProductInfoNavType>("images");
  const [fav, setFav] = useState<boolean>(false);

  const toggleFav = () => {
    setFav((prevState) => !prevState);
  };

  return (
    <ProductContainer>
      <ProductInfoSection>
        <ProductInfoContainer>
          {selection === "images" && (
            <ProductInfoCard
              variants={productInfoCardVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <ProductImageSet
                images={[product.image, ...product.otherImages]}
              />
            </ProductInfoCard>
          )}

          {selection === "description" && (
            <ProductInfoCard
              variants={productInfoCardVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <ProductDescription description={product.description} />
            </ProductInfoCard>
          )}
          {selection === "ingredients" && (
            <ProductInfoCard
              variants={productInfoCardVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <ProductIngredients
                productName={product.name}
                ingredients={product.ingredients}
              />
            </ProductInfoCard>
          )}

          {selection === "howtouse" && (
            <ProductInfoCard
              variants={productInfoCardVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <ProductUsage
                productName={product.name}
                usageInstructions={product.usage}
              />
            </ProductInfoCard>
          )}
        </ProductInfoContainer>
        <ProductInfoNavigation>
          {navLinks.map((link) => (
            <ProductInfoNavButton
              selected={selection === link.id}
              onClick={() => setSelection(link.id as ProductInfoNavType)}
            >
              {link.label}
            </ProductInfoNavButton>
          ))}
        </ProductInfoNavigation>
      </ProductInfoSection>
      <ProductActionSection>
        <ProductMetadata>
          <ItemGroup gap={2}>
            {product.bestseller && <ProductTag>Bestseller</ProductTag>}
            {product.new && <ProductTag>New Arrival</ProductTag>}
          </ItemGroup>
          <PrimaryHeading small align="left">
            {product.name}
          </PrimaryHeading>
          <ItemGroup gap={2}>
            <CategoryLabel>{product.category.name}</CategoryLabel>
            <ProductSizeLabel>{product.size}</ProductSizeLabel>
          </ItemGroup>
        </ProductMetadata>
        <ItemGroup gap={1} align="flex-end">
          {product.pricing.discount ? (
            <>
              <PriceTag>{`${product.pricing.currency} ${Math.round(
                product.pricing.price -
                  product.pricing.price * (product.pricing.discount / 100)
              )}`}</PriceTag>
              <PreviousPrice>{`${product.pricing.currency} ${product.pricing.price}`}</PreviousPrice>
            </>
          ) : (
            <PriceTag>{`${product.pricing.currency} ${product.pricing.price}`}</PriceTag>
          )}
        </ItemGroup>
        <ItemGroup gap={3}>
          <ActionButton onClick={() => alert("Product added to the cart")}>
            Add to cart
          </ActionButton>
          <AddToFavoriteButton onClick={toggleFav}>
            <use
              xlinkHref={`/assets/svg/sprites.svg#${
                fav ? "fav-filled" : "fav"
              }`}
            />
          </AddToFavoriteButton>
        </ItemGroup>
      </ProductActionSection>
    </ProductContainer>
  );
};
export default ProductSection;
