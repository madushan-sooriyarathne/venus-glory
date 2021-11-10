import PrimaryButton from "@components/buttons/primary-button";
import PrimaryHeading from "@components/headings/primary-heading";
import Paragraph from "@components/paragraph";
import ProductCard from "@components/product-card";
import TitleGroup from "@components/title-group";
import { ProductSection, Grid } from "./styles";

interface Props {
  //   products: Product[];
  title: string;
  subHeading?: string;
  route: string;
}

const ProductGrid: React.FC<Props> = ({
  title,
  //   products,
  route,
  subHeading,
}: Props): JSX.Element => {
  return (
    <ProductSection>
      <TitleGroup align="center">
        <PrimaryHeading align="center">{title}</PrimaryHeading>
        <Paragraph align="center">{subHeading}</Paragraph>
      </TitleGroup>
      <Grid>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
      <PrimaryButton route={route}>Explore More Products</PrimaryButton>
    </ProductSection>
  );
};

export default ProductGrid;
