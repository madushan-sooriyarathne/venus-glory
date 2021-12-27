import { useState } from "react";
import Link from "next/link";

import TertiaryHeading from "@components/headings/tertiary-heading";
import ImageComponent from "@components/image-component";
import {
  Card,
  BackgroundImageWrapper,
  BackgroundImageHolder,
  ProductDetails,
  ProductDetailsGroup,
  ProductName,
  ProductPrice,
  AddToFavoriteButton,
} from "./styles";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }: Props): JSX.Element => {
  const [fav, toggleFav] = useState<boolean>(false);

  const handleAddToFav = () => {
    toggleFav((prevState) => !prevState);
  };

  return (
    <Card>
      <Link href={`/shop/${product.slug}`}>
        <BackgroundImageHolder>
          <BackgroundImageWrapper>
            <ImageComponent image={product.image} />
          </BackgroundImageWrapper>
        </BackgroundImageHolder>
      </Link>
      <ProductDetails>
        <Link href={`/shop/${product.slug}`}>
          <ProductDetailsGroup>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              {`${product.pricing.currency} ${product.pricing.price}`}
            </ProductPrice>
          </ProductDetailsGroup>
        </Link>
        <AddToFavoriteButton onClick={handleAddToFav}>
          <use
            xlinkHref={`/assets/svg/sprites.svg#${fav ? "fav-filled" : "fav"}`}
          />
        </AddToFavoriteButton>
      </ProductDetails>
    </Card>
  );
};

export default ProductCard;
