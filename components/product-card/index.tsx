import TertiaryHeading from "@components/headings/tertiary-heading";
import ImageComponent from "@components/image-component";
import {
  Card,
  CardOverlay,
  CardDetailsGroup,
  ProductNameGroup,
  ProductPriceGroup,
  Label,
  BackgroundImageWrapper,
} from "./styles";

interface Props {
  // product: Product;
}

const ProductCard: React.FC<Props> = ({}: Props): JSX.Element => {
  return (
    <Card>
      <BackgroundImageWrapper>
        <ImageComponent
          image={{ src: "/assets/img/product-01.jpg", blurUrl: "" }}
        />
      </BackgroundImageWrapper>
      <CardOverlay>
        <CardDetailsGroup>
          <ProductNameGroup>
            <TertiaryHeading>Tonic Moisturizing</TertiaryHeading>
            <Label>For dry skin</Label>
          </ProductNameGroup>
          <ProductPriceGroup>
            <TertiaryHeading>LKR 3450</TertiaryHeading>
            <Label>200 ml</Label>
          </ProductPriceGroup>
        </CardDetailsGroup>
      </CardOverlay>
    </Card>
  );
};

export default ProductCard;
